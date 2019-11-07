import React from 'react';
import PropTypes from 'prop-types';
import {
    AppBar, Button, CssBaseline, Link, Toolbar, Typography, IconButton,
    useScrollTrigger
} from '@material-ui/core';
import { 
    BrowserRouter as Router, Switch, Route, Link as RouterLink 
} from "react-router-dom";
import ChildCareIcon from '@material-ui/icons/ChildCare';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
        },
        li: {
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: '#fabe58',
        zIndex: 99,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    logo: {
        height: 55,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    }
}));

const RefLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default function AppAppBar(props) {
    const classes = useStyles();

    return (
        
        <React.Fragment>

            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar className={classes.appBar}>
                    <Toolbar className={classes.toolbar}>

                            <Button component={RefLink} to="/">
                                <img
                                    src="baby-icon.png"
                                    alt="logo"
                                    className={classes.logo}
                                />
                            </Button>
                            <Typography variant="h5" noWrap className={classes.toolbarTitle}>
                                <Link underline="none" color="textPrimary" component={RefLink} to="/">
                                    HappyWalrus
                                </Link>
                            </Typography>

                            <nav>
                                <Link variant="button" color="textPrimary" component={RefLink} to="/upload" className={classes.link}>
                                    Get Started
                                </Link>
                                <Link variant="button" color="textPrimary" component={RefLink} to="/about" className={classes.link}>
                                    About Us
                                </Link>
                            </nav>

                            <Button color="primary" variant="outlined" className={classes.link}>
                                Login
                            </Button>

                            <Button color="secondary" variant="outlined" className={classes.link}>
                                Sign Up
                            </Button>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </React.Fragment>
    )
} 