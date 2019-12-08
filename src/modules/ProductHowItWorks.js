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
        height: 650,
        [theme.breakpoints.down('md')]: {
            height: 900
        }
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
        margin: theme.spacing(2)
    },
    title: {
        marginBottom: theme.spacing(4),
    },
    demoImage: {
        height: '45vh',
        [breakpoints.down("sm")]: {
            height: "30vh",
        }
    },
}));

export default function ProductHowItWorks() {
    const classes = useStyles();

    return (
        <section className={classes.root}>
            <CssBaseline />

            <div>
                <Grid container spacing={0} className={classes.container}>
                    <Grid item md={12} lg={7}>
                        <div className={classes.item}>
                            <img
                                src="how-it-works.png"
                                alt="kitchen-demo"
                                className={classes.demoImage}
                            />
                        </div>
                    </Grid>

                    <Grid item lg={4}>
                        <div className={classes.item}>
                            <ThemeProvider theme={theme}>
                                <Typography variant="h4" marked="center" className={classes.title} component="h2">
                                    How it works
                                </Typography>
                                <Typography variant="h6" align="left">
                                    Happy Walrus employs a form artificial intelligence called object recognition to identify kitchen hazards in user photos. We trained the underlying object recognition model by feeding a computer thousands of images within which we had marked tens of thousands of objects (e.g., countertops, ovens, stovetops). 
                                </Typography>
                                <br/>
                                <Typography variant='h6' align='left'>
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