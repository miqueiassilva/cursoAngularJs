app.filter('retornaoi',function(){
    return function(nome){
        return "olá "+nome;
    }
})