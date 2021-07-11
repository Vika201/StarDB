import React, {Component} from 'react';

import SwapiService from "../../service/swapi-service";

import Spinner from "../spinner";
import './person-details.css';

export default class PersonDetails extends Component {

    swapiService = new SwapiService();

    state = {
        person: null,
        loading: false
    }

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    updatePerson() {
        this.setState({
            loading: true
        });
        const {personId} = this.props;
        if (!personId) {
            return;
        }

        this.swapiService
            .getPerson(personId)
            .then((person) => {
                this.setState({
                    person,
                    loading: false
                })
            })
    }

    render() {

        const { person, loading } = this.state;

        if (!person) {
            return <span>Select a person from the list</span>
        }

        if (loading) {
            return <Spinner />
        }

        return (
            <div className="person-details card">
                <SelectedPersonDetails person={person} />
            </div>
        )

    }
}

const SelectedPersonDetails = ({ person }) => {

    const { id, name, gender,
        birthYear, eyeColor } = person;

    return (
        <React.Fragment>
                <img className="person-image"
                     alt=""
                     src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                     align="left" />
                <div className="card-body">
                    <div className="info-card">
                        <h4>{name}</h4>
                        <ul className="info list-group list-group-flush">
                            <li className="list-group-item">
                                <span>Gender</span>
                                <span>{gender}</span>
                            </li>
                            <li className="list-group-item">
                                <span>Birth Year</span>
                                <span>{birthYear}</span>

                            </li>
                            <li className="list-group-item">
                                <span>Eye Color</span>
                                <span>{eyeColor}</span>
                            </li>
                        </ul>
                    </div>
                </div>
        </React.Fragment>
    )
}