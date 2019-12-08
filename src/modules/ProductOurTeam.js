import React, { Fragment, Component } from 'react';
import {
    Container, CssBaseline, Grid, Typography, ListItemAvatar, 
    List, ListItem, ListItemText, Avatar, Link
} from '@material-ui/core';
import { withStyles, createMuiTheme, responsiveFontSizes, ThemeProvider  } from '@material-ui/core/styles';
import { Linear } from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'animation.gsap'
import 'debug.addIndicators'

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
const { breakpoints } = theme;

const styles = theme => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: '#f0f0d6',
        height: 700,
        [theme.breakpoints.down('sm')]: {
            height: 1600
        },
      },
      container: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(10),
        display: 'flex',
        position: 'relative',
      },
      item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(0, 5),
      },
      teamTitle: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(10),
      },
      membersTitle: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(2),
      },
      parallaxChild: {
        height: '100vh',
        [theme.breakpoints.down('sm')]: {
            height: '180vh'
        },
        width: '100%',
        top: 'calc(-55vh)',
        position: 'relative',
        backgroundImage: `url('berkeley-bg-2.jpg')`,
        backgroundSize: 'cover',
    },
});

class ProductOurTeam extends Component {

    constructor(props) {
        super(props);
        this.controller = new ScrollMagic.Controller();
    }

    componentDidMount() {
        new ScrollMagic.Scene({
            triggerElement: '#teamScrollStarts',
            triggerHook: 'onEnter',
            duration: '150%'
        })
        .setTween('#teamScrollAnchor', {y: '100vh', ease: Linear.easeNone})
        // .addIndicators() // add indicators (requires plugin)
        .addTo(this.controller); // assign the scene to the controller
    }

    render() {
        const { classes } = this.props

        return (
            <React.Fragment>
                <CssBaseline />

                <section id="teamScrollStarts" className={classes.root}>
                    <div id="teamScrollAnchor" className={classes.parallaxChild}>
                    <Container className={classes.container}>
                        <Grid container spacing={5}>

                            <Grid item md={6}>
                                <div className={classes.item}>
                                    <Typography variant="h4" className={classes.teamTitle}>
                                        Our Team
                                    </Typography>
                                    <Typography variant="h6">
                                        The HappyWalrus team (Errett Hobbs, Nach Mohan, Ramiro Cadavid, and Renzee Jan Reyes) is composed of graduating Master of Information and Data Science students (MIDS) from the UC Berkeley School of Information.
                                    </Typography>
                                    <br/>
                                    <Typography variant="h6">
                                        HappyWalrus is our capstone project and evolved from our experience as parents. We’re thrilled to share it and hope it helps makes your home safer for your little pinniped!
                                    </Typography>
                                </div>
                            </Grid>

                            <Grid item md={6}>
                                <div className={classes.item}>
                                <Typography variant="h4" className={classes.membersTitle}>
                                    Team Members
                                </Typography>
                                <List>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                EH
                                            </Avatar>
                                        </ListItemAvatar>

                                        <ListItemText
                                            primary={<Typography variant='h6'>Errett Hobbs</Typography>}
                                            secondary={
                                                <Fragment>
                                                <Link variant="h6" href='mailto: errett@berkeley.edu'>errett@berkeley.edu</Link>
                                                <br/>
                                                <Link variant="h6" href='https://www.linkedin.com/in/errett-hobbs/'>LinkedIn</Link>
                                                </Fragment>
                                            }
                                        />
                                    </ListItem>  

                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                NM
                                            </Avatar>
                                        </ListItemAvatar>

                                        <ListItemText
                                            primary={<Typography variant='h6'>Nach Mohan</Typography>}
                                            secondary={
                                                <Fragment>
                                                <Link variant="h6" href='mailto: nach.mohan@berkeley.edu'>nach.mohan@berkeley.edu</Link>
                                                <br/>
                                                <Link variant="h6" href='https://www.linkedin.com/in/nach-mohan-81035414/'>LinkedIn</Link>
                                                </Fragment>
                                            }
                                        />
                                    </ListItem>

                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                RC
                                            </Avatar>
                                        </ListItemAvatar>

                                        <ListItemText
                                            primary={<Typography variant='h6'>Ramiro Cadavid</Typography>}
                                            secondary={
                                                <Fragment>
                                                <Link variant="h6" href='mailto: rcadavid@berkeley.edu'>rcadavid@berkeley.edu</Link>
                                                <br/>
                                                <Link variant="h6" target="_blank" href='https://www.linkedin.com/in/ramirocadavid/'>LinkedIn</Link>
                                                </Fragment>
                                            }
                                        />
                                    </ListItem>

                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                RR
                                            </Avatar>
                                        </ListItemAvatar>

                                        <ListItemText
                                            primary={<Typography variant='h6'>Renzee Reyes</Typography>}
                                            secondary={
                                                <Fragment>
                                                <Link variant="h6" href='mailto: renzeer@berkeley.edu'>renzeer@berkeley.edu</Link>
                                                <br/>
                                                <Link variant="h6" href='https://www.linkedin.com/in/renzeer/'>LinkedIn</Link>
                                                </Fragment>
                                            }
                                        />
                                    </ListItem>
                                </List>
                                </div>
                            </Grid>
                            
                        </Grid>
                    </Container>
                    </div>
                </section>
            </React.Fragment>
        )
    }

}

export default withStyles(styles)(ProductOurTeam)