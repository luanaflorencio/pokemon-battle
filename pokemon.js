class Pokemon {
    constructor (nome,tipo,poder) {
        this.nome = nome;
        this.tipo = tipo;
        this.poder = poder;
    }
    mostrar() {
        let div = document.createElement("div")
        div.classList.add(this.nome)
        div.classList.add(this.tipo)
        div.classList.add(this.poder)
        return div
    }

    getClass() {
        return 'pokemon';
    }
}

function sorteandoPokemon() {
    let pokemon = ["Pikachu, Elétrico, 400", "Charmander, Fogo, 400", "Bulbasaur, Água 300", "Squirtle, Água, 400", "Charizard, Fogo, 500"];
    let i = Math.floor(Math.random() * (+5 - +0)) + +0;
    return pokemon[i];
}