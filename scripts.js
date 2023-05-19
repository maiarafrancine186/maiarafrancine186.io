

const key = "3f9cc8f66723973328ea4ec804c699ac"


    function DadosDaTela(dados){
        console.log(dados)
       document.querySelector(".cidade").innerHTML= "Tempo em " + dados.name
       document.querySelector(".temp").innerHTML= Math.floor(dados.main.temp)+ "°C"
       document.querySelector(".texto-previsao").innerHTML= dados.weather[0].description
       document.querySelector(".umidade").innerHTML= dados.main.humidity + "% Humidade"
       document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`



    }

 async function buscarInformacao(cidade){

    const dados = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric `).then(resposta => resposta.json())
    
    DadosDaTela(dados)

}

function clikeiNoBotao () {
     const cidade = document.querySelector(".input-cidade").value

     buscarInformacao(cidade)
}