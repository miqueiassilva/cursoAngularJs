var appAula13 = angular.module('appAula13',[]);

function aula13Controller ($scope){
    
}
appAula13.controller('aula13Controller',aula13Controller);

appAula13.directive('ngOla',function(){
    return{
        restrict : 'AEC',
        scope:{
            ngNome:"@"
        },
        template : '<h1>olá {{ngNome}} </h1>',
        controller: ['$scope',function($scope){
            $scope.digaOla = function(nome){
                alert('olá '+nome);
            }
        }],
        link: function($scope,iElement,iAttrs){
            $scope.digaOla(iAttrs.ngNome);
        }
    }
});