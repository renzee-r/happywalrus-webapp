import React from 'react';
import {
    Container, CssBaseline, Grid, Typography, 
} from '@material-ui/core';
import EmojiEmotions from '@material-ui/icons/EmojiEmotions';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: '#fde3a7',
        // color: '#f2f1ef',
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
      image: {
        height: 55,
      },
      title: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
      },
}));

export default function ProductOurTeam() {
    const classes = useStyles();

    return (
        // Ease of use, no long checklists

        <React.Fragment>
            <CssBaseline />
            <section className={classes.root}>
                <Container className={classes.container}>
                    <Grid container spacing={5}>

                        <Grid item md={6}>
                            <div className={classes.item}>
                            <EmojiEmotions fontSize="large" className={classes.image}/>
                            <Typography variant="h6" className={classes.title}>
                                Team Description
                            </Typography>
                            <Typography variant="h5">
                                Team description goes here.
                            </Typography>
                            </div>
                        </Grid>

                        <Grid item md={6}>
                            <div className={classes.item}>
                            <EmojiEmotions fontSize="large" className={classes.image}/>
                            <Typography variant="h6" className={classes.title}>
                                Member Description
                            </Typography>
                            <Typography variant="h5">
                                Member description goes here.
                            </Typography>
                            </div>
                        </Grid>
                        
                    </Grid>
                </Container>
            </section>
        </React.Fragment>
    )

}