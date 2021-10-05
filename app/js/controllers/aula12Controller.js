var appAula12 = angular.module('appAula12',['ngSanitize']);

function aula12Controller ($scope){
    $scope.mostrar = true;
    $scope.variavelHtml = "<h1>Seja Bem vindo a aula 12!</h1>";
    $scope.minhaClass = "";
    $scope.variavelCloak = "texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto";
    $scope.minhaFoto = "foto1.jpg";
}
appAula12.controller('aula12Controller',aula12Controller);