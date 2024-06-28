import { AppState } from "../AppState.js"
import { pokeService } from "../services/pokedexService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"
export class PokedexController {
    constructor() {
        console.log('Pokedex controller is loaded')
        AppState.on('pokeDudes', this.drawPokemon)

        AppState.on('activePokemon', this.drawPokemonDetails)

        this.getPokemon()
    }


    async getPokemon() {
        try {
            await pokeService.getPokemon()
        } catch (error) {
            Pop.error(error)
            console.error('FAILED TO GET POKEMON', error);
        }
    }

    async getPokeDetails(pokeIndex) {
        try {
            console.log('pokeIndex', pokeIndex);
            await pokeService.getPokeDetails(pokeIndex)
        } catch (error) {
            Pop.error(error)
            console.error('FAILED TO GET POKES', error);
            
        }
    }

    drawPokemon() {
        const pokes = AppState.pokeDudes
        let innerHTMLString = ''
        pokes.forEach((pokemon) => {
            innerHTMLString += `<button onclick="app.PokedexController.getPokeDetails('${pokemon.name}')" class="d-block btn btn-outline-danger mb-1 w-100">${pokemon.name}</button>`
        })
        setHTML('pokemonList', innerHTMLString)
    }

    drawPokemonDetails() {
        const pokemon = AppState.activePokemon

        setHTML('pokemonDetails', pokemon.detailsHTMLTemp)
    }
}