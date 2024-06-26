import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { pokedexApi } from "./AxiosService.js";

class pokedexService {
    async getPokeDetails(pokeIndex) {
        const response = await pokedexApi.get(`${pokeIndex}`)
        console.log ('👉', response.data);

        const newPokemon = new Pokemon(response.data)

        AppState.activePokemon = newPokemon
    }
    async getPokemon() {
        const response = await pokedexApi.get('')
        console.log('👉', response.data);

        AppState.pokeDudes = response.data.results
    }
}


export const pokeService = new pokedexService()