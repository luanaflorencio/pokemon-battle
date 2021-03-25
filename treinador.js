class Treinador {
    constructor(nome, idade, poke1, poke2, poke3) {
        this.nome = nome;
        this.idade = idade;
        this.poke1 = poke1;
        this.poke2 = poke2;
        this.poke3 = poke3;
    }
    getClass() {
        return ;
    }
}

function sorteandoTreinador() {
    let treinador = ["Ash", "Misty", "Brock", "Jessie", "James"];
    let i = Math.floor(Math.random() * (+5 - +0)) + +0;
    return treinador[i];


}

