import { sandboxPokeService } from "../services/SandboxPokeService.js"
import { Pop } from "../utils/Pop.js"

export class SandboxPokeController {
    constructor() {
        console.log("Sandbox loaded")
    }

    async catchPokemon() {
        try {
            await sandboxPokeService.catchPokemon()
        } catch (error) {
            Pop.toast('A swing and a miss', 'error')
            console.error(error)
        }
    }
}