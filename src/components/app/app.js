import React, {Component} from 'react';

import Header from '../header/header';
import RenderPlanet from '../render-planet/render-planet';
import ErrorButton from '../error-button/error-button';
import ErrorIndicator from "../error-indicator/error-indicator";

import "./app.css";
import SwapiService from "../../service/swapi-service";
import ItemDetails, {Record} from "../item-details/item-details";
import Row from "../row/row";

import { PersonList,
         PlanetList,
         StarshipList,
         PersonDetails,
         PlanetDetails,
         StarshipDetails } from '../sw-components';
import ErrorBoundry from "../error-boundry/error-boundry";
import {SwapiServiceProvider} from "../swapi-service-context";

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

                        <PersonDetails itemId={5} />

                        <PlanetDetails itemId={8} />

                        <StarshipDetails itemId={11} />

                        <PersonList />

                        <PlanetList />

                        <StarshipList />
                    </SwapiServiceProvider>
                </ErrorBoundry>
            </div>
            )

    }
}