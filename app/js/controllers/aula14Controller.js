var appAula14 = angular.module('appAula14',[]);

appAula14.controller('aula14Controller', function($scope, $http){
    $scope.dados = [];
    $scope.apiKey = '&appid=f7ede996035861be73812b2a893b1283';
    $scope.url = "http://api.openweathermap.org/data/2.5/weather?q=";
    $scope.cidade = "";
    $scope.icone = "";
    $scope.descricaoTempo = "";


    $scope.carregaDadosArquivoBD = function(){
        $http.get("../../bd/dados.json").then(successCallback,errorCallback);    
        function successCallback(response){
            $scope.dados= response.data;            
        }
        function errorCallback(error){
            alert("Não foi possível carregar os dados. Error:"+error);
        } 
    }

    $scope.carregaPrevisaoTempoCidade = function(){
        $http.get($scope.url+$scope.cidade+$scope.apiKey+'&units=metric&lang=pt').then(successCallback,errorCallback);            
        function successCallback(response){            
            console.log(response.data);
            $scope.icone = response.data.weather[0].icon+'.png';
            $scope.descricaoTempo = response.data.weather[0].description;
            
        }
        function errorCallback(error){
            alert("Não foi possível carregar os dados.URL:"+$scope.url+$scope.cidade+$scope.apiKey+" Error:"+error);
        } 
    }
    
    /*$http({
        method:'get',
        url:'../../bd/dados.json'
    }).then(function(data){
        console.log(data);
    }),function(error){
        alert("Não foi possivel carregar os dados! Erro: "+error);
    }*/
});
