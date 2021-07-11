import React, {Component} from 'react';

import Header from '../header/header';
import RenderPlanet from '../render-planet/render-planet';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';

import "./app.css";

export default class App extends Component {
    state = {
        selectedPerson: null
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    render() {
        return (
            <div className="app container-fluid">
                <Header />
                <RenderPlanet />

                <div className="row mb-2">
                    <div className="col-md-6">
                        <ItemList onItemSelected={this.onPersonSelected}/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>
            </div>
            )

    }
}