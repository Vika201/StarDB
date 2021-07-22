import React, {Component} from 'react';

import Spinner from "../spinner";
import './item-details.css';
import ErrorButton from "../error-button/error-button";

export default class ItemDetails extends Component {

    state = {
        item: null,
        loading: false,
        image: null
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem() {
        this.setState({
            loading: true
        });
        const { itemId, getData, getImageUrl } = this.props;
        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    loading: false,
                    image: getImageUrl(item)
                })
            })
    }

    render() {

        const { item, loading, image } = this.state;

        if (!item) {
            return <span>Select a person from the list</span>
        }

        if (loading) {
            return <Spinner />
        }

        const { id, name, gender,
            birthYear, eyeColor } = item;

        return (
            <div className="person-details card">
                <img className="person-image"
                     alt=""
                     src={image}
                     align="left" />
                <div className="card-body">
                    <div className="info-card">
                        <h4>{name}</h4>
                        <ul className="info list-group list-group-flush">
                            <li className="list-group-item">
                                <span>Gender</span>
                                <span> {gender} </span>
                            </li>
                            <li className="list-group-item">
                                <span>Birth Year</span>
                                <span> {birthYear} </span>

                            </li>
                            <li className="list-group-item">
                                <span>Eye Color</span>
                                <span> {eyeColor} </span>
                            </li>
                        </ul>
                    </div>
                    <ErrorButton />
                </div>
            </div>
        )
    }
};
