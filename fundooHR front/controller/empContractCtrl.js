angular.module("myApp").controller("empContractCtrl", function($scope,$http) {
  $http.get("http://localhost:3023/firebase/fundoohr").success(function(data, status) {
  console.log(data);
    $scope.obj=data;
  })
})
