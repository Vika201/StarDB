import React, {Component} from 'react';

import SwapiService from '../../service/swapi-service';
import Spinner from '../spinner/spinner';

import './render-planet.css';

export default class RenderPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true
    }

    constructor() {
        super();
        this.updatePlanet();
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false})
    }

    updatePlanet() {
        const id = 12;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
    }

    render() {
        const { planet, loading } = this.state;

        const spinner = loading ? <Spinner /> : null;
        const content = !loading ?  <PlanetView planet={planet} /> : null;

        return (
            <div className="render-planet jumbotron rounded">
                {spinner}
                {content}
            </div>
        )
    };
};

const PlanetView = ({ planet }) => {
    const { id, name, population,
            rotationPeriod, diameter } = planet;

    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}