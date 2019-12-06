import React, { Fragment } from 'react';
import {
    Container, CssBaseline, Grid, Typography, ListItemAvatar, 
    List, ListItem, ListItemText, Avatar, Link
} from '@material-ui/core';
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
                                    The HappyWalrus team (Errett Hobbs, Nach Mohan, Ramiro Cadavid, and Renzee Jan Reyes) is composed of graduating Master of Information and Data Science students (MIDS) from the UC Berkeley School of Information.
                                </Typography>
                                <br/>
                                <Typography variant="h5">
                                    HappyWalrus is our capstone project and evolved from our experience as parents. We’re thrilled to share it and hope it helps makes your home safer for your little pinniped!
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
                                        secondary={
                                            <Fragment>
                                            <Link href='mailto: errett@berkeley.edu'>errett@berkeley.edu</Link>
                                            <br/>
                                            <Link href='https://www.linkedin.com/in/errett-hobbs/'>LinkedIn</Link>
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
                                        primary='Nach Mohan'
                                        secondary={
                                            <Fragment>
                                            <Link href='mailto: nach.mohan@berkeley.edu'>nach.mohan@berkeley.edu</Link>
                                            <br/>
                                            <Link href='https://www.linkedin.com/in/nach-mohan-81035414/'>LinkedIn</Link>
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
                                        primary='Ramiro Cadavid'
                                        secondary={
                                            <Fragment>
                                            <Link href='mailto: rcadavid@berkeley.edu'>rcadavid@berkeley.edu</Link>
                                            <br/>
                                            <Link target="_blank" href='https://www.linkedin.com/in/ramirocadavid/'>LinkedIn</Link>
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
                                        primary='Renzee Reyes'
                                        secondary={
                                            <Fragment>
                                            <Link href='mailto: renzeer@berkeley.edu'>renzeer@berkeley.edu</Link>
                                            <br/>
                                            <Link href='https://www.linkedin.com/in/renzeer/'>LinkedIn</Link>
                                            </Fragment>
                                        }
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