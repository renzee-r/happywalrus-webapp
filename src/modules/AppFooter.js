import React from 'react';
import {
    Grid, Link, Container, TextField, Typography, 
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    backgroundColor: '#fabe58',
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
}));

const LANGUAGES = [
  {
    code: 'en-US',
    name: 'English',
  },
  {
    code: 'fr-FR',
    name: 'Français',
  },
];

export default function AppFooter() {
  const classes = useStyles();

  return (
    <Typography component="footer" className={classes.root}>
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
                    <Link href="/premium-themes/onepirate/terms/">Terms</Link>
                    </li>
                    <li className={classes.listItem}>
                    <Link href="/premium-themes/onepirate/privacy/">Privacy</Link>
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
    </Typography>
  );
}