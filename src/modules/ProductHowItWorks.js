import React from 'react';
import {
    Container, Grid, Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        backgroundColor: '#f0f0d6',
        overflow: 'hidden',
        height: '65vh',
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
        height: '45vh'
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

                <div >
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
                                {/* <ChildFriendly fontSize="large" className={classes.image} /> */}
                                <Typography variant="h4" marked="center" className={classes.title} component="h2">
                                    How it works
                                </Typography>
                                <Typography variant="h5" align="center">
                                    HappyWalrus uses state of the art techniques in computer vision, a subfield of machine learning and aritifical intelligence. Over thousands of images and tens of thousands of objects, we have trained a model that can understand digital images in similar ways as human vision. This trained model can now look at new images and identify the objects it was trained to identify.
                                </Typography>
                            </div>
                        </Grid>

                    </Grid>
                </div>
        </section>
    );
}