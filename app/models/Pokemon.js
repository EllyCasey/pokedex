export class Pokemon {
    constructor(data) {
        this.name = data.name
        this.height = data.height
        this.weight = data.weight
        this.types = data.types[0].type.name
        this.img =  data.sprites.other["official-artwork"].front_default || data.sprites.front_default
        
    }


    get detailsHTMLTemp() {
        return `
        <div class="row justify-content-center">
            <div class="col-8">
                <h1 class="pokemon-name">${this.name}</h1>
                <img class="img-resize" src="${this.img}">
                <p class="fs-3 pokemon-details">Height: ${this.height}</p>
                <p class="fs-3 pokemon-details">Weight: ${this.weight}</p>
                <p class="fs-3 pokemon-details">Type: ${this.types}</p>
                <button onclick="app.SandboxPokeController.catchPokemon()">Catch</button>
            </div>
        </div>
        `
    }
}
