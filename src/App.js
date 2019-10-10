import React from 'react';
import './App.css';
import { 
    BrowserRouter as Router, Switch, Route, Link as RouterLink 
} from "react-router-dom";
import AppAppBar from './modules/AppAppBar';
import AppFooter from './modules/AppFooter';
import ProductHero from './modules/ProductHero';
import ProductValues from './modules/ProductValues';
import ProductHowItWorks from './modules/ProductHowItWorks';
import ProductOurTeam from './modules/ProductOurTeam';
import Upload from './modules/Upload'
import Analyzing from './modules/Analyzing'
import ImageAssessment from './modules/ImageAssessment'

export default function App() {
    return (
        <Router>   
            <AppAppBar />

            <Switch>
                {/* <Route path="/about">
                    <About />
                </Route> */}

                <Route path="/upload">
                    <Upload />
                </Route>

                <Route path="/analyzing">
                    <Analyzing />
                </Route>

                <Route path="/image-assessment">
                    <ImageAssessment />
                </Route>

                <Route path="/">
                    <ProductHero />
                    <ProductValues />
                    <ProductHowItWorks />
                    <ProductOurTeam />
                </Route>
            </Switch>

            <AppFooter />


        </Router>

    )
}

