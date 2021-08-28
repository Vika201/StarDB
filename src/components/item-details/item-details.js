import React, {Component} from 'react';

import Spinner from "../spinner";
import './item-details.css';
import ErrorButton from "../error-button/error-button";

const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span>{label}</span>
            <span> {item[field]} </span>
        </li>
    );
};

export {
    Record
};

export default class ItemDetails extends Component {

    state = {
        item: null,
        loading: false,
        image: null
    };

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

        const { name } = item;

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
                            {
                                React.Children.map(this.props.children, (child) => {
                                    return React.cloneElement(child, { item });
                                })
                            }
                        </ul>
                    </div>
                    <ErrorButton />
                </div>
            </div>
        )
    }
};
