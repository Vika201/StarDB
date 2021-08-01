import React from 'react';
import SwapiService from "../../service/swapi-service";
import ItemDetails, {Record} from "../item-details/item-details";

const swapiService = new SwapiService();

const { getPerson,
        getPlanet,
        getStarship,
        getPersonImage,
        getPlanetImage,
        getStarshipImage } = swapiService;

const PersonDetails = ({ itemId }) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData={getPerson}
            getImageUrl={getPersonImage}>

            <Record field="gemder" label="Gender" />
            <Record field="eyeColor" label="Eye Color" />
            <Record field="birthYear" label="Birth Year" />

        </ItemDetails>
    )
};

const PlanetDetails = ({ itemId }) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData={getPlanet}
            getImageUrl={getPlanetImage}>

            <Record field="population" label="Population" />
            <Record field="rotationPeriod" label="Rotation Period" />
            <Record field="diameter" label="Diameter" />

        </ItemDetails>
    )
};

const StarshipDetails = ({ itemId }) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData={getStarship}
            getImageUrl={getStarshipImage}>

            <Record field="model" label="Model" />
            <Record field="costInCredits" label="Cost" />
            <Record field="length" label="Length" />

        </ItemDetails>
    )
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};