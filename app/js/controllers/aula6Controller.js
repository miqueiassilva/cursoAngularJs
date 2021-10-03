app.controller('aula6Controller',function($scope){
    $scope.nome = "Curso AngularJS Controle";

    $scope.olaMundo = function(nome){
        alert('Olá '+nome+'!');
    };
});