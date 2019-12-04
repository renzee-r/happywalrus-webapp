import React from 'react';
import {
    CssBaseline, Grid, Typography, 
} from '@material-ui/core';
import EmojiEmotions from '@material-ui/icons/EmojiEmotions';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: '#fde3a7',
        // color: '#f2f1ef',
        height: '50vh',
      },
      container: {
        marginTop: theme.spacing(15),
        marginBottom: theme.spacing(30),
        display: 'flex',
        position: 'relative',
      },
      item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(0, 15),
        paddingTop: 75,
      },
      image: {
        height: 55,
      },
      title: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
      },
}));

export default function ProductValues() {
    const classes = useStyles();

    return (
        // Ease of use, no long checklists

        <React.Fragment>
            <CssBaseline />
            <section className={classes.root}>
                {/* <Container className={classes.container}> */}
                    <Grid container>

                        <Grid item xs={12} md={4} className={classes.gridItem}>
                            <div className={classes.item}>
                            <EmojiEmotions fontSize="large" className={classes.image}/>
                            <Typography variant="h4" className={classes.title}>
                                Your Baby is Precious
                            </Typography>
                            <Typography variant="body1">
                                Protecting your little one is all about being prepared. Our goal is to provide you the tools and knowledge to handle any challenge.
                            </Typography>
                            </div>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <div className={classes.item}>
                            <EmojiEmotions fontSize="large" className={classes.image}/>
                            <Typography variant="h4" className={classes.title}>
                                Experience the Joy of Parenthood
                            </Typography>
                            <Typography variant="body1">
                                We make safety our number one concern so that you can focus on and enjoy what's really important: being the best parent you can be.
                            </Typography>
                            </div>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <div className={classes.item}>
                            <EmojiEmotions fontSize="large" className={classes.image}/>
                            <Typography variant="h4" className={classes.title}>
                                Babyproofing Made Simple, For Everyone
                            </Typography>
                            <Typography variant="body1">
                                From first-timers to veterans, HappyWalrus is built for all parents. We believe that building a safe home can be done by anyone.
                            </Typography>
                            </div>
                        </Grid>
                        
                    </Grid>
                {/* </Container> */}
            </section>
        </React.Fragment>
    )

}