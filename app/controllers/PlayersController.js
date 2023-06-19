import { AppState } from "../AppState.js"
import { playersService } from "../services/PlayersService.js"
import { getFormData } from "../utils/FormHandler.js"
import { setHTML } from "../utils/Writer.js"

function _draw() {
    let playerTemplate = ''
    let sortedPlayers = AppState.players.sort((playerA, playerB) => playerB.score - playerA.score)

    sortedPlayers.forEach(player => {
        playerTemplate += player.PlayerTemplate
    })

    setHTML('players-list', playerTemplate)
}

export class PlayersController {
    constructor() {
        console.log('playersController loaded')
    }

    addPlayer(event) {
        event.preventDefault()
        const formData = getFormData(event.target)
        playersService.addPlayer(formData)
        _draw()
        event.target.reset()
    }

    increaseScore(id) {
        playersService.increaseScore(id)
        _draw()
    }

    decreaseScore(id) {
        playersService.decreaseScore(id)
        _draw()
    }
}