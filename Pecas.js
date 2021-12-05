var ListadePecas = ["Amortecedor","Motor","Filtro de Ar"]
// Se a peça possiur um peso superior a 100 gramas, pode cadastrar 
let peso = 50;
if (peso < 100){
    console.log("A peça deve pesar no mínimo 100g")
} else {
    console.log("A peça possui peso adequado")
}

// Dada a capacidade de cada caixa, caso a lista de peças seja superior a 10, imprima a mensagem informando nao ter capacidade suficiente.

if (ListadePecas.lenght < 10){
// É possível cadastar 
    console.log("É possível cadastrar")
} else {
    console.log("Não tem mais espaço na lista")
}

// Caso a peça tenha um nome com a quantidde inferior a 3 caracteres, informe a mensagem de erro.

let NomePeca = "Disco de Freio"
if (NomePeca.lenght > 3){
    console.log("Nome da peça esta adequado para o cadastro!")
} else if (NomePeca.lenght == 0){
    console.log("O nome da peça não pode ser vazio")
} else {
    console.log("O nome deve ter mais de 3 caracteres, digite um nome adequado")
}