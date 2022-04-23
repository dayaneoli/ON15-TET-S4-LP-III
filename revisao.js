const professora = new Object()
<<<<<<< HEAD
professora.nome = "Lilit"
professora.sobrenome = "Bandeira"
professora.cidade = "São Paulo"

const aluna = {
nome: { primeiro: "Gabriela", segundo: "Lemos" },
idade: 20,
cidade: "São Paulo",
interesses: ["música", "animes"],
saudacao: () => console.log("olá meninas"),

};
console.log(professora)
=======
const lista = new Array()
professora.nome = "Lilit"
// professora.sobrenome = "Bandeira"
// professora.cidade = "São Paulo"

const aluna = {
    nome: { primeiro: "Gabriela", segundo: "Lemos" }, 
    idade: 20,
    "cidade": { nascimento: "Palmas",
              "viveu": ["São Paulo", "Salvador"]},
    interesses: ["música", "animes"],
    saudacao: () => console.log("olá meninas"),
};

console.log(aluna.nome)

// let { nome, _id } = aluna
// const/let {} = nomeDoObjeto 

// console.log(nome)

let hoje = new Date()

let dia = hoje.getDate()
let mes = hoje.getMonth()
let ano = hoje.getFullYear()

// console.log(`${dia}/${mes + 1}/${ano}`)

let objetoFormatacao = {
    weekday: "long",
    day: 'numeric',
    year: 'numeric',
    month: "long"
}

let dataFormatada = hoje.toLocaleDateString('pt-BR', objetoFormatacao)
// console.log(dataFormatada)
>>>>>>> 731794797e59109b8777d49c33e511dc7ffb0acf
