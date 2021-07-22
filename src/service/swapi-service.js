export default class SwapiService  {

    getResource = async(url) => {
        const res = await fetch(url);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    };

    getAllPeople = async() => {
        const res = await this.getResource("https://swapi.dev/api/people/");
        return res.results.map(this._transformPerson);
    };


    getPerson = async(id) => {
        const person = await this.getResource(`https://swapi.dev/api/people/${id}/`);
        return this._transformPerson(person);
    };

    getAllPlanets = async() => {
        const res = await this.getResource("https://swapi.dev/api/planets/");
        return res.results.map(this._transformPlanet);
    };

    getPlanet = async(id) => {
        const planet = await this.getResource(`https://swapi.dev/api/planets/${id}/`);
        return this._transformPlanet(planet);
    };

    getAllStarships = async() => {
        const res = await this.getResource("https://swapi.dev/api/starships/");
        return res.results.map(this._transformStarship);
    };

    getStarship = async(id) => {
        const starship = await this.getResource(`https://swapi.dev/api/starships/${id}/`);
        return this._transformStarship(starship);
    };

    getPersonImage = ({ id }) => {
        return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
    };

    getPlanetImage = ({ id }) => {
        return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
    };

    getStarshipImage = ({ id }) => {
        return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
    };

    _extractId =(item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    };

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    };

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapaciti: starship.cargo_capaciti
        }
    };

    _transformPerson = (person) => {
        return{
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    };
}
