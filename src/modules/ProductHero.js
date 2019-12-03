import React, { Component } from 'react';
import {
    Button, Container, CssBaseline, Grid, Typography,
    Fade, Dialog, DialogTitle, DialogContent, DialogActions
} from '@material-ui/core';
import { 
    Link as RouterLink 
} from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import { Linear } from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'animation.gsap'
import 'debug.addIndicators'

const styles = theme => ({
    root: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        height: '99vh',
        minHeight: 800,
        overflowX: 'hidden',
        overflowY: 'hidden',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    heroContent: {
        paddingTop: '22.5vh',
        width: '50vw',
    },

    parallaxParent: {
        height: '65vh',
        width: '100%',
    },
    parallaxChild: {
        height: '110vh',
        position: 'relative',
        top: '-35vh',
        backgroundImage: `url('hero-bg-1.png')`,
        backgroundSize: 'cover',
    },
});

const RefLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);

class ProductHero extends Component {
    
    constructor(props) {
        super(props);
        this.controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "150%"}});

        this.handleDialogOpen = this.handleDialogOpen.bind(this);
        this.handleDialogClose = this.handleDialogClose.bind(this);

        this.state = {isOpen: false};
    }


    componentDidMount() {
        new ScrollMagic.Scene({
            triggerElement: '#scrollStarts',
        })
        .setTween('#myElement', {y: '100%', ease: Linear.easeNone})
        // .addIndicators() // add indicators (requires plugin)
        .addTo(this.controller); // assign the scene to the controller
    }

    
    handleDialogOpen() {
        this.setState(state => ({
            isOpen: true
        }));
    }

    handleDialogClose() {
        this.setState(state => ({
            isOpen: false
        }));
    }

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>

                <CssBaseline />
                
                <section className={classes.root}>
                    <div id="scrollStarts"></div>

                    <div id="myElement" className={classes.parallaxParent}>
                        <div className={classes.parallaxChild}>
                            <Container maxWidth="lg" className={classes.container}>
                                <Fade timeout={1000} in={true}>
                                    <div className={classes.heroContent}>
                                        <Typography align="center" variant="h2" color="textPrimary" gutterBottom> 
                                            Babyproofing Made Simple, For Everyone
                                        </Typography>
                                        <Typography variant="h5" align="center" color="textPrimary" paragraph>
                                            HappyWalrus highlights common kitchen hazards from images you upload. We provide parents timely and relevant insights that may need to be remediated to prevent childhood injuries. The aim is to to reduce the rate of injury in children ages 0-4. Currently there are ~1.4 million emergency department visits per year in the US. Let HappyWalrus make babyproofing fast and easy!
                                        </Typography>
                                        <div className={classes.heroButtons}>
                                            <Grid container justify="center">
                                                <Grid item>
                                                    <Button variant="contained" color="primary" component={RefLink} onClick={this.handleDialogOpen} to=''>
                                                        Get Started
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </div>
                                </Fade>
                            </Container>
                        </div>
                    </div>
                </section>

                <Dialog
                    fullWidth={true}
                    maxWidth={'md'}
                    open={this.state.isOpen}
                    onClose={this.handleClose}
                    aria-labelledby="dialog-title"
                >
                    <DialogTitle id="dialog-title">Terms of Use</DialogTitle>

                    <DialogContent>
                        <Container maxwidth="sm" className={classes.container}>
                            <Typography variant='h6' gutterBottom> 
                                General Information Regarding These Terms of Use
                            </Typography>
                            <Typography variant='body1'>
                                Welcome, and thank you for your interest in HappyWalrus (“HappyWalrus” “we,” “our,” or “us”). Collectively, the Terms: The Master Terms, together with any Additional Terms, form a binding legal agreement between you and HappyWalrus in relation to your use of the Services. Collectively, this legal agreement is referred to below as the “Terms.”
                            </Typography>

                            <Typography variant='h6' gutterBottom>
                                Your Agreement to the Terms
                            </Typography>
                            <Typography variant="body1">
                                BY CLICKING “I ACCEPT” OR OTHERWISE ACCESSING OR USING ANY OF THE SERVICES (INCLUDING THE LICENSES, PUBLIC DOMAIN TOOLS, AND CHOOSERS), YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREED TO BE BOUND BY THE TERMS. By clicking “I ACCEPT” or otherwise accessing or using any Services you also represent that you have the legal authority to accept the Terms on behalf of yourself and any party you represent in connection with your use of any Services. If you do not agree to the Terms, you are not authorized to use any Services. If you are an individual who is entering into these Terms on behalf of an entity, you represent and warrant that you have the power to bind that entity, and you hereby agree on that entity’s behalf to be bound by these Terms, with the terms “you,” and “your” applying to you, that entity, and other users accessing the Services on behalf of that entity.
                            </Typography>

                            <Typography variant='h6' gutterBottom>
                                Limitation of Liability
                            </Typography>
                            <Typography variant='body1'>
                                Anything herein to the contrary notwithstanding, HappyWalrus shall in no event be liable for any damage resulting from any action taken, omitted or suffered by it in connection with any of the foregoing agencies, unless resulting from its gross negligence or willful misconduct.
                            </Typography>
                        </Container>

                    </DialogContent>

                    <DialogActions>
                        <Button onClick={this.handleDialogClose} color="secondary">
                            Cancel
                        </Button>

                        <Button variant='contained' component={RefLink} to="/upload" color="primary">
                            I Accept
                        </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(ProductHero)