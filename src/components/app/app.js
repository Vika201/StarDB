import React, {Component} from 'react';

import Header from '../header/header';
import RenderPlanet from '../render-planet/render-planet';
import ErrorButton from '../error-button/error-button';
import ErrorIndicator from "../error-indicator/error-indicator";

import "./app.css";
import PeoplePage from "../people-page/people-page";

export default class App extends Component {
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
        return (
            <div className="app container-fluid">
                <Header />
                <RenderPlanet />
                <ErrorButton />

                <PeoplePage />
            </div>
            )

    }
}