class Treinador {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    listar() {
        let div = document.createElement("div")
        div.classList.add(this.nome)
        div.classList.add(this.idade)
        
        return div
    }

    getClass() {
        return 'treinador';
    }
}

function sorteandoTreinador() {
    let treinador = ["Ash, 10", "Misty, 10", "Brock, 10", "Jessie, 20", "James, 20"];
    let i = Math.floor(Math.random() * (+5 - +0)) + +0;
    return treinador[i];


}

