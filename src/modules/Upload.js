import React, { Component } from 'react';
import {
    Button, Container, CssBaseline, Grid, Typography, ButtonBase
} from '@material-ui/core';
import { 
    withRouter
} from "react-router-dom";
import Publish from '@material-ui/icons/Publish';
import { withStyles, createMuiTheme, responsiveFontSizes, ThemeProvider  } from '@material-ui/core/styles';
import { compose } from 'recompose';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const styles = theme => ({
    root: {
        // backgroundColor: '#fde3a7',
        position: 'relative',
        display: 'flex',
        // alignItems: 'center',
        marginTop: 60,
        height: 'calc(100vh - 145px)',
        // minHeight: 500,
        // maxHeight: 1300,
    },
    container: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(14),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    step1: {
        paddingTop: 20
    },
    step2: {
        paddingTop: 40
    },
    gridItemButton: {
        paddingTop: 40,
    },
    button: {
        fontSize: 20,
    },
    icon: {
        marginRight: theme.spacing(2)
    },
    image: {
        height: 150,
    },
    input: {
        display: 'none',
    },
    gridItemDemo: {
        margin: 10,
        marginTop: 240
    },
    gridItemDemoImage: {
        marginTop: 120
    },
    demoImage: {
        position: 'relative',
        height: 350,
        '&:hover, &$focusVisible': {
          zIndex: 1,
          '& $imageBackdrop': {
            opacity: 0.4,
          },
          '& $imageMarked': {
            opacity: 0,
          },
          '& $imageTitle': {
            border: '4px solid currentColor',
            opacity: 1,
          },
        },
      },
      focusVisible: {},
      imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
      },
      imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
      },
      imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0,
        transition: theme.transitions.create('opacity'),
      },
      imageTitle: {
        position: 'relative',
        opacity: 0,
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
      },
      imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
      }
});

class Upload extends Component {

    constructor(props) {
        super(props);

        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleImageClick = this.handleImageClick.bind(this);
        this.handleImageUpload = this.handleImageUpload.bind(this);
        this.handleDemoClick = this.handleDemoClick.bind(this);

        this.state = {
            isOpen: false,
            invalidFile: false
        };
        this.imageRef = React.createRef();
        this.fileInput = React.createRef();
    }

    handleClickOpen() {
        this.setState(state => ({
            isOpen: true
        }));
    }

    handleClose() {
        this.setState(state => ({
            isOpen: false
        }));
    }

    handleImageClick(e, data) {
        console.log(this.imageRef);
        this.imageRef.current.style.border = 'none';
        e.target.style.border = 'solid';
    }

    handleImageUpload(e, data) {
        console.log(this.fileInput.current.files[0]);

        if (!this.fileInput.current.files[0]['type'].startsWith('image/')) {
            this.setState({
                invalidFile: true
            })
        } else {
            this.props.history.push({
                pathname: '/analyzing',
                state: { fileInput: this.fileInput.current.files[0] }
            })
        }
    }

    handleDemoClick() {
        var demoFile = new File([""], 'demo.jpg')
        console.log(demoFile)
        this.props.history.push({
            pathname: '/analyzing',
            state: { fileInput: demoFile }
        })
    }

    render() {
        const { classes } = this.props;

        return (
            // Guidelines for ideal image quality/characteristics
            // Dialog options for user provided features

            <React.Fragment>
                <CssBaseline />

                <section className={classes.root}>
                    <Container className={classes.container}>
                        <Grid container justify="center">
                            <ThemeProvider theme={theme}>
                            <Grid container justify="center" className={classes.step1}>
                                <Grid item md={2}>
                                    <Typography align="left" variant="h4" color="textPrimary" gutterBottom> 
                                        Step 1: 
                                    </Typography>
                                </Grid>

                                <Grid item md={10}>
                                    <Typography align="left" variant="h4" color="textPrimary" gutterBottom> 
                                        Take a picture of the room/space you would like to babyproof
                                    </Typography>
                                </Grid>

                                <Grid item md={2}></Grid>
                                <Grid item md={10}>
                                    <Typography align="left" variant="h6" color="textSecondary" gutterBottom> 
                                        *HappyWalrus works best with images that are high quality and well lit
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid container justify="center" className={classes.step2}>
                                <Grid item md={2}>
                                    <Typography align="left" variant="h4" color="textPrimary" gutterBottom> 
                                        Step 2: 
                                    </Typography>
                                </Grid>

                                <Grid item md={10}>
                                    <Typography align="left" variant="h4" color="textPrimary" gutterBottom> 
                                        Upload the image using the button below
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid item md={12} align="center" className={classes.gridItemButton}>
                                {/* <Button variant="contained" color="primary" size="large" onClick={this.handleClickOpen} className={classes.button}>
                                    <Publish fontSize="large" className={classes.icon}/>
                                    Upload
                                </Button> */}

                                <input
                                    accept="image/*"
                                    className={classes.input}
                                    id="fileInput"
                                    multiple
                                    type="file"
                                    onChange={(this.handleImageUpload)}
                                    ref={this.fileInput}
                                />
                                <label htmlFor="fileInput">
                                    <Button variant="contained" color="primary" size="large" component="span" className={classes.button}>
                                    <Publish fontSize="large" className={classes.icon}/>
                                    Upload
                                    </Button>
                                    {this.state.invalidFile &&
                                        <Typography variant='subtitle1' color='error'>
                                            *Invalid file type. Please upload a standard image format.
                                        </Typography>
                                    }
                                </label>
                            </Grid>
{/* 
                            <Grid item md={4} align="center" className={classes.gridItemDemo}>
                                <Typography variant='h6'>
                                    Don't have an image to upload?<br/>Try out HappyWalrus with the provided demo image!
                                </Typography>
                            </Grid>

                            <Grid item md={6} align='center' className={classes.gridItemDemoImage}>
                                <ButtonBase
                                    focusRipple
                                    className={classes.demoImage}
                                    focusVisibleClassName={classes.focusVisible}
                                    style={{
                                        width: '100%',
                                    }}
                                    onClick={this.handleDemoClick}
                                    >
                                    <span
                                        className={classes.imageSrc}
                                        style={{
                                        backgroundImage: `url(demo.jpg)`,
                                        }}
                                    />
                                    <span className={classes.imageBackdrop} />
                                    <span className={classes.imageButton}>
                                        <Typography
                                        component="span"
                                        variant="subtitle1"
                                        color="inherit"
                                        className={classes.imageTitle}
                                        >
                                        Demo Image
                                        <span className={classes.imageMarked} />
                                        </Typography>
                                    </span>
                                </ButtonBase>
                            </Grid> */}
                            </ThemeProvider>
                        </Grid>
                    </Container>
                </section>
            </React.Fragment>
        )
    }
   
}

export default compose(
    withRouter,
    withStyles(styles)
)(Upload)