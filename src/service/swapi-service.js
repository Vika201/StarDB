export default class SwapiService  {

    async getResource(url) {
        const res = await fetch(url);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    };

    async getAllPeople() {
        const res = await this.getResource("https://swapi.dev/api/people/");
        return res.results;
    }


    getPerson(id) {
        return this.getResource(`https://swapi.dev/api/people/${id}/`)
    }

    async getAllPlanets() {
        const res = await this.getResource("https://swapi.dev/api/planets/");
        return res.results;
    }

    async getPlanet(id) {
        const planet = await this.getResource(`https://swapi.dev/api/planets/${id}/`);
        return this._transformPlanet(planet);
    }

    async getAllStarships() {
        const res = await this.getResource("https://swapi.dev/api/starships/");
        return res.results.map(this._transformPlanet);
    }

    getStarship(id) {
        return this.getResource(`https://swapi.dev/api/starships/${id}/`)
    }

    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    _transformPlanet(planet) {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }
}
