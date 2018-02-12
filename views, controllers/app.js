app = angular.module('app', []);

app.controller('myCtrl',['$scope', function($scope){
    $scope.greetings = "Hello World!";
    $scope.items = [1,2,3,4,5];
    $scope.value = 0;

    $scope.timesClicked = function(){
        $scope.value++;
        $scope.even = $scope.value%2==0;        
    }
}])
