function aula10Controller ($scope,retornaoiFilter,$filter){
    $scope.pessoa = {
        nome: "DevMidia",
        idade: 31
    };
    console.log(retornaoiFilter('Miqueias'));
    console.log($filter('retornaoi')('Jorge'));
}
app.controller('aula10Controller',aula10Controller);