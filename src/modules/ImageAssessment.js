import React, { Component, Fragment } from 'react';
import {
    Grid, Typography, Snackbar, SnackbarContent, IconButton, Link, Drawer, CssBaseline,
    List, ListItem, ListItemText, ListItemAvatar, ListItemSecondaryAction, InputLabel, Select,
    MenuItem
} from '@material-ui/core';
import { 
    withRouter
} from "react-router-dom";
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CloseIcon  from '@material-ui/icons/Close';
import { withStyles, createMuiTheme, responsiveFontSizes, ThemeProvider  } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import { compose } from 'recompose';

const canvasOffset = 50;
const generalRecs = {
    'objects': ['Trash Cans',
                'Cords',
                'Appliances',
                'Fragile Items',
                'Small Choking Hazards'],
    
    'description': ['When your baby starts moving, it is time to baby proof! Your kitchen can be a dangerous place for a curious crawler or walker.'],
    
    'solution': ['Don’t let kids by themselves in kitchen, keep them in your view always.',
                'Keep dangerous items up high.',
                'Secure/fix freestanding cabinets to wall.',
                'Unplug appliances.',
                'Remove or safely store sharp objects.',
                'Turn off or lock garbage disposal.',
                'Secure trash can.'],

    'product': [['Baby Proofing Kit', 'https://www.amazon.com/gp/search?ie=UTF8&tag=nmohan-20&linkCode=ur2&linkId=6ce109af2f2c50a710775d459627ff9d&camp=1789&creative=9325&index=aps&keywords=Baby proofing kit']]
}

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const styles = theme => ({
    root: {
        color: theme.palette.common.white,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        marginTop: 60,
        height: 'calc(100vh - 145px)',
        // minHeight: 500,
        // maxHeight: 1300,
    },
    container: {
        // margin: theme.spacing(8),
        // // marginBottom: theme.spacing(14),
        height: '100%',
        width: 'calc(100% - 450px)',
        marginLeft: 450,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        // backgroundColor: '#fde3a7',
    },
    containerCanvas: {
        // height: '90%',
    },
    containerSvg: {
        position: 'relative',
        // marginLeft: 480,
        // backgroundImage: `url('hero-bg-1.png')`,
        // backgroundSize: 'cover'
        height: '100%',
        width: '100%',
    },
    svgImage: {
        // height: '100%',
        // width: '100%',
    },
    boundingBox: {
        // animation: `draw 5s linear forwards`,
    },
    itemAvatar: {
        minWidth: '35px',
    },
    snackbar: {
        backgroundColor: theme.palette.primary.main,
    },
    snackbarLink: {
        color: '#fde3a7',
        marginLeft: theme.spacing(1),
    },
    drawer: {
        flexShrink: 0,
        zIndex: 0,
    },
    drawerPaper: {
        marginTop: 60,
        minWidth: 450,
        width: 450,
        height: 'calc(100vh - 145px)'
    },
    noHazardContainer: {
        marginTop: 10,
    }
});

const ExpansionPanel = withStyles({
    root: {
      border: '1px solid rgba(0, 0, 0, .125)',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        // margin: 'auto',
      },
    },
    expanded: {},
})(MuiExpansionPanel);
  
const ExpansionPanelSummary = withStyles({
    root: {
      backgroundColor: '#e08283',
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  })(MuiExpansionPanelSummary);
  
  const ExpansionPanelDetails = withStyles(theme => ({
    root: {
      padding: theme.spacing(2),
    },
}))(MuiExpansionPanelDetails);


class ImageAssessment extends Component {
    
    constructor(props) {
        super(props);
        
        this.handleClose = this.handleClose.bind(this);
        this.handleCheckChange = this.handleCheckChange.bind(this);
        this.handleExpansionOnChange = this.handleExpansionOnChange.bind(this);
        this.objectOnMouseEnter = this.objectOnMouseEnter.bind(this);
        this.objectOnMouseLeave = this.objectOnMouseLeave.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);

        this.imageRef = React.createRef();
        this.svgRef = React.createRef();

        this.state = {
            isOpen: true,
            isChecked: false,
            isLoading: true,
            modelData: null,
            expandedPanel: '',
            hoveredObject: '',
            statuses: {},
            objectStatus: 'Unresolved',
            imageSrc: null,
            canvasWidth: 0,
            canvasHeight: 0
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    componentDidUpdate(prevProps) {
        if (this.props && this.state.isLoading) {
            // console.log(this.props.location.state.modelData);
            // const canvas = this.refs.canvas
            // const ctx = canvas.getContext('2d');

            var reader = new FileReader();
            reader.onload = (event) => {
                // var img = new Image();
                // img.onload = () => {

                //     ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);
                // }
                // img.src = event.target.result;
                this.setState({
                    imageSrc: event.target.result
                })
            }
            reader.readAsDataURL(this.props.location.state.fileInput); 

            if (this.state.expandedPanel === '') {
                this.setState({
                    expandedPanel: this.props.location.state.modelData[0]['category']
                })
            }


            this.setState({
                isLoading: false,
            });
        }

        // if (this.imageRef.current) {
        //     console.log(this.imageRef.current.offsetWidth)
        //     canvasWidth = this.imageRef.current.clientWidth
        //     canvasHeight = this.imageRef.current.clientHeight
        // }
    }

    updateDimensions() {
        if (this.svgRef.current) {
            this.setState({
                canvasWidth: this.svgRef.current.width.baseVal.value,
                canvasHeight: this.svgRef.current.height.baseVal.value,
            })
        }
    }

    handleClose() {
        this.setState(state => ({
            isOpen: false
        }))
    }

    handleCheckChange() {
        this.setState(state => ({
            isChecked: true
        }))
    }
    
    handleExpansionOnChange = hazardPanel => (event, expanded) => {
        this.setState(state => ({
            expandedPanel: expanded ? hazardPanel : ''
        }))
    }

    objectOnMouseEnter = hazardObject => () =>{
        this.setState({
            hoveredObject: hazardObject
        })
    }

    objectOnMouseLeave() {
        this.setState({
            hoveredObject: ''
        })
    }

    handleStatusChange = hazardObject => event => {
        // console.log(hazardObject);
        // console.log(event.target.value);
        const { statuses } = this.state;
        const newStatus = {
          ...statuses,
          [hazardObject]: event.target.value
        };
        this.setState({ statuses: newStatus });
    }

    render() {
        const { classes } = this.props

        return (
        
            <section className={classes.root}>
                <ThemeProvider theme={theme}>
                <CssBaseline />
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                    paper: classes.drawerPaper,
                    }}
                    anchor="left"
                >
                    <div className={classes.toolbar} />

                    {this.state.isLoading ?
                        <Fragment>
                            <Divider />
                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    Loading...
                                </ExpansionPanelSummary>
                            </ExpansionPanel>
                        </Fragment>
                        :
                        <Fragment>
                            {this.props.location.state.modelData.length > 0 ?
                                <Fragment>
                                    {this.props.location.state.modelData.map((hazardCategory, i) => {
                                        return <Fragment key={i}>
                                            <Divider />
                                            <ExpansionPanel
                                                expanded={this.state.expandedPanel === hazardCategory['category']}
                                                onChange={this.handleExpansionOnChange(hazardCategory['category'])}
                                                >
                                                <ExpansionPanelSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                >
                                                    <Typography variant="h6" className={classes.heading}>{hazardCategory['category']}</Typography>
                                                </ExpansionPanelSummary>

                                                <ExpansionPanelDetails>
                                                    <Grid container spacing={1}>
                                                        <Grid item xs={12}>                                                      
                                                            <Typography variant='h6'>
                                                                Hazardous Object(s):
                                                            </Typography>

                                                            <List>
                                                                {hazardCategory['objects'].map((hazardObject, i) => {
                                                                    return <ListItem 
                                                                        selected={this.state.hoveredObject === hazardCategory['category'] + i}
                                                                        onMouseEnter={this.objectOnMouseEnter(hazardCategory['category'] + i)}
                                                                        onMouseLeave={this.objectOnMouseLeave}
                                                                        key={hazardCategory['category'] + i}>

                                                                    <ListItemAvatar className={classes.itemAvatar}>
                                                                        <Typography variant='h4'>
                                                                            {i + 1}
                                                                        </Typography>
                                                                    </ListItemAvatar>

                                                                    <ListItemText
                                                                        primary={<Typography variant='h6'>{hazardObject['name']}</Typography>}
                                                                        secondary={'Predicted with ' + Math.trunc(hazardObject['score'] * 100) + '% confidence'}
                                                                    />

                                                                     <ListItemSecondaryAction>
                                                                        {/* <IconButton color='primary' fontSize="large" edge="end">
                                                                            <DoneIcon />
                                                                        </IconButton>
                                                                        <IconButton color='secondary' fontSize="large" edge="end">
                                                                            <ClearIcon />
                                                                        </IconButton> */}
                                                                         {/* <FormControl> */}
                                                                            <InputLabel id="status-select">Status</InputLabel>
                                                                            <Select
                                                                            labelId="status-select"
                                                                            id="demo-simple-select"
                                                                            value={this.state.statuses[(hazardCategory['category'] + i)] || 'Unresolved'}
                                                                            onChange={this.handleStatusChange(hazardCategory['category'] + i)}
                                                                            >
                                                                            <MenuItem value='Unresolved'>Unresolved</MenuItem>
                                                                            <MenuItem value='Resolved'>Resolved</MenuItem>
                                                                            <MenuItem value='Invalid'>Invalid</MenuItem>
                                                                            </Select>
                                                                        {/* </FormControl> */}
                                                                    </ListItemSecondaryAction>

                                                                    </ListItem>
                                                                })}
                                                            </List>
                                                        </Grid>

                                                        <Grid item xs={12}>
                                                            <Typography variant='h6'>
                                                                Hazard Description:
                                                            </Typography>

                                                            <List dense={true}>
                                                                {hazardCategory['description'].map((hazardDescription, i) => {
                                                                    return <ListItem key={i}>
                                                                    <ListItemText
                                                                        primary={<Typography variant='body1'>{hazardDescription}</Typography>}
                                                                    />
                                                                    </ListItem>
                                                                })}
                                                            </List>
                                                        </Grid>

                                                        <Grid item xs={12}>
                                                            <Typography variant='h6'>
                                                                Recommended Solution(s):
                                                            </Typography>
                                                            
                                                            <List dense={true}>
                                                                {hazardCategory['solution'].map((hazardSolution, i) => {
                                                                    return <ListItem key={i}>
                                                                    <ListItemText
                                                                        primary={<Typography variant='body1'>{hazardSolution}</Typography>}
                                                                    />
                                                                    </ListItem>
                                                                })}
                                                            </List>
                                                        </Grid>

                                                        <Grid item xs={12}>
                                                            <Typography variant='h6'>
                                                                Recommended Product(s):
                                                            </Typography>
                                                            
                                                            <List dense={true}>
                                                                {hazardCategory['product'].map((hazardProduct, i) => {
                                                                    return <ListItem key={i}>
                                                                    <Link variant='body1' target="_blank" href={hazardProduct[1]}>
                                                                        {hazardProduct[0]}
                                                                    </Link>
                                                                    
                                                                    </ListItem>
                                                                })}
                                                            </List>
                                                        </Grid>
                                                    </Grid>
                                                
                                                </ExpansionPanelDetails>

                                            </ExpansionPanel>
                                        </Fragment>;
                                    })}
                                </Fragment>
                                :
                                <Fragment>
                                    <Grid container direction="column" justify='center' alignItems='center' className={classes.noHazardContainer}>
                                        <Typography variant='h4'>
                                            No Hazards Found
                                        </Typography>
                                    </Grid>
                                </Fragment>
                            }

                            <Divider />
                            <ExpansionPanel
                                expanded={this.state.expandedPanel === 'General Recommendations'}
                                onChange={this.handleExpansionOnChange('General Recommendations')}
                                >
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography variant="h6" className={classes.heading}>General Recommendations</Typography>
                                </ExpansionPanelSummary>

                                <ExpansionPanelDetails>
                                    <Grid container spacing={1}>
                                        <Typography variant='body1'>
                                            There are other hazards that HappyWalrus cannot detect just yet. Please review these general recommendations for more information.
                                        </Typography>

                                        <Grid item xs={12}>                                                      
                                            <Typography variant='h6'>
                                                Hazardous Object(s):
                                            </Typography>

                                            <List>
                                                {generalRecs['objects'].map((hazardObject, i) => {
                                                    return <ListItem 
                                                        key={'General Recommendations' + i}>
                                                    <ListItemText
                                                        primary={<Typography variant='body1'>{hazardObject}</Typography>}
                                                    />
                                                    </ListItem>
                                                })}
                                            </List>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography variant='h6'>
                                                Hazard Description:
                                            </Typography>

                                            <List dense={true}>
                                                {generalRecs['description'].map((hazardDescription, i) => {
                                                    return <ListItem key={i}>
                                                    <ListItemText
                                                        primary={<Typography variant='body1'>{hazardDescription}</Typography>}
                                                    />
                                                    </ListItem>
                                                })}
                                            </List>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography variant='h6'>
                                                Recommended Solution(s):
                                            </Typography>
                                            
                                            <List dense={true}>
                                                {generalRecs['solution'].map((hazardSolution, i) => {
                                                    return <ListItem key={i}>
                                                    <ListItemText
                                                        primary={<Typography variant='body1'>{hazardSolution}</Typography>}
                                                    />
                                                    </ListItem>
                                                })}
                                            </List>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography variant='h6'>
                                                Recommended Product(s):
                                            </Typography>
                                            
                                            <List dense={true}>
                                                {generalRecs['product'].map((hazardProduct, i) => {
                                                    return <ListItem key={i}>
                                                    <Link variant='body1' target="_blank" href={hazardProduct[1]}>
                                                        {hazardProduct[0]}
                                                    </Link>
                                                    
                                                    </ListItem>
                                                })}
                                            </List>
                                        </Grid>
                                    </Grid>
                                
                                </ExpansionPanelDetails>

                            </ExpansionPanel>
                        </Fragment>
                    }

                </Drawer>

                <Grid container direction="column" justify='center' alignItems='center' className={classes.container}>
                    {/* <canvas ref='canvas' width={canvasWidth} height={canvasHeight}  className={classes.containerCanvas}/> */}

                    <svg className={classes.containerSvg} ref={this.svgRef}>
                        <defs>
                            <filter id="shadow">
                                <feDropShadow/>
                            </filter>
                        </defs>

                        { !this.state.isLoading &&
                            <Fragment>
                                <image href={this.state.imageSrc} ref={this.imageRef} x={canvasOffset/2} width={this.state.canvasWidth - canvasOffset} height={this.state.canvasHeight} preserveAspectRatio='none' className={classes.svgImage}></image>

                                {this.props.location.state.modelData.map((hazardCategory) => {
                                    return hazardCategory['objects'].map((hazardObject, i) => {
                                        var box = hazardObject['box'];
                                        var minX = box[1] * (this.state.canvasWidth - canvasOffset);
                                        var minY = box[0] * this.state.canvasHeight;
                                        var width = (box[3] * (this.state.canvasWidth - canvasOffset)) - minX;
                                        var height = (box[2] * this.state.canvasHeight) - minY;

                                        
                                        return <g 
                                                onMouseEnter={this.objectOnMouseEnter(hazardCategory['category'] + i)}
                                                onMouseLeave={this.objectOnMouseLeave}
                                                className={classes.svgGroup} 
                                                key={hazardCategory['category'] + i}>
                                            <rect 
                                                x={minX + (canvasOffset/2)} 
                                                y={minY}
                                                width={width}
                                                height={height}
                                                filter="url(#shadow)"
                                                rx="10" 
                                                visibility={this.state.expandedPanel !== hazardCategory['category'] || this.state.statuses[hazardCategory['category'] + i] === 'Invalid' ? 'hidden' : 'visible'}
                                                stroke={this.state.hoveredObject === hazardCategory['category'] + i ? '#f0ff00' : 'transparent'} 
                                                fill="transparent" 
                                                strokeWidth="5"
                                                className={classes.boundingBox}
                                            >
                                            </rect>

                                            <circle 
                                                cx={minX - 10 + (canvasOffset/2)} 
                                                cy={minY - 15} 
                                                r="25" 
                                                // stroke="red" 
                                                // strokeWidth='4'
                                                // filter="url(#shadow)"
                                                fill='#f0ff00'
                                                visibility={this.state.expandedPanel !== hazardCategory['category'] || this.state.statuses[hazardCategory['category'] + i] === 'Invalid' ? 'hidden' : 'visible'}
                                            />

                                            <text 
                                                x={minX - 10 + (canvasOffset/2)} 
                                                y={minY}
                                                textAnchor="middle" 
                                                fill="black"
                                                fontSize='44px'
                                                fontWeight='bold'
                                                visibility={this.state.expandedPanel !== hazardCategory['category'] || this.state.statuses[hazardCategory['category'] + i] === 'Invalid' ? 'hidden' : 'visible'}
                                                >
                                                    !
                                            </text>

                                            <text 
                                                x={minX + 25 + (canvasOffset/2)} 
                                                y={minY - 15}
                                                textAnchor="left" 
                                                fill="white"
                                                fontSize='32px'
                                                fontWeight='bold'
                                                filter="url(#shadow)"
                                                visibility={this.state.hoveredObject === hazardCategory['category'] + i ? 'visible' : 'hidden'}
                                                >
                                                    {(i + 1) + ' - ' + hazardObject['name'] + ' (' + Math.trunc(hazardObject['score'] * 100) + '%)'}
                                            </text>

                                        </g>
                                        
                                    })
                                })}
                                {/* <circle cx="50" cy="50" r="50" fill="rebeccapurple"/> */}
                            </Fragment>
                        }
                    </svg>
                </Grid>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    open={this.state.isOpen}
                >
                    <SnackbarContent
                        className={classes.snackbar}
                        aria-describedby="client-snackbar"
                        message={
                            <Typography variant='h6' id="message-id">
                                Have a Moment?
                                <Link href='https://www.surveymonkey.com/r/ZVST7JP' target="_blank" underline='always' className={classes.snackbarLink}>
                                    Please take this quick survey!
                                </Link>
                            </Typography>
                        }
                        action={[
                            <IconButton
                                key="close"
                                aria-label="close"
                                color="inherit"
                                className={classes.close}
                                onClick={this.handleClose}
                            >
                                <CloseIcon />
                            </IconButton>,
                        ]}
                        />
                </Snackbar>
                </ThemeProvider>
            </section>
        )
    }
}

export default compose(
    withRouter,
    withStyles(styles)
)(ImageAssessment)