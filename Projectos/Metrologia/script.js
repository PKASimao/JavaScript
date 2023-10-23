


const key = "b72a7c391d1fe9687dfdb53d797985c8"

async function cliqueinobotao(cidade){
    
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}`).then(resposta => resposta.json())

    console.log(dados)
    
}


function cliqueinobotao(){
    const cidade = document.querySelector(".a2")

    console.log(cidade)
}
