// Cadastro da data do evento
let DataAtual = (05/12/2021)
let DataEvento = (12/12/2021)

if (DataAtual>DataEvento){
    console.log("Não é possivel cadastrar o evento, data inválida")
} else {
    console.log("Evento cadastrado!")
}

//Verificando a idade do participante 
let idade = (18)

if (idade >= 18){
    console.log("Cadastro Permitido!")
} else { 
    console.log("Idade mínima de 18 anos requerida!")
}

// Verificando a quantidade de participantes

var QuantidadedeParticipantes = (38)

if (QuantidadedeParticipantes < 100){
    console.log("Participante Cadastrado!")
    QuantidadedeParticipantes++
} else {
    console.log("Quantidade Máxima Atingida!")
}
