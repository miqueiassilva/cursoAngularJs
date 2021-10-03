app.controller('aula7Controller',function($scope){
    $scope.nomes = ['miqueias','emanuel','isac','thatiane','juliana','jose','maria'];
    
    $scope.pessoas = [];
    $scope.pessoas.push({nome:'Jorge',idade:13});
    $scope.pessoas.push({nome:'Miqueias',idade:26});
    $scope.pessoas.push({nome:'thatiane',idade:24});    

    $scope.adicionaPessoa = function(){
        var nome = document.getElementById('nomePessoa');
        var idade = document.getElementById('idadePessoa');

        $scope.pessoas.push({nome:nome.value, idade:idade.value});
        
        nome.value = "";
        idade.value = "";
    }
});