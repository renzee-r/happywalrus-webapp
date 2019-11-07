import React, { Component, Fragment } from 'react';
import {
    Grid, Typography, 
    Snackbar, SnackbarContent, IconButton, Link, FormControlLabel,
    Switch, Drawer
} from '@material-ui/core';
import { 
    Link as RouterLink 
} from "react-router-dom";
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CloseIcon  from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
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
    //     backgroundImage: 'url(orange_kitchen.EH.057-orig.jpg)',
    //     backgroundRepeat: 'no-repeat',
    //     backgroundSize: '1600px 800px',
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
        this.handleExpansionOnClick = this.handleExpansionOnClick.bind(this);

        this.state = {
            isOpen: true,
            isChecked: false,
            isLoading: true,
            modelData: null,
        }
    }

    componentDidMount() {
        const canvas = this.refs.canvas
        const ctx = canvas.getContext('2d');

        this.setState({ isLoading: true });

        fetch("/hazards")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    modelData: data,
                    isLoading: false,
                });
                console.log(this.state.modelData);

                var img = new Image();
                img.src = 'orange_kitchen.EH.057-orig.jpg';
                img.onload = () => {
                    ctx.drawImage(img, 0, 0, 1600, 900);

                    const canvWidth = 1600;
                    const canvHeight = 900;
                    const originalImgWidth = 800;
                    const originalImgHeight = 600;

                    this.state.modelData.forEach(function(pred) {
                        pred['boxes'].forEach(function(box) {
                            var minX = box[0] * canvWidth / originalImgWidth;
                            var minY = box[1] * canvHeight / originalImgHeight;
                            var width = (box[2] * canvWidth / originalImgWidth) - minX;
                            var height = (box[3] * canvHeight / originalImgHeight) - minY;
                            ctx.beginPath();
                            ctx.strokeStyle = "#96281b";
                            ctx.shadowColor = "white";
                            ctx.lineWidth = 10;
                            ctx.rect(minX, minY, width, height);
                            ctx.stroke();
                        })
                    })
                } 
            }
        );
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
    
    handleExpansionOnClick = () => {
        console.log('test');
    }


    render() {
        const { classes } = this.props
        const { modelData, isLoading , isOpen, isChecked } = this.state
        // console.log(this.state.modelData.file_name)

        let riskPanel;

        if (isLoading) {
            riskPanel = 
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
                </Fragment>;
        } else {
            riskPanel = 
                <Fragment>
                    {this.state.modelData.map(function(pred) {
                        return <Fragment>
                            <Divider />
                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    // onclick={this.handleExpansionOnClick}
                                >
                                    <Typography variant="h6" className={classes.heading}>{pred['category']}</Typography>
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
                                                {pred['name']}
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={4}>
                                            <Typography>
                                                Risk Description:
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={8}>
                                            <Typography>
                                                {pred['description']}
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={4}>
                                            <Typography>
                                                Recommended Solutions:
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={8}>
                                            <Typography>
                                                {pred['solution']}
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
                </Fragment>;
        }

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

                    {riskPanel}
                    
                </Drawer>

                {/* <main> */}
                    <Grid container direction="column" justify='center' alignItems='center' className={classes.container}>
                        {/* <div className={classes.item} > */}
                            <canvas ref='canvas' height={900} width={1600} className={classes.demoCanvas}/>
                        {/* </div> */}
                    </Grid>
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        open={this.state.isOpen}
                        // onClose={this.handleClose}
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
                {/* </main> */}
            </section>
        )
    }
}

export default withStyles(styles)(ImageAssessment)