import React, {Component} from 'react';

import SwapiService from '../../service/swapi-service';

import './render-planet.css';

export default class RenderPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        id: null,
        name: null,
        population: null,
        rotationPeriod: null,
        diameter: null
    }

    constructor() {
        super();
        this.updatePlanet();
    }

    updatePlanet() {
        const id = Math.floor(Math.random() * 25) + 2;
        this.swapiService
            .getPlanet(id)
            .then((planet) => {
                this.setState({
                    id,
                    name: planet.name,
                    population: planet.population,
                    rotationPeriod: planet.rotation_period,
                    diameter: planet.diameter
                })
            })
    }

    render() {
        const { id, name,
                population, rotationPeriod,
                diameter } = this.state;

        return (
            <div className="render-planet card bg-dark mb-3 d-flex">
                <div className="card-body">
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=" " height="150px" width="150px" className="img" align="left"/>
                    <div className="info-card">
                        <h4>{name}</h4>
                        <ul className="info list-group list-group-flush">
                            <li className="list-group-item">
                                <span className="term">Population</span>
                                <sapn>{population}</sapn>
                            </li>
                            <li className="list-group-item">
                                <span className="term">Rotation Period</span>
                                <span>{rotationPeriod}</span>
                            </li>
                            <li className="list-group-item">
                                <span className="term">Diameter</span>
                                <span>{diameter}</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}