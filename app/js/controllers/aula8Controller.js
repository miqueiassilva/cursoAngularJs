app.controller('aula8Controller',function($scope){
    $scope.estados = ['DF','SP','RJ','RS','CE'];
    $scope.pessoa = novaPessoa();
    $scope.pessoas = [];

    $scope.adicionarPessoa = function(pessoa){
        $scope.pessoas.push(pessoa);
        $scope.pessoa = novaPessoa();
        $scope.frm.$setPristine();
        $scope.frm.$setUntouched();
        
    }
});

function novaPessoa(){
    return {
        nome: "",
        email:"",
        sexo: "",
        estado:""
    }
}