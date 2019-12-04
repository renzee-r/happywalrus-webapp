import React, { Component } from 'react';
import {
    Grid, Link, Container, TextField, Typography, CssBaseline,
    Dialog, DialogTitle, DialogContent, DialogActions, Button
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

function Copyright() {
  return (
    <React.Fragment>
        {'© '}
        <Link color="inherit" href="/">
            HappyWalrus
        </Link>{' '}
        {new Date().getFullYear()}
    </React.Fragment>
  );
}

const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: '#fabe58',
    zIndex: 0,
    height: '11vh',
  },
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    display: 'flex',
  },
  copyright: {
      marginTop: theme.spacing(4)
  },
  list: {
    margin: 0,
    listStyle: 'none',
    paddingLeft: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.2),
    paddingBottom: theme.spacing(0.2),
  },
  language: {
    marginTop: theme.spacing(1),
    width: 150,
  },
  termsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
});

const LANGUAGES = [
  {
    code: 'en-US',
    name: 'English',
  },
];

class AppFooter extends Component {

    constructor(props) {
        super(props);
        this.handleDialogOpen = this.handleDialogOpen.bind(this);
        this.handleDialogClose = this.handleDialogClose.bind(this);

        this.state = {isOpen: false};
    }

    handleDialogOpen() {
        this.setState(state => ({
            isOpen: true
        }));
    }

    handleDialogClose() {
        this.setState(state => ({
            isOpen: false
        }));
    }
    
    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>

                <section className={classes.root}> 
                    <CssBaseline />
                    <Container className={classes.container}>
                    <Grid container spacing={4}>
                        <Grid sm={4} className={classes.copyright}>
                            <Copyright/>
                        </Grid>

                        <Grid sm={4}>
                            <Typography variant="h6" marked="left" gutterBottom>
                                Legal
                            </Typography>
                            <ul className={classes.list}>
                                <li className={classes.listItem}>
                                    <Link onClick={this.handleDialogOpen}>Terms</Link>
                                </li>
                            </ul>
                        </Grid>

                        <Grid sm={4}>
                            <Typography variant="h6" marked="left" gutterBottom>
                                Language
                            </Typography>
                            <TextField
                                select
                                SelectProps={{
                                native: true,
                                }}
                                className={classes.language}
                            >
                                {LANGUAGES.map(language => (
                                <option value={language.code} key={language.code}>
                                    {language.name}
                                </option>
                                ))}
                            </TextField>
                        </Grid>
                    </Grid>
                </Container>
                </section>

                <Dialog
                fullWidth={true}
                maxWidth={'md'}
                open={this.state.isOpen}
                onClose={this.handleClose}
                aria-labelledby="dialog-title"
                >
                <DialogTitle id="dialog-title">Terms of Use</DialogTitle>

                <DialogContent>
                    <Container maxwidth="sm" className={classes.termsContainer}>
                        <Typography variant='h6' gutterBottom> 
                            General Information Regarding These Terms of Use
                        </Typography>
                        <Typography variant='body1'>
                            Welcome, and thank you for your interest in HappyWalrus (“HappyWalrus” “we,” “our,” or “us”). Collectively, the Terms: The Master Terms, together with any Additional Terms, form a binding legal agreement between you and HappyWalrus in relation to your use of the Services. Collectively, this legal agreement is referred to below as the “Terms.”
                        </Typography>

                        <Typography variant='h6' gutterBottom>
                            Your Agreement to the Terms
                        </Typography>
                        <Typography variant="body1">
                            BY CLICKING “I ACCEPT” OR OTHERWISE ACCESSING OR USING ANY OF THE SERVICES (INCLUDING THE LICENSES, PUBLIC DOMAIN TOOLS, AND CHOOSERS), YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREED TO BE BOUND BY THE TERMS. By clicking “I ACCEPT” or otherwise accessing or using any Services you also represent that you have the legal authority to accept the Terms on behalf of yourself and any party you represent in connection with your use of any Services. If you do not agree to the Terms, you are not authorized to use any Services. If you are an individual who is entering into these Terms on behalf of an entity, you represent and warrant that you have the power to bind that entity, and you hereby agree on that entity’s behalf to be bound by these Terms, with the terms “you,” and “your” applying to you, that entity, and other users accessing the Services on behalf of that entity.
                        </Typography>

                        <Typography variant='h6' gutterBottom>
                            Limitation of Liability
                        </Typography>
                        <Typography variant='body1'>
                            Anything herein to the contrary notwithstanding, HappyWalrus shall in no event be liable for any damage resulting from any action taken, omitted or suffered by it in connection with any of the foregoing agencies, unless resulting from its gross negligence or willful misconduct.
                        </Typography>
                    </Container>

                </DialogContent>

                <DialogActions>
                    <Button onClick={this.handleDialogClose} color="secondary">
                        Close
                    </Button>
                </DialogActions>
                </Dialog>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(AppFooter)