import React, { Component } from 'react';

import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";

const withData = (View) => {
    return class extends Component {

        state = {
            data: null,
            loading: true,
            hasError: false
        };

        componentDidMount() {
            this.props.getData()
                .then((data) => {
                    this.setState({
                        data,
                        loading: false
                    })
                })
        };

        render() {
            const { data, loading, hasError } = this.state;

            if (loading) {
                return <Spinner />
            }

            if (hasError) {
                return <ErrorIndicator />
            }

            return (
                <View {...this.props} data={data} />
            )
        }
    }
};

export default withData;