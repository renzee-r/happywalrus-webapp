import React, { Component, Fragment } from 'react';
import {
    Grid, Typography, 
    Snackbar, SnackbarContent, IconButton, Link, FormControlLabel,
    Switch, Drawer
} from '@material-ui/core';
import { 
    Link as RouterLink, withRouter
} from "react-router-dom";
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CloseIcon  from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import { compose } from 'recompose';


const styles = theme => ({
    root: {
        color: theme.palette.common.white,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        height: '89.2vh',
        minHeight: 500,
        maxHeight: 1300,
    },
    container: {
        marginTop: theme.spacing(8),
        // marginBottom: theme.spacing(14),
        height: '83vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    item: {
        display: 'flex',
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(0, 0),
    },
    demoCanvas: {
        height: '90%',
    },
    demoImage: {
        display: 'none',
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
        marginTop: 65,
        width: 480,
        height: "82.5vh",
    },
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

        this.state = {
            isOpen: true,
            isChecked: false,
            isLoading: true,
            modelData: null,
        }

        this.hazardRefs = [];
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
                    const canvWidth = 1600;
                    const canvHeight = 900;

                    ctx.drawImage(img, 0, 0, canvWidth, canvHeight);
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

        const canvas = this.refs.canvas
        const ctx = canvas.getContext('2d');
        var reader = new FileReader();
        reader.onload = (event) => {
            var img = new Image();
            img.onload = () => {
                const canvWidth = 1600;
                const canvHeight = 900;

                ctx.drawImage(img, 0, 0, canvWidth, canvHeight);

                if (expanded) {
                    this.props.location.state.modelData.forEach(function(hazardCategory) {
                        if (hazardCategory['category'] === hazardPanel) {
                            hazardCategory['objects'].forEach(function(object) {
                                var box = object['box'];

                                var minX = box[1] * canvWidth;
                                var minY = box[2] * canvHeight;
                                var width = (box[3]* canvWidth) - minX;
                                var height = (box[0] * canvHeight) - minY;
                                ctx.beginPath();
                                ctx.strokeStyle = "#96281b";
                                ctx.shadowColor = "black";
                                ctx.shadowOffsetX = 1;
                                ctx.shadowOffsetY = 1;     
                                ctx.shadowBlur = 5;
                                ctx.lineWidth = 6;
                                ctx.rect(minX, minY, width, height);
                                ctx.stroke();
                            })
                        }
                    })
                }
            }
            img.src = event.target.result;
        }
        reader.readAsDataURL(this.props.location.state.fileInput); 

        
    }


    render() {
        const { classes } = this.props
        const { modelData, isLoading , isOpen, isChecked } = this.state

        return (
        
            <section className={classes.root}>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                    paper: classes.drawerPaper,
                    }}
                    anchor="left"
                >
                    <div className={classes.toolbar} />

                    { this.state.isLoading ?
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
                            {this.props.location.state.modelData.map((hazardCategory) => {
                                this.hazardRefs[hazardCategory['category']] = React.createRef();

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
                                                <Grid item xs={4}>
                                                    <Typography>
                                                        Risk Object(s):
                                                    </Typography>
                                                </Grid>

                                                <Grid item xs={8}>
                                                    <Typography>
                                                        {hazardCategory['objects'].map((hazardObject) => {
                                                            return <li>{hazardObject['name']}</li>
                                                        })}
                                                    </Typography>
                                                </Grid>

                                                <Grid item xs={4}>
                                                    <Typography>
                                                        Risk Description:
                                                    </Typography>
                                                </Grid>

                                                <Grid item xs={8}>
                                                    <Typography>
                                                        {hazardCategory['description']}
                                                    </Typography>
                                                </Grid>

                                                <Grid item xs={4}>
                                                    <Typography>
                                                        Recommended Solutions:
                                                    </Typography>
                                                </Grid>

                                                <Grid item xs={8}>
                                                    <Typography>
                                                        {hazardCategory['solution']}
                                                    </Typography>
                                                </Grid>


                                                <Grid item xs={12}>
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
                                                </Grid>
                                            </Grid>
                                        
                                        </ExpansionPanelDetails>

                                    </ExpansionPanel>
                                </Fragment>;
                            })}
                        </Fragment>
                    }
                    
                </Drawer>

                <Grid container direction="column" justify='center' alignItems='center' className={classes.container}>
                    <canvas ref='canvas' height={900} width={1600} className={classes.demoCanvas}/>
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