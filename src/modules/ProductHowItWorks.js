import React from 'react';
import {
    Grid, Typography, CssBaseline
} from '@material-ui/core';
import { makeStyles, createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
const {breakpoints} = theme

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        backgroundColor: '#f0f0d6',
        overflow: 'hidden',
        height: '60vh',
        minHeight: 750,
    },
    container: {
        position: 'relative',
        alignItems: 'center',
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(15),
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        marginBottom: theme.spacing(4),
    },
    demoImage: {
        height: '45vh',
        [breakpoints.down("xs")]: {
            height: "20vh"
        }
    },
    image: {
        height: 55,
        marginTop: theme.spacing(12),
        marginBottom: theme.spacing(4),
    },
    curvyLines: {
        pointerEvents: 'none',
        position: 'absolute',
        top: -180,
        opacity: 0.7,
    },
}));

export default function ProductHowItWorks() {
    const classes = useStyles();

    return (
        <section className={classes.root}>
            <CssBaseline />

            <div>
                <Grid container spacing={0} className={classes.container}>
                    <Grid item xs={12} md={7}>
                        <div className={classes.item}>
                            <img
                                src="how-it-works.png"
                                alt="kitchen-demo"
                                className={classes.demoImage}
                            />
                        </div>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <div className={classes.item}>
                            <ThemeProvider theme={theme}>
                                <Typography variant="h4" marked="center" className={classes.title} component="h2">
                                    How it works
                                </Typography>
                                <Typography variant="h5" align="center">
                                    Happy Walrus employs a form artificial intelligence called object recognition to identify kitchen hazards in user photos. We trained the underlying object recognition model by feeding a computer thousands of images within which we had marked tens of thousands of objects (e.g., countertops, ovens, stovetops). 
                                </Typography>
                                <br/>
                                <Typography variant='h5' align='center'>
                                    Once trained, we can pass any kitchen image to the model, and it will quickly highlight objects that we have taught it to “see”.
                                </Typography>
                            </ThemeProvider>
                        </div>
                    </Grid>

                </Grid>
            </div>
        </section>
    );
}