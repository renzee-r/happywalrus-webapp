import React, { Component } from 'react';
import {
    Button, Container, CssBaseline, Grid, Typography,
    Fade
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
        height: '85vh',
        minHeight: 500,
        overflowX: 'hidden',
        overflowY: 'hidden',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    heroContent: {
        paddingTop: '25vh',
        width: '35vw',
    },

    parallaxParent: {
        height: '65vh',
        width: '100%',
    },
    parallaxChild: {
        height: '150%',
        position: 'relative',
        top: '-50%',
        backgroundImage: `url('hero-bg-1.png')`,
        backgroundSize: 'cover',
    },
});

const RefLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);

class ProductHero extends Component {
    
    constructor(props) {
        super(props);
        this.controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "150%"}});
    }


    componentDidMount() {
        new ScrollMagic.Scene({
            triggerElement: '#scrollStarts',
        })
        .setTween('#myElement', {y: '100%', ease: Linear.easeNone})
        .addIndicators() // add indicators (requires plugin)
        .addTo(this.controller); // assign the scene to the controller
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
                            <Container maxWidth="sm" className={classes.container}>
                                <Fade timeout={1000} in={true}>
                                    <div className={classes.heroContent}>
                                        <Typography align="center" variant="h2" color="textPrimary" gutterBottom> 
                                            A Little Perspective Changes Everything
                                        </Typography>
                                        <Typography variant="subtitle1" align="center" color="textPrimary" paragraph>
                                            Making your home a safe space for your new baby can be challenging. You have enough on your plate! Let HappyWalrus help make babyproofing fast and easy.
                                        </Typography>
                                        <div className={classes.heroButtons}>
                                            <Grid container justify="center">
                                                <Grid item>
                                                    <Button variant="contained" color="primary" component={RefLink} to="/upload">
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
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(ProductHero)