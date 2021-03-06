import React from 'react';
import withSwapiService from "../hoc-helper/with-swapi-service";
import ItemDetails, { Record } from "../item-details/item-details";

const PersonDetails = (props) => {

        return (
            <ItemDetails {...props} >

                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="Eye Color" />
                <Record field="birthYear" label="Birth Year" />

            </ItemDetails>
    )
};


const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage
    }
};


export default withSwapiService(mapMethodsToProps)(PersonDetails);