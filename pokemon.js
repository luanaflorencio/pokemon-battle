class Pokemon {
    constructor (nome,tipo,poder) {
        this.nome = nome;
        this.tipo = tipo;
        this.poder = poder;
    }
    getClass() {
        return ;
    }
}

function sorteandoPokemon() {
    let pokemon = ["Pikachu", "Charmander", "Bulbasaur", "Squirtle", "Charizard"];
    let i = Math.floor(Math.random() * (+5 - +0)) + +0;
    return pokemon[i];
}