import React, {Component} from 'react';

import Header from '../header/header';
import RenderPlanet from '../render-planet/render-planet';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';

import "./app.css";

export default class App extends Component {
    render() {
        return (
            <div className="app container-fluid">
                <Header />
                <RenderPlanet />
                <ItemList />
                <PersonDetails />
            </div>
            )

    }
}