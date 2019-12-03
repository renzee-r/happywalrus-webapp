import React from 'react';
import {
    Container, Grid, Typography
} from '@material-ui/core';
import {
    ChildFriendly
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        backgroundColor: '#f0f0d6',
        overflow: 'hidden',
    },
    container: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(15),
        position: 'relative',
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
    title: {
        marginBottom: theme.spacing(14),
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
            <Container className={classes.container}>

                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={8}>
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
                                <ChildFriendly fontSize="large" className={classes.image} />
                                <Typography variant="h4" marked="center" className={classes.title} component="h2">
                                    How it works
                                </Typography>
                                <Typography variant="h5" align="center">
                                    Description of computer vision, tech stack, and data science techniques.
                                </Typography>
                                            </div>
                        </Grid>

                    </Grid>
                </div>
            </Container>
        </section>
    );
}