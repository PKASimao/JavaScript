//Eventos keydown

document.addEventListener("keydown", function(Event){
  

    if(Event.key === "Enter"){
        console.log("apertou no enter")
    }

})

//Eventos keyup

document.addEventListener("keyup", function(Event){
    

    if(Event.key === "Enter"){
        console.log("soltou no enter")
    }

})