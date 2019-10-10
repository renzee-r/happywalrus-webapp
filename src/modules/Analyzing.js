import React, { Component, useState, useEffect } from 'react';
import {
    Button, Container, CssBaseline, Grid, LinearProgress, Typography
} from '@material-ui/core';
import { 
    withRouter
} from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';

const styles = theme => ({
    root: {
        backgroundColor: '#fde3a7',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.up('lg')]: {
          height: '90vh',
          minHeight: 500,
          maxHeight: 1300,
        },
    },
    container: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(14),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    progress: {
        width: '90vw',
        height: 5
    },
        button: {
        fontSize: 20
    },
    icon: {
        marginRight: theme.spacing(2)
    },
    image: {
        height: 150
    }
});

class Analyzing extends Component {

    constructor(props) {
        super(props);

        this.state = {
            completed: 0,
        };
    }

    componentDidMount() {
        this.timer = setTimeout(() => this.progress(70), 1000);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    progress(completed) {
        if (completed > 100) {
            this.props.history.push('/image-assessment');
            this.setState({completed: 100});
        } else {
            this.setState({completed});
            const diff = Math.random() * 10;
            this.timer = setTimeout(() => this.progress(completed + diff), 1000);
        }
     }

    render() {
        const { classes } = this.props;
        // const [completed, setCompleted] = useState(90);

        // useEffect(() => {
        // function progress() {
        //     setCompleted(oldCompleted => {
        //     if (oldCompleted === 100) {
        //         this.props.history.push('/image-assessment');
        //         return 0;
        //     }
        //     const diff = Math.random() * 10;
        //     return Math.min(oldCompleted + diff, 100);
        //     });
        // }
    
        // const timer = setInterval(progress, 500);
        // return () => {
        //     clearInterval(timer);
        // };
        // }, []);

        return (
            <React.Fragment>
                <CssBaseline />

                <section className={classes.root}>
                    <Container className={classes.container}>
                        <Typography variant="h3" gutterBottom>
                            The walruses are hard at work!
                        </Typography>
                        <div>
                            <LinearProgress variant="determinate" value={this.state.completed} className={classes.progress}/>
                        </div>
                    </Container>
                </section>
            </React.Fragment>
        )
    }
}

export default compose(
    withRouter,
    withStyles(styles)
)(Analyzing)