class Treinador {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
function mostrarTreinador(t) {
    console.log("nome - ", t.nome);
    console.log("idade - ", t.idade);
  
    if (t.nome == "Ash") {
    console.log("Ash");
  } else {
    console.log("Misty")
  }
  if(t.idade == 10){
    console.log("10");
  } 
  }
  
  t1 = new Treinador();
  t1.nome = "Misty";
  t1.idade = "10";
  
  mostrarTreinador(t1);


  console.log("Pokemon");

class Pokemon {
    constructor (nome,tipo,poder) {
        this.nome = nome;
        this.tipo = tipo;
        this.poder = poder;
    }
 }
  
 function mostrarPokemon(p) {
  console.log("nome - ", p.nome);
  console.log("tipo - ", p.tipo);
  console.log("poder - ", p.poder);


  if (p.nome == "Charmander") {
  console.log("Charmander");
} else {
  console.log("Pikachu");
}
if(p.tipo == "Fogo"){
  console.log("Fogo");
} else {
  console.log("Elétrico");
}
if(p.poder == "400") {
  console.log("400")
}
}

p1 = new Pokemon();
p1.nome = "Charmander";
p1.tipo = "Fogo";
p1.poder = "400"


mostrarPokemon(p1);