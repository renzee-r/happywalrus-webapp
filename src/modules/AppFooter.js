import React, { Component } from 'react';
import {
    Grid, Link, Container, Typography, CssBaseline,
    Dialog, DialogContent, DialogActions, Button, ListItem
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: '#fabe58',
    zIndex: 0,
    height: 85,
    minHeight: 85,
  },
  container: {
    // marginTop: theme.spacing(3),
    display: 'flex',
  },
  copyright: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(4),
  },
  legal: {
    marginTop: theme.spacing(2),
  },
  list: {
    margin: 0,
    listStyle: 'none',
    paddingLeft: 0,
  },
  termsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
});

class AppFooter extends Component {

    constructor(props) {
        super(props);
        this.handleDialogOpen = this.handleDialogOpen.bind(this);
        this.handleDialogClose = this.handleDialogClose.bind(this);
        this.handlePrivacyOpen = this.handlePrivacyOpen.bind(this);
        this.handlePrivacyClose = this.handlePrivacyClose.bind(this);

        this.state = {
            isOpen: false,
            isPrivacyOpen: false
        };
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

    handlePrivacyOpen() {
        this.setState(state => ({
            isPrivacyOpen: true
        }));
    }

    handlePrivacyClose() {
        this.setState(state => ({
            isPrivacyOpen: false
        }));
    }
    
    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>

                <section className={classes.root}> 
                    <CssBaseline />
                    <Grid container>
                        <Grid item sm={11} xs={6}>
                            <div className={classes.copyright}>
                                {'© '}
                                <Link color="inherit" href="/">
                                    HappyWalrus
                                </Link>{' '}
                                {new Date().getFullYear()}
                            </div>
                        </Grid>

                        <Grid>
                            <div className={classes.legal}>
                            <Typography variant="subtitle2"> 
                                Legal
                            </Typography>
                            <ul className={classes.list}>
                                <li className={classes.listItem}>
                                    <Link onClick={this.handleDialogOpen}>Terms</Link>
                                </li>
                                <li className={classes.listItem}>
                                    <Link onClick={this.handlePrivacyOpen}>Privacy</Link>
                                </li>
                            </ul>
                            </div>
                        </Grid>
                    </Grid>
                </section>

                <Dialog
                fullWidth={true}
                maxWidth={'md'}
                open={this.state.isOpen}
                onClose={this.handleClose}
                aria-labelledby="dialog-title"
                >

                <DialogContent>
                    <Container maxwidth="sm" className={classes.termsContainer}>
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
                        Close
                    </Button>
                </DialogActions>
                </Dialog>

                <Dialog
                fullWidth={true}
                maxWidth={'md'}
                open={this.state.isPrivacyOpen}
                onClose={this.handlePrivacyClose}
                aria-labelledby="dialog-title"
                >

                <DialogContent>
                    <Container maxwidth="sm" className={classes.termsContainer}>
                        <Typography variant='h4' gutterBottom>PRIVACY POLICY</Typography>

                        <Typography variant='body1' gutterBottom>We thank you for reviewing our privacy policy, and know that you will check back for any updates, on your future visits. We look forward to helping you. We respect your privacy, and intend our site to be a safe place for everyone who visits and corresponds with us. This notice explains how we protect your privacy and treat your personal information. It applies to current and former customers. "Personal information" here means anything we know about you personally.</Typography>

                        <Typography variant='body1' gutterBottom><Typography variant='h6' gutterBottom>How We Get Your Information</Typography></Typography>

                        <Typography variant='body1' gutterBottom>We get your personal information mostly from you. We may also use outside sources to help ensure our records are correct and complete.</Typography>

                        <Typography variant='body1' gutterBottom><Typography variant='h6' gutterBottom>Using Your Information</Typography></Typography>

                        <Typography variant='body1' gutterBottom>We collect your personal information to help us decide if you're eligible for our products or services. We may also need it to verify identities to help deter fraud, money laundering, or other crimes. How we use this information depends on what products and services you have or want from us. It also depends on what laws apply to those products and services. For example, we mayalso use your information to:</Typography>

                        <ListItem>process claims and other transactions</ListItem>
                        <ListItem>perform business research</ListItem>
                        <ListItem>confirm or correct your information</ListItem>
                        <ListItem>market new products to you</ListItem>
                        <ListItem>help us run our business</ListItem>
                        <ListItem>comply with applicable laws</ListItem>

                        <Typography variant='body1' gutterBottom><Typography variant='h6' gutterBottom>Opting Out</Typography></Typography>

                        <Typography variant='body1' gutterBottom>You may tell us not to share your information with our affiliates for their own marketing purposes or unaffiliated business partners as part of a joint marketing arrangement. You should recognize, however, that there is no such thing as perfect security on the Internet. Please do note that we could merge with or be acquired by another business entity at any time. Should such a combination occur, you should expect that we would share some or all of your information in order to continue to provide services. You can "opt out" any time by contacting us at:</Typography>

                        <Typography variant='body1' gutterBottom>happy.walrus.website@gmail.com </Typography>

                        <Typography variant='body1' gutterBottom><Typography variant='h6' gutterBottom>Non-Personal User Content</Typography></Typography>

                        <Typography variant='body1' gutterBottom>We may use user submitted content such as ratings, reviews, feedback ("User Content") in a number of different ways, including displaying it on the Website, reformatting it, incorporating itinto other works, creating derivative works from it, promoting it, or distributing it. Accordingly, you irrevocably grant us permission to use your User Content for any purpose. You also irrevocably grant the Website users the right to access User Content in connection with their use of the Website. While you are using our websites, we may also collect certain non-personally-identifiable information about you, such as the URL you just came from, the next URL you go to, what browser you are using (e.g. Chrome, Internet Explorer), the domain name of your Internet Service Provider, and your IP address.</Typography>

                        <Typography variant='body1' gutterBottom>You assume all risks associated with User Content, including reliance on its accuracy, completeness or usefulness, or any disclosure by you of information in your User Content that makes you personally identifiable. You may not imply that User Content is in any way sponsoredor endorsed by us.</Typography>

                        <Typography variant='body1' gutterBottom>We cannot and do not review all User Content feedback, nor do we have any control over the same. Under no circumstances shall we be held responsible or liable for any claims or damages arising out of any reviews or feedback.</Typography>

                        <Typography variant='body1' gutterBottom>Owner may remove, edit or reinstate User Content at our sole discretion.</Typography>

                        <Typography variant='body1' gutterBottom><Typography variant='h6' gutterBottom>Cookies</Typography></Typography>

                        <Typography variant='body1' gutterBottom>We use cookies and log files to: (a) store information so that you will not have to re-enter it during your next visit to the Website; (b) provide custom, personalized content and information; (c) monitor the effectiveness of our services; and (d) monitor metrics such as total number of visitors and pages viewed.</Typography>

                        <Typography variant='body1' gutterBottom><Typography variant='h6' gutterBottom>Keep Your Wits About You...</Typography></Typography>

                        <Typography variant='body1' gutterBottom>Never assume that people are who they say they are, know what they say they know, or are affiliated with whom they say they are affiliated with in any forum or user-generated content area. Information obtained in a forum may not be reliable. We cannot be responsible for the content or accuracy of any information, and shall not be responsible for any decisions made based on such information. Please keep in mind that whenever you give out personal information online --- for example, via message boards or chat --- that information can be collected and used by people you don’t know. While we strive to protect your personal information and privacy, we cannot guarantee the security of any information you disclose online; you make such disclosures at your own risk.</Typography>

                        <Typography variant='body1' gutterBottom>Please also exercise discretion while browsing the Internet. You should be aware that when you are on our website, you could be directed to other sites that are beyond our control. There are links to other sites from our website pages that take you outside of our service. For example, if you click on a banner advertisement or a search result, the click may take you off the website. </Typography>

                        <Typography variant='body1' gutterBottom>This includes links from advertisers, sponsors, and content partners that may use our logo(s) as part of a co-branding agreement. These other sites may send their own cookies to users, collect data, solicit personal information, or contain information that you may find inappropriate or offensive. In addition, advertisers may send cookies to users that we do not control. We reserve the right to disable links from any third party sites at any time.</Typography>

                        <Typography variant='body1' gutterBottom>We do not make any representations or warranties as to the security of any information (including, without limitation, credit card and other personal information) you might be requested to give. We strongly encourage you to make whatever investigation you feel necessaryor appropriate before proceeding with any online or offline transaction.</Typography>

                        <Typography variant='body1' gutterBottom>You are entirely responsible for maintaining the confidentiality of your information and for all activities that occur under your account. You hereby indemnify, defend and hold us and our affiliates and our officers, directors, owners, agents, information providers, affiliates, licensors and licensees (collectively, the Indemnified Parties) harmless from and against any and all liabilities and costs (including reasonable attorneys’ fees) incurred by the Indemnified Parties in connection with any claim arising out of any breach by you of this Agreement or claims arising from your account. You shall use your best efforts to cooperate with us in the defense of any claim. We reserve the right, at our own expense, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you.</Typography>

                        <Typography variant='body1' gutterBottom><Typography variant='h6' gutterBottom>Questions</Typography></Typography>

                        <Typography variant='body1' gutterBottom>We want you to understand how we protect your privacy. If you have any questions about this notice, please contact us. When you write, include your name, address, and policy or account number.</Typography>

                        <Typography variant='body1' gutterBottom><Typography variant='h6' gutterBottom>Send privacy questions to:</Typography></Typography>

                        <Typography variant='body1' gutterBottom>happy.walrus.website@gmail.com </Typography>

                        <Typography variant='body1' gutterBottom>Please note that this Privacy Policy may change from time to time. If we make any material changes, we will notify you as required by law.</Typography>

                    </Container>

                </DialogContent>

                <DialogActions>
                    <Button onClick={this.handlePrivacyClose} color="secondary">
                        Close
                    </Button>
                </DialogActions>
                </Dialog>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(AppFooter)