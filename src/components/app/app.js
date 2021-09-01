import React, {Component} from 'react';

import Header from '../header/header';
import RenderPlanet from '../render-planet/render-planet';
import ErrorIndicator from "../error-indicator/error-indicator";

import "./app.css";
import SwapiService from "../../service/swapi-service";
import ErrorBoundry from "../error-boundry/error-boundry";
import {SwapiServiceProvider} from "../swapi-service-context";
import {PeoplePage,
        PlanetsPage,
        StarshipsPage} from "../pages";

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        hasError: false
    };

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }


        return (
            <div className="app container-fluid">
                <ErrorBoundry>
                    <SwapiServiceProvider value={this.swapiService}>

                        <Header />
                        <RenderPlanet />
                        <PeoplePage />
                        <PlanetsPage />
                        <StarshipsPage />

                    </SwapiServiceProvider>
                </ErrorBoundry>
            </div>
            )

    }
}