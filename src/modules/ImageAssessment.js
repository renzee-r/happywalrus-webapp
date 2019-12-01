import React, { Component, Fragment } from 'react';
import {
    Grid, Typography, 
    Snackbar, SnackbarContent, IconButton, Link, FormControlLabel,
    Switch, Drawer, CssBaseline, List, ListItem, ListItemText, ListItemAvatar, 
    ListItemSecondaryAction, ListItemIcon, FormControl, InputLabel, Select,
    MenuItem
} from '@material-ui/core';
import { 
    Link as RouterLink, withRouter
} from "react-router-dom";
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CloseIcon  from '@material-ui/icons/Close';
import DoneIcon  from '@material-ui/icons/Done';
import ClearIcon  from '@material-ui/icons/Clear';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import { compose } from 'recompose';
// import EmojiEmotions from '@material-ui/icons/EmojiEmotions';

const canvasWidth = 1600;
const canvasHeight = 900;
const canvasOffset = 100;

const styles = theme => ({
    root: {
        color: theme.palette.common.white,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        marginTop: '6.5vh',
        height: '82.5vh',
        // minHeight: 500,
        // maxHeight: 1300,
    },
    container: {
        // margin: theme.spacing(8),
        // // marginBottom: theme.spacing(14),
        // height: '83vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        // backgroundColor: '#fde3a7',
    },
    containerCanvas: {
        // height: '90%',
    },
    containerSvg: {
        position: 'absolute',
    },
    svgGroup: {

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
        width: 480,
        flexShrink: 0,
        zIndex: 0,
    },
    drawerPaper: {
        marginTop: '6vh',
        width: 480,
        height: "82.5vh",
    },
    noHazardContainer: {
        marginTop: 10,
    }
});

const RefLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);

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

        this.state = {
            isOpen: true,
            isChecked: false,
            isLoading: true,
            modelData: null,
            expandedPanel: '',
            hoveredObject: '',
            statuses: {},
            objectStatus: 'Unresolved',
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true });
    }

    componentDidUpdate(prevProps) {
        if (this.props && this.state.isLoading) {

            console.log(this.props.location.state.modelData);
            const canvas = this.refs.canvas
            const ctx = canvas.getContext('2d');

            var reader = new FileReader();
            reader.onload = (event) => {
                var img = new Image();
                img.onload = () => {

                    ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);
                }
                img.src = event.target.result;
            }
            reader.readAsDataURL(this.props.location.state.fileInput); 

            this.setState({
                isLoading: false,
            });
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
        console.log(hazardObject);
        console.log(event.target.value);
        const { statuses } = this.state;
        const newStatus = {
          ...statuses,
          [hazardObject]: event.target.value
        };
        this.setState({ statuses: newStatus });
    }

    render() {
        const { classes } = this.props
        const { modelData, isLoading , isOpen, isChecked } = this.state

        return (
        
            <section className={classes.root}>
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
                                    {this.props.location.state.modelData.map((hazardCategory) => {
                                        if (this.state.expandedPanel === '') {
                                            this.setState({
                                                expandedPanel: hazardCategory['category']
                                            })
                                        }

                                        return <Fragment>
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
                                                                        onMouseLeave={this.objectOnMouseLeave}>

                                                                    <ListItemAvatar className={classes.itemAvatar}>
                                                                        <Typography variant='h4'>
                                                                            {i + 1}
                                                                        </Typography>
                                                                    </ListItemAvatar>

                                                                    <ListItemText
                                                                        primary={hazardObject['name']}
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
                                                                {hazardCategory['objects'].map((hazardObject, i) => {
                                                                    return <ListItem>
                                                                    <ListItemText
                                                                        primary={'Hazard Description ' + (i + 1)}
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
                                                                {hazardCategory['objects'].map((hazardObject, i) => {
                                                                    return <ListItem>
                                                                    <ListItemText
                                                                        primary={'Amazon Link ' + (i + 1)}
                                                                    />
                                                                    </ListItem>
                                                                })}
                                                            </List>
                                                        </Grid>

                                                        {/* <Grid item xs={8}>
                                                            <Typography>
                                                                {hazardCategory['solution']}
                                                            </Typography>
                                                            <div className="amazon-div" onLoad={this.AmazonEmbededCode()}>
                                                                <script src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US"></script>
                                                            </div>
                                                            <div id="amazon-search"></div>
                                                            <div id="amazon-adunit"></div>
                                                        </Grid> */}


                                                        {/* <Grid item xs={12}>
                                                            <FormControlLabel
                                                                control={
                                                                <Switch
                                                                    checked={false}
                                                                    // onChange={this.handleCheckChange}
                                                                    value="checkedB"
                                                                    color="primary"
                                                                />
                                                                }
                                                                label="Not Resolved"
                                                            />
                                                        </Grid> */}
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
                        </Fragment>
                    }

                </Drawer>

                <Grid container direction="column" justify='center' alignItems='center' className={classes.container}>
                    <canvas ref='canvas' width={canvasWidth} height={canvasHeight}  className={classes.containerCanvas}/>

                    <svg width={canvasWidth + canvasOffset} height={canvasHeight} className={classes.containerSvg}>
                        <defs>
                            <filter id="shadow">
                                <feDropShadow/>
                            </filter>
                        </defs>

                        { !this.state.isLoading &&
                            <Fragment>
                                {this.props.location.state.modelData.map((hazardCategory) => {
                                    return hazardCategory['objects'].map((hazardObject, i) => {
                                        var box = hazardObject['box'];
                                        var minX = box[1] * canvasWidth;
                                        var minY = box[0] * canvasHeight;
                                        var width = (box[3]* canvasWidth) - minX;
                                        var height = (box[2] * canvasHeight) - minY;

                                        
                                        return <g 
                                                onMouseEnter={this.objectOnMouseEnter(hazardCategory['category'] + i)}
                                                onMouseLeave={this.objectOnMouseLeave}
                                                className={classes.svgGroup} >
                                            <rect 
                                                x={minX + (canvasOffset/2)} 
                                                y={minY}
                                                width={width}
                                                height={height}
                                                filter="url(#shadow)"
                                                rx="10" 
                                                visibility={this.state.expandedPanel === hazardCategory['category'] ? 'visible' : 'hidden'}
                                                stroke={this.state.hoveredObject === hazardCategory['category'] + i ? '#f0ff00' : 'transparent'} 
                                                fill="transparent" 
                                                strokeWidth="5"
                                                className={classes.boundingBox}
                                            >
                                            </rect>

                                            <circle 
                                                cx={minX - 10 + (canvasOffset/2)} 
                                                cy={minY - 15} 
                                                r="30" 
                                                // stroke="red" 
                                                // strokeWidth='4'
                                                // filter="url(#shadow)"
                                                fill='#f0ff00'
                                                visibility={this.state.expandedPanel === hazardCategory['category'] ? 'visible' : 'hidden'}
                                            />

                                            <text 
                                                x={minX - 10 + (canvasOffset/2)} 
                                                y={minY}
                                                textAnchor="middle" 
                                                fill="black"
                                                fontSize='44px'
                                                fontWeight='bold'
                                                visibility={this.state.expandedPanel === hazardCategory['category'] ? 'visible' : 'hidden'}
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
            </section>
        )
    }
}

export default compose(
    withRouter,
    withStyles(styles)
)(ImageAssessment)