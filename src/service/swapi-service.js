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

    getPlanet(id) {
        return this.getResource(`https://swapi.dev/api/planets/${id}/`)
    }

    async getAllStarships() {
        const res = await this.getResource("https://swapi.dev/api/starships/");
        return res.results;
    }

    getStarship(id) {
        return this.getResource(`https://swapi.dev/api/starships/${id}/`)
    }
}

const swapi = new SwapiService();

swapi.getAllPeople().then((people) => {
    people.forEach((p) => {
        console.log(p.name)
    })
})