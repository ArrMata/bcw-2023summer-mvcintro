import { AppState } from "../AppState.js"
import { Player } from "../models/Player.js"

class PlayersService {
    addPlayer(formData) {
        AppState.players = [...AppState.players, new Player(formData.name, formData.playerImg)]
    }

    increaseScore(id) {
        let foundPlayer = AppState.players.find(player => player.id == id)
        foundPlayer.score++
    }

    decreaseScore(id) {
        let foundPlayer = AppState.players.find(player => player.id == id)
        if (foundPlayer.score > 0) {
            foundPlayer.score--
        }
    }

}

export const playersService = new PlayersService()