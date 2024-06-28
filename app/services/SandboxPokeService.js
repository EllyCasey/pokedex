import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"

class SandboxPokeService {
    async catchPokemon() {
        console.log(AppState.activePokemon)
        const response = await api.post('api/pokemon', AppState.activePokemon)
        
    }
    
}

export const sandboxPokeService = new SandboxPokeService()