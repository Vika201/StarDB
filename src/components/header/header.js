import React, {Component} from 'react';
import './header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="header d-flex">
                <h1> Star DB </h1>
                <div className="btn">
                    <button className="btn btn-link"> People </button>
                    <button className="btn btn-link"> Planets </button>
                    <button className="btn btn-link"> Starships </button>
                </div>
            </div>
            )
    }
}