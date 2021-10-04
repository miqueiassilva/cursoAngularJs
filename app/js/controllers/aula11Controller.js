angular.module('app2',['ngRoute'])

.controller('aula11Controller',function($scope,$route,$routeParams,$location){
    $scope.$route = $route;
    $scope.$routeParams = $routeParams;
    $scope.$location = $location;
    console.log($location);
})
.controller('paginaInicialController',function($scope){
    console.log('Entrou no controle da Página Inicial!');
})

.controller('pagina1Controller',function($scope){
    console.log('Entrou no controle da Página 1!');
})

.controller('pagina2Controller',function($scope,$routeParams){
    console.log('Entrou no controle da Página 2!');
    $scope.parametros = $routeParams;
    console.log('produtos:'+$scope.parametros.idProduto);
})

.config(function($routeProvider,$locationProvider){
    
    $routeProvider
    .when('/', {
        templateUrl :'aula11PaginaInicial.html',
        controller: 'paginaInicialController'
    })
    .when('/Pagina1', {
        templateUrl :'aula11Pagina1.html',
        controller: 'pagina1Controller'
    })
    .when('/Pagina2/:idProduto', {
        templateUrl :'aula11Pagina2.html',
        controller: 'pagina2Controller'
    })
    .otherwise({
        redirectTo:'/'
    });

    $locationProvider.html5Mode(true);
});