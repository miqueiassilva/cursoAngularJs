app.controller('aula9Controller1',['$scope','operacoes','Pessoa',function($scope,operacoes,Pessoa){
    console.log('Entrou no controler 1 da Aula 9. Somar');
    console.log('Soma:'+operacoes.somar(1,1));
    $scope.pessoa = new Pessoa();
}]);

app.controller('aula9Controller2',['$scope','operacoes',function($scope,operacoes){
    console.log('Entrou no controler 2 da Aula 9. Subtrair');
    console.log('Subtrair:'+operacoes.subtrair(2,1));
}]);