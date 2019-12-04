import React from 'react';
import {
    Container, CssBaseline, Grid, Typography, ListItemAvatar, 
    List, ListItem, ListItemText, Avatar
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
                            <Typography variant="h4" className={classes.title}>
                                Our Team
                            </Typography>
                            <Typography variant="h5">
                                We are a team of students at the University of California, Berkeley in the Master of Information and Data Science program.
                            </Typography>
                            </div>
                        </Grid>

                        <Grid item md={6}>
                            <div className={classes.item}>
                            <Typography variant="h4" className={classes.title}>
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
                                        primary='Errett Hobbs'
                                        secondary='errett@berkeley.edu'
                                    />
                                </ListItem>

                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            NM
                                        </Avatar>
                                    </ListItemAvatar>

                                    <ListItemText
                                        primary='Nach Mohan'
                                        secondary='nach.mohan@berkeley.edu'
                                    />
                                </ListItem>

                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            RC
                                        </Avatar>
                                    </ListItemAvatar>

                                    <ListItemText
                                        primary='Ramiro Cadavid'
                                        secondary='rcadavid@berkeley.edu'
                                    />
                                </ListItem>

                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            RR
                                        </Avatar>
                                    </ListItemAvatar>

                                    <ListItemText
                                        primary='Renzee Reyes'
                                        secondary='renzeer@berkeley.edu'
                                    />
                                </ListItem>
                            </List>
                            </div>
                        </Grid>
                        
                    </Grid>
                </Container>
            </section>
        </React.Fragment>
    )

}