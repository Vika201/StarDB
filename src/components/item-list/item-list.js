import React, {Component} from 'react';
import './item-list.css';

export default class ItemList extends Component {
    render() {
        return (
                <ul className="item-list card bg-secondary mb-3 list-group list-group-flush">
                    <li className="list-group-item"> Luke Skywalker </li>
                    <li className="list-group-item"> Darth Vader </li>
                    <li className="list-group-item"> R2-D2 </li>
                </ul>
        )
    }
}