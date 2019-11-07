import React, { Component } from 'react';
import {
    Button, Container, CssBaseline, Grid, Typography, 
    Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions
} from '@material-ui/core';
import { 
    BrowserRouter as Router, Switch, Route, Link as RouterLink 
} from "react-router-dom";
import Publish from '@material-ui/icons/Publish';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    root: {
        // backgroundColor: '#fde3a7',
        position: 'relative',
        display: 'flex',
        // alignItems: 'center',
        height: '90vh',
        minHeight: 500,
        maxHeight: 1300,
    },
    container: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(14),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    step1: {
        paddingTop: 75
    },
    step2: {
        paddingTop: 75
    },
    gridItemButton: {
        paddingTop: '10vh',
    },
    button: {
        fontSize: 20,
    },
    icon: {
        marginRight: theme.spacing(2)
    },
    image: {
        height: 150,
    }
});

const RefLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);

class Upload extends Component {

    constructor(props) {
        super(props);

        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleImageClick = this.handleImageClick.bind(this);

        this.state = {isOpen: false};
        this.imageRef = React.createRef();
    }

    handleClickOpen() {
        this.setState(state => ({
            isOpen: true
        }));
    }

    handleClose() {
        this.setState(state => ({
            isOpen: false
        }));
    }

    handleImageClick(e, data) {
        console.log(this.imageRef);
        this.imageRef.current.style.border = 'none';
        e.target.style.border = 'solid';
    }

    render() {
        const { classes } = this.props;

        return (
            // Guidelines for ideal image quality/characteristics
            // Dialog options for user provided features

            <React.Fragment>
                <CssBaseline />

                <section className={classes.root}>
                    <Container className={classes.container}>
                        <Grid container justify="center">

                            <Grid container justify="center" className={classes.step1}>
                                <Grid item md={2}>
                                    <Typography align="left" variant="h4" color="textPrimary" gutterBottom> 
                                        Step 1: 
                                    </Typography>
                                </Grid>

                                <Grid item md={10}>
                                    <Typography align="left" variant="h4" color="textPrimary" gutterBottom> 
                                        Take a picture of the room/space you would like to babyproof
                                    </Typography>
                                </Grid>

                                <Grid item md={2}></Grid>
                                <Grid item md={10}>
                                    <Typography align="left" variant="h6" color="textSecondary" gutterBottom> 
                                        *HappyWalrus works best with images that are high quality and well lit
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid container justify="center" className={classes.step2}>
                                <Grid item md={2}>
                                    <Typography align="left" variant="h4" color="textPrimary" gutterBottom> 
                                        Step 2: 
                                    </Typography>
                                </Grid>

                                <Grid item md={10}>
                                    <Typography align="left" variant="h4" color="textPrimary" gutterBottom> 
                                        Upload the image using the button below
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid item md={12} align="center" className={classes.gridItemButton}>
                                <Button variant="contained" color="primary" size="large" onClick={this.handleClickOpen} className={classes.button}>
                                    <Publish fontSize="large" className={classes.icon}/>
                                    Upload
                                </Button>
                            </Grid>
                        </Grid>
                    </Container>
                </section>

                <Dialog
                    fullWidth={true}
                    maxWidth={'md'}
                    open={this.state.isOpen}
                    onClose={this.handleClose}
                    aria-labelledby="dialog-title"
                >
                    <DialogTitle id="dialog-title">Select an Image to Upload...</DialogTitle>

                    <DialogContent>
                        <Container maxwidth="sm" className={classes.container}>
                            <Grid container justify="center">
                                <Grid sm={4}>
                                    <img
                                        src="ADE_train_00000598.jpg"
                                        alt="upload-img"
                                        className={classes.image}
                                        ref={this.imageRef}
                                        onClick={this.handleImageClick}
                                    />
                                </Grid>

                                <Grid sm={4}>
                                    <img
                                        src="orange_kitchen.EH.057.jpg"
                                        alt="upload-img"
                                        className={classes.image}
                                        ref={this.imageRef}
                                        onClick={this.handleImageClick}
                                    />
                                </Grid>

                                <Grid sm={4}>
                                    <img
                                        src="image-placeholder.jpg"
                                        alt="upload-img"
                                        className={classes.image}
                                        ref={this.imageRef}
                                        onClick={this.handleImageClick}
                                    />
                                </Grid>
                            </Grid>
                        </Container>

                    </DialogContent>

                    <DialogActions>
                        <Button onClick={this.handleClose} color="secondary">
                            Cancel
                        </Button>

                        <Button component={RefLink} to="/analyzing" color="primary">
                            Confirm
                        </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        )
    }
   
}

export default withStyles(styles)(Upload)