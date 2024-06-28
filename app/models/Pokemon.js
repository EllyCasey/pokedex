export class Pokemon {
    constructor(data) {
        this.name = data.name
        this.height = data.height
        this.weight = data.weight
        this.types = data.types[0].type.name
        this.img = data.img || data.sprites.front_default
    }

    get detailsHTMLTemp() {
        return `
        <div>
            <h1>${this.name}</h1>
            <img src="${this.img}">
            <p class="fs-3">Height: ${this.height}</p>
            <p class="fs-3">Weight: ${this.weight}</p>
            <p class="fs-3">Type: ${this.types}</p>
            <button onclick="app.SandboxPokeController.catchPokemon()">Catch</button>
        </div>
        `
    }
}
