import { generateId } from "../utils/generateId.js";

export class Player {
    constructor(name, imageURL) {
        this.id = generateId()
        this.picture = imageURL
        this.name = name
        this.score = 0
    }

    get PlayerTemplate() {
        return /*html*/`
        <h4 class='d-flex mb-2 justify-content-between align-items-center'>
            <div>
                <img class='player-img' src='${this.picture}' alt='${this.name}'> ${this.name}
            </div>
            <div>
                <button class='small-btn' onclick="app.PlayersController.increaseScore('${this.id}')"><i class='mdi mdi-plus'></i></button> ${this.score} 
                <button class='small-btn' onclick="app.PlayersController.decreaseScore('${this.id}')"><i class='mdi mdi-minus'></i></button>
            </div>
        </h4>
        `
    }
}