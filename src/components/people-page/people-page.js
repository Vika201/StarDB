import React, {Component} from 'react';
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import ErrorIndicator from "../error-indicator/error-indicator";

export default class PeoplePage extends Component {
    state = {
        selectedPerson: null,
        hasError: false
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        return (
            <div className="row mb-2">
                <div className="col-md-6">
                    <ItemList onItemSelected={this.onPersonSelected}/>
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPerson}/>
                </div>
            </div>
        )
    }
}