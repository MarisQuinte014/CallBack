//declarando la función principal
function principal(nombre,callback){

    setTimeout(function(){
        //proceso ¿Qué hace esta función?
        console.log(`Hola ${nombre}`)
        //llamo al callback
        callback()
    }, 4000);

}

//llamando la funcion principal
principal("mariana",() => {
    console.log("¿Como estas? soy el callback")
})