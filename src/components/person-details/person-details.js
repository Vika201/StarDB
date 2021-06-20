import React, {Component} from 'react';

import './person-details.css';

export default class PersonDetails extends Component {
    render() {
        return (
            <div className="render-planet card bg-dark mb-3 d-flex">
                <div className="card-body">
                    <div className="info-card">
                        <h4> R2-D2 </h4>
                        <ul className="info list-group list-group-flush">
                            <li className="list-group-item">
                                <span>Gender</span>
                                <span>male</span>
                            </li>
                            <li className="list-group-item">
                                <span>Birth Year</span>
                                <span>43</span>

                            </li>
                            <li className="list-group-item">
                                <span>Eye Color</span>
                                <span>red</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}