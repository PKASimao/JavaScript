//1
console.log("ola mundo")

const a = "ola mundo"
console.log(a)

//2
const aa = "1234";
const b = Number(aa);
console.log(typeof b);

//3

const aaa = "Javascript e incrivel"
console.log(aaa.length + "carateres")
console.log(aaa.split(" ").length + "palavra")

4//

function converter(horario){
    const hora = horario.split(":")[0];
    const minuto = horario.split(":")[1];
    
    const hora12 = hora % 12 || 12;
    
    let perido = "AM"

    if(hora>12){
        perido = "PM"
    }

    console.log(hora12 + ":" + minuto + " " + perido)

}
converter("15:16")

const frutas = ["banana", "morango"]

frutas.unshift("uva")

console.log(frutas)

const numer = [1,2,3,4,5,6]

const numPar = numer.find((numer) => numer % 2 === 0)

console.log(numPar)

const numPars = numer.filter((numer) => numer % 2 === 0)
console.log(numPars)

// async await

async function obterValor(){

    const promessa = new Promise((resolver, reject) => {
        setTimeout(() => resolver("valor obtido"), 2000)
    })

    const valor = await promessa 

    console.log(valor)

}
obterValor()

async function obterValorErro(){

    try{
        const promessa = new Promise((resolve, reject) => {
        setTimeout(() => reject("valor com erro"), 2000)
        })

        const valor = await promessa 

        console.log(valor)
    }catch(error){
    console.log(error)
    }

}
obterValorErro()


//JSON

const objeto = {nome: "Joao", idade: "25"}

const jsonstring = JSON.stringify(objeto)
console.log(jsonstring)
console.log(typeof jsonstring)

// Exercicio Avancado

//1

const listaDecompra = []

listaDecompra.push("arros", "feijao", "manteiga", "peixe", "carde")
listaDecompra.shift()
console.log(listaDecompra)

//2

const matriz = [3,7,14,21,29,36,42]

const divizor = matriz.find((matriz) => matriz > 10 && matriz % 7 === 0)

console.log(divizor)


//3

const matriz1 = [3,7,14,21,29,36,42]
const filtrados = matriz1.filter((matriz1) => matriz1>20)
console.log(filtrados)

//4

const frase = "Bom dia Angola"

const palavra = frase.trim().split(" ")
console.log(palavra)

//4

const frase2 = "O rato roeu a roupa do rei da Russia"

const cemecaCom = frase2.startsWith("O")
const terminaCom = frase2.endsWith("Roma")

console.log(cemecaCom)
console.log(terminaCom)








