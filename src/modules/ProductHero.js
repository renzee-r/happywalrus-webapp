import React, { Component } from 'react';
import {
    Button, Container, CssBaseline, Grid, Typography,
    Fade, Dialog, DialogContent, DialogActions
} from '@material-ui/core';
import { 
    Link as RouterLink 
} from "react-router-dom";
import { withStyles, createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import { Linear } from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'animation.gsap'
import 'debug.addIndicators'

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
const { breakpoints } = theme;

const styles = theme => ({
    root: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        marginTop: 60,
        height: 'calc(100vh - 145px - 20px)',
        minHeight: 900,
        overflowX: 'hidden',
        overflowY: 'hidden',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    heroContent: {
        [theme.breakpoints.down('sm')]: {
            marginTop: 85,
        },
        [theme.breakpoints.up('md')]: {
            paddingTop: '20vh',
        },
        width: '50vw',
    },
    parallaxChild: {
        height: '110vh',
        width: '100%',
        top: 'calc(-45vh + 60px)',
        [theme.breakpoints.up('xs')]: {
            top: 'calc(-53vh + 60px)',
        },
        position: 'relative',
        backgroundImage: `url('hero-bg-1.png')`,
        backgroundSize: 'cover',
    },
});

const RefLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);

class ProductHero extends Component {
    
    constructor(props) {
        super(props);
        this.controller = new ScrollMagic.Controller();

        this.handleDialogOpen = this.handleDialogOpen.bind(this);
        this.handleDialogClose = this.handleDialogClose.bind(this);

        this.state = {isOpen: false};
    }


    componentDidMount() {
        new ScrollMagic.Scene({
            triggerElement: '#scrollStarts',
            triggerHook: 'onEnter',
            duration: '200%'
        })
        .setTween('#myElement', {y: '100vh', ease: Linear.easeNone})
        // .addIndicators() // add indicators (requires plugin)
        .addTo(this.controller); // assign the scene to the controller
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

                <CssBaseline />
                
                <section id="scrollStarts" className={classes.root}>
                    {/* <div id="scrollStarts" className={classes.scrollStart}></div> */}

                    {/* <div  className={classes.parallaxParent}> */}
                        <div id="myElement" className={classes.parallaxChild}>
                            <Container maxWidth="lg" className={classes.container}>
                                <Fade timeout={1000} in={true}>
                                    <div className={classes.heroContent}>
                                        <ThemeProvider theme={theme}>
                                            <Typography align="center" variant="h2" color="textPrimary" gutterBottom> 
                                                HappyWalrus makes babyproofing your kitchen fast and easy!
                                            </Typography>
                                            <Typography variant="h5" align="center" color="textPrimary" paragraph>
                                                Babyproofing’s a huge chore, but children ages 0-4 are hurt at home more than anywhere else. HappyWalrus highlights kitchen hazards in photos and tells you how you can babyproof your home.
                                            </Typography>
                                            <div className={classes.heroButtons}>
                                                <Grid container justify="center">
                                                    <Grid item>
                                                        <Button variant="contained" color="primary" component={RefLink} onClick={this.handleDialogOpen} to=''>
                                                            Get Started
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </div>
                                        </ThemeProvider>
                                    </div>
                                </Fade>
                            </Container>
                        </div>
                    {/* </div> */}
                </section>

                <Dialog
                    fullWidth={true}
                    maxWidth={'md'}
                    open={this.state.isOpen}
                    onClose={this.handleClose}
                    aria-labelledby="dialog-title"
                >
                    <DialogContent>
                        <Container maxwidth="sm" className={classes.container}>
                            <Typography variant='h2' gutterBottom>TERMS OF USE</Typography>

                            <Typography variant='body1' gutterBottom>THIS APP IS A STUDENT WORK FOR A MASTER'S PROGRAM AT THE UNIVERSITY OF CALIFORNIA, BERKELEY, WHICH REQUIRED US TO POST IT ON THE INTERNET. THIS IS A TEST. THIS IS ONLY A TEST.</Typography>

                            <Typography variant='h6' gutterBottom>Please read this agreement carefully before using this site.</Typography>

                            <Typography variant='body1' gutterBottom>By accessing, browsing or using happy-walrus.com("Website"), or any page thereof, through direct or indirect means, or alternative methods (including telephone or email) in any manner, you accept and agree to be bound by these Terms of Use ("Agreement").</Typography>

                            <Typography variant='body1' gutterBottom>HappyWalrus("Owner") reserves the right, in its sole discretion, to modify or change these Terms of Use at any time without prior notice to you. Your continued use of this Website following the posting of any changes to the Terms of Use constitutes acceptance of those changes. If at any time you choose not to accept these Terms of Use, do not use this Website.</Typography>

                            <Typography variant='body1' gutterBottom>The materials on this website are intended to be for informational purposes only. This information does not constitute financial advice and does not necessarily reflect the opinions of our clients. The law is constantly changing and the information may not be complete or correct depending on the date this Website was last reviewed and your particular problem.</Typography>

                            <Typography variant='body1' gutterBottom>Each financial problem depends on its individual facts, and different jurisdictions have different laws and regulations. Because of these differences, you should not act or rely on any information on this Website without seeking the advice of a competent individual licensed to practice in your jurisdiction for your particular problem.</Typography>

                            <Typography variant='body1' gutterBottom>Owner makes no representation that materials on this Website are appropriate or available for use in jurisdictions other than the State of California, and accessing them from jurisdictions where their contents are illegal is prohibited. Those users who choose to access this Website from other locations do so at their own risk and are responsible for compliance with local laws and regulations.</Typography>

                            <Typography variant='body1' gutterBottom>This Website is not intended to be an advertisement or solicitation to provide advice, and use of this Website does not create a professional relationship. All clients must undergo conflict screening before acceptance by Owner.</Typography>

                            <Typography variant='body1' gutterBottom>Testimonials and/or endorsements on this website do not constitute a guarantee, warranty, or prediction regarding the outcome of your matter.</Typography>

                            <Typography variant='h6' gutterBottom>Links to Other Sites & Advisors</Typography>

                            <Typography variant='body1' gutterBottom>This Website may contain links to other sites and to a team of Advisors. If so, and if you choose to use the products/services provided by those third-party websites and/or Advisors, they are governed by the terms and conditions of those websites, not of this Website. By way of example but not by way of limitation, you may be asked by those sites to provide personally identifiable information. Owner is not responsible for the privacy practices, terms and conditions, contents, links, products, or services of those sites or their owners. Use of the term "Advisor" does not mean that Owner has in any way qualified these parties or done any manner of background check. Use these parties at your own risk - they are offered merely as a resource. Please be aware when you leave our site, and read the policies of each and every website that you visit. This Agreement applies solely to this Website. </Typography>

                            <Typography variant='h6' gutterBottom>Intellectual Property</Typography>

                            <Typography variant='body1' gutterBottom>All material available on this Website is the property of Owner and is protected by international copyright and trademark laws. All rights are reserved to Owner. You may not modify, copy, frame, reproduce, republish, upload, transmit, broadcast, sell or distribute in any way any material from this site without the express written permission from Owner. You are permitted to use material from this Website for your own personal, non-commercial use only, provided you keep intact all copyright and other proprietary notices. In the event you download any content from this Website, such content is licensed to you on a limited basis by Owner; Owner does not transfer title to the content to you.</Typography>

                            <Typography variant='body1' gutterBottom>Featured words or symbols, used to identify the source of goods and services, may be the trademarks of their respective owners.</Typography>

                            <Typography variant='body1' gutterBottom>Pursuant to Title 17, United States Code, Section 512(c)(2), notifications of claimed copyright infringement should be sent to the Website's designated agent, in writing, to </Typography>

                            <Typography variant='body1' gutterBottom>happy.walrus.website@gmail.com </Typography>

                            <Typography variant='h6' gutterBottom>Restrictions on Use</Typography>

                            <Typography variant='body1' gutterBottom>You agree that you will not, and will not assist or enable others to use the Website: </Typography>

                            <li>1.to threaten, stalk, defraud, incite, harass, or advocate the harassment of another person or entity, or otherwise interfere with use of the Website; </li>
                            <li>2.in violation of the Terms of Use, Privacy Policy, or any applicable law; </li>
                            <li>3.to modify, adapt, appropriate, reproduce, distribute, translate, create derivative works or adaptations of, publicly display, sell, trade, link to, or in any way exploit the Website or its content except as expressly authorized by Owner; or </li>
                            <li>4.to mine, record or gather information about other users. </li>

                            <Typography variant='h6' gutterBottom>Termination</Typography>

                            <Typography variant='body1' gutterBottom>Owner may terminate or suspend the Website, in whole or in part, at its sole discretion, for any or no reason, and without notice or liability of any kind.</Typography>

                            <Typography variant='h6' gutterBottom>Disclaimers and Liability</Typography>

                            <Typography variant='body1' gutterBottom>THE WEBSITE AND ALL WEBSITE CONTENT IS MADE AVAILABLE TO YOU ON AN "AS IS" BASIS. OWNER MAKES NO WARRANTIES, REPRESENTATIONS, OR CONDITIONS OF ANY KIND, EXPRESS, STATUTORY OR IMPLIED AS TO (1) THE OPERATION AND FUNCTIONALITY OF THE SITE, (2) THE ACCURACY, INTEGRITY, COMPLETENESS, QUALITY, LEGALITY, USEFULNESS, SAFETY, AND INTELLECTUALPROPERTY RIGHTS OF ANY OF THE SITE CONTENT, INCLUDING BUT NOT LIMITED TO THE ACCURACY OF INFORMATION LISTED ON THE WEBSITE, AND (3) THE PRODUCTS AND SERVICES ASSOCIATED WITH AND/OR SOLD ON THE WEBSITE. OWNER FURTHER DISCLAIMS ALL WARRANTIES, EXPRESS, STATUTORY, OR IMPLIED WITH RESPECT THERETO, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, DURABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT.</Typography>

                            <Typography variant='body1' gutterBottom>IN NO CASE SHALL OWNER, ITS DIRECTORS, OFFICERS, EMPLOYEES, AFFILIATES, AGENTS, CONTRACTORS, OR LICENSORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, PUNITIVE, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING FROM OR RELATED TO YOUR USE OF THE WEBSITE OR OF ANY OF THE SERVICES OR PRODUCTS SOLD THEREON, INCLUDING, BUT NOT LIMITED TO, ANY ERRORS OR OMISSIONS IN ANY CONTENT, OR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY PRODUCT OR SERVICE CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE WEBSITE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. BECAUSE SOME STATES OR JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR THE LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, IN SUCH STATES OR JURISDICTIONS, OWNER'S LIABILITY SHALL BE LIMITED TO THE EXTENT PERMITTED BY LAW.</Typography>

                            <Typography variant='h6' gutterBottom>Indemnity</Typography>

                            <Typography variant='body1' gutterBottom>You agree to indemnify Owner and its agents and representatives from and against any and all liabilities, expenses (including attorneys' fees) and damages from any claim or demand made by any third-party due to or arising out of (i) your access or use of the Website or of the products and services sold thereon, (ii) your violation of the Terms of Use, or (iii) the infringement by you, or any third-party using your account, of any intellectual property or other right of any person or entity.</Typography>

                            <Typography variant='h6' gutterBottom>Use of Website</Typography>

                            <Typography variant='body1' gutterBottom>You must be at least eighteen (18) years of age to use this Website. If you are under 18 years of age, please do not use this Website.</Typography>

                            <Typography variant='h6' gutterBottom>Availability, Errors and Inaccuracies</Typography>

                            <Typography variant='body1' gutterBottom>Owner is constantly updating product and service offerings on the Website. It may experience delays in updating information and in its advertising on other web sites. The information found on the Website may contain errors or inaccuracies and may not be complete or current. Products or services may be mispriced, described inaccurately, or unavailable on the Website and Owner cannot guarantee the accuracy or completeness of any information found on the Website. If you have a bad experience with any of the products/services or third party links found on this Website(including Advisors), please notify Owner immediately.</Typography>

                            <Typography variant='body1' gutterBottom>Owner reserves the right to change or update information and to correct errors, inaccuracies, or omissions at any time without prior notice.</Typography>

                            <Typography variant='h6' gutterBottom>Content</Typography>

                            <Typography variant='body1' gutterBottom>The Website allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, questions, or other material ("Content"). You are responsible for the Content that you post on or through the Website, including its legality, reliability, and appropriateness.</Typography>

                            <Typography variant='body1' gutterBottom>By posting Content on or through the Website, you represent and warrant that: (i) the Content is yours (you own it) and/or you have the right to use it and the right to grant Owner the rights and license as provided in these Terms, and (ii) that the posting of your Content on or through the Website does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person or entity. Owner reserves the right to terminate the account of anyone found to be infringing on a copyright.</Typography>

                            <Typography variant='body1' gutterBottom>You retain any and all of your rights to any Content you submit, post or display on or through the Website and you are responsible for protecting those rights. Owner takes no responsibility and assume no liability for Content you or any third party posts on or through the Website. However, by posting Content using the Website, you grant Owner the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such Content. Owner has the right but not the obligation to monitor and edit all Content provided by users.</Typography>

                            <Typography variant='h6' gutterBottom>Copyright notice </Typography>

                            <Typography variant='body1' gutterBottom>Copyright [2019] Errett Hobbs, Nach Mohan, Ramiro Cadavid, and Renzee Jan Reyes </Typography>

                            <Typography variant='h6' gutterBottom>Apache License</Typography>

                            <Typography variant='body1' gutterBottom>Licensed under the Apache License, Version 2.0 (the "License"); you may not use our model except in compliance with the License. You may obtain a copy of the License at</Typography>

                            <Typography variant='body1' gutterBottom>http://www.apache.org/licenses/LICENSE-2.0</Typography>

                            <Typography variant='body1' gutterBottom>Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.</Typography>

                        </Container>

                    </DialogContent>

                    <DialogActions>
                        <Button onClick={this.handleDialogClose} color="secondary">
                            Cancel
                        </Button>

                        <Button variant='contained' component={RefLink} to="/upload" color="primary">
                            I Accept
                        </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(ProductHero)