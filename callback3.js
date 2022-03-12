function recibirPlanos(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,callback){

    setTimeout(function(){
        let planos = [n1,n2,n3,n4,n5,n6,n7,n8,n9,n10]
        let planosFiltrados = planos.filter(function(){
            return(planos >= 1 && planos <= 10)
        })
        callback(planosFiltrados)
    },2000)
}

recibirPlanos(10,5,76,34,23,54,1,23,42,4,function(planosFiltrados){

    if(planosFiltrados.length > 0){
        console.log(`Puedes irte, hay ${planosFiltrados.length} planos`)
    }
    else{
        console.log(`Devuelvase, no hay planos`)
    }
})