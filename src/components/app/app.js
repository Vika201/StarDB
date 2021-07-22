import React, {Component} from 'react';

import Header from '../header/header';
import RenderPlanet from '../render-planet/render-planet';
import ErrorButton from '../error-button/error-button';
import ErrorIndicator from "../error-indicator/error-indicator";

import "./app.css";
import PeoplePage from "../people-page/people-page";
import ItemList from "../item-list/item-list";
import SwapiService from "../../service/swapi-service";
import ItemDetails from "../item-details/item-details";
import Row from "../row/row";

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        hasError: false
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        const { getPerson,
                getStarship,
                getPersonImage,
                getStarshipImage } = this.swapiService;

        const personDetails = (
            <ItemDetails
                itemId={11}
                getData={getPerson}
                getImageUrl={getPersonImage}/>
        );

        const starshipDetails = (
            <ItemDetails
                itemId={5}
                getData={getStarship}
                getImageUrl={getStarshipImage}/>
        );
        return (
            <div className="app container-fluid">
                <Header />
                <RenderPlanet />

                <Row
                    left={personDetails}
                    right={starshipDetails}/>

            </div>
            )

    }
}