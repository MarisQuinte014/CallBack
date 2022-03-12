function iniciar(){
    console.log("estoy iniciando")
}

function procesar(){
    setTimeout(function(){
        console.log("estoy procesando")
    },5000)
}

function finalizar(){
    console.log("estoy finalizando")
}

iniciar()
procesar()
finalizar()