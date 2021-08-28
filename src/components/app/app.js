import React, {Component} from 'react';

import Header from '../header/header';
import RenderPlanet from '../render-planet/render-planet';
import ErrorIndicator from "../error-indicator/error-indicator";

import "./app.css";
import SwapiService from "../../service/swapi-service";
import Row from "../row/row";

import { PersonList,
         PlanetList,
         StarshipList } from '../sw-components';
import PersonDetails from '../sw-components/person-details';
import PlanetDetails from '../sw-components/planet-details';
import StarshipDetails from '../sw-components/starship-details';
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

                        <Row
                            left={<PersonList />}
                            right={<PersonDetails itemId={5} />}
                        />

                        <Row
                            left={<PlanetList/>}
                            right={<PlanetDetails itemId={8}/>}
                        />

                        <Row
                            left={<StarshipList/>}
                            right={<StarshipDetails itemId={11}/>}
                        />
                    </SwapiServiceProvider>
                </ErrorBoundry>
            </div>
            )

    }
}