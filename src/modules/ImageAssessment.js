import React, { Component } from 'react';
import clsx from 'clsx';
import {
    Button, Container, CssBaseline, Grid, Typography, 
    Snackbar, SnackbarContent, IconButton, Link, FormControlLabel,
    Switch
} from '@material-ui/core';
import { 
    Link as RouterLink 
} from "react-router-dom";
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon  from '@material-ui/icons/Close';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        color: theme.palette.common.white,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.up('md')]: {
            height: '90vh',
            minHeight: 500,
            maxHeight: 1300,
        },
    },
    container: {
        // marginTop: theme.spacing(3),
        // marginBottom: theme.spacing(14),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(0, 5),
    },
    demoImage: {
        height: '70vh'
    },
    snackbar: {
        backgroundColor: theme.palette.primary.main,
    },
    snackbarLink: {
        color: '#fde3a7',
        marginLeft: theme.spacing(1),
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
        margin: 'auto',
      },
    },
    expanded: {},
})(MuiExpansionPanel);
  
const ExpansionPanelSummary = withStyles({
    root: {
      backgroundColor: 'pink',
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

        this.state = {
            isOpen: true,
            isChecked: false,
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
    };
    


    render() {
        const { classes } = this.props

        return (
            // Allow user to filter/sort risk items 

            <section className={classes.root}>
                <Container maxWidth="false">
                    <Grid container spacing={2}>
                        <Grid item sm={7}>
                            <div className={classes.item}>
                                <img
                                    src="ADE_train_00000598.jpg"
                                    alt="image-demo"
                                    className={classes.demoImage}
                                />
                            </div>
                        </Grid>

                        <Grid item sm={5}>
                            <div>
                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className={classes.heading}>Electrical Outlets/Plugs</Typography>
                                </ExpansionPanelSummary>

                                <ExpansionPanelDetails>
                                    <Grid container spacing={1}>
                                        <Grid item xs={4}>
                                            <Typography>
                                                Risk Category:
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={8}>
                                            <Typography>
                                                Electrical Hazard
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={4}>
                                            <Typography>
                                                Risk Description:
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={8}>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                                sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <FormControlLabel
                                                control={
                                                <Switch
                                                    checked={this.state.isChecked}
                                                    onChange={this.handleCheckChange}
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

                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                                >
                                    <Typography className={classes.heading}>Oven/Stovetop</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                        sit amet blandit leo lobortis eget.
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>

                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                                >
                                    <Typography className={classes.heading}>Falling Hazards</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                        sit amet blandit leo lobortis eget.
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>

                            </div>
                        </Grid>
                    </Grid>
                </Container>
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
                            <span id="message-id">
                                Have a Moment?
                                <Link href='https://www.surveymonkey.com/r/ZVST7JP' target="_blank" underline='always' className={classes.snackbarLink}>
                                    Please take this quick survey!
                                </Link>
                            </span>
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

export default withStyles(styles)(ImageAssessment)