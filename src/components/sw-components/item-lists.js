import React from 'react';
import SwapiService from "../../service/swapi-service";
import ItemList from "../item-list/item-list";
import withData from "../hoc-helper/with-data";

const swapiService = new SwapiService();

const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = swapiService;

const withChildrenFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
};

const renderName = ({ name }) => <span>{name}</span>;

const renderNameAndModel = ({ name, model }) => <span>{name} ({model})</span>

const PersonList = withData(withChildrenFunction(ItemList, renderName),
                            getAllPeople);
const PlanetList = withData(withChildrenFunction(ItemList, renderName),
                            getAllPlanets);
const StarshipList = withData(withChildrenFunction(ItemList, renderNameAndModel),
                            getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList
};
