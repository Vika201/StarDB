import React, {Component} from 'react';

import './render-planet.css';

export default class RenderPlanet extends Component {

    render() {
        return (
            <div className="render-planet card bg-dark mb-3 d-flex">
                <div className="card-body">
                    <img src={`https://starwars-visualguide.com/assets/img/planets/5.jpg`} alt=" " height="150px" width="150px" className="img" align="left"/>
                    <div className="info-card">
                        <h4>Random Planet</h4>
                        <ul className="info list-group list-group-flush">
                            <li className="list-group-item">
                                <span>Population</span>
                                <sapn>1231234</sapn>
                            </li>
                            <li className="list-group-item">
                                <span>Rotation Period</span>
                                <span>43</span>
                            </li>
                            <li className="list-group-item">
                                <span>Diameter</span>
                                <span>100</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}