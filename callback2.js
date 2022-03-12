//declaro la funcion principal
function crearUsuario(nombre,edad,callback){

    setTimeout(function(){
        let usuario = {
            nombreUsuario:nombre,
            edadUsuario:edad
        }
        //llamando al callback y llevandole el objeto
        callback(usuario)
        
    },2000);

}

crearUsuario("mariana",30,function(usuario){

    if(usuario.edadUsuario >= 18){
        console.log("bienvenido")
    }
    else{
        console.log("no puede pasar")
    }

})