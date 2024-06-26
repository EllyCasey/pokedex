export class Pokemon {
    constructor(data) {
        this.name = data.name
        this.height = data.height
        this.weight = data.weight
        this.type = data.type
    }

    get detailsHTMLTemp() {
        return `
        <div>
            <h1>Pokemon Name</h1>
            <p class="fs-3">Height:</p>
            <p class="fs-3">Weight:</p>
            <p class="fs-3">Type:</p>
        </div>
        `
    }
}
