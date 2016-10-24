angular.module("myApp").controller("empProfileCtrl", function($scope,$rootScope,$http) {
  // $http.get("http://localhost:3023/firebase/fundoohr").success(function(data, status) {
  // console.log(data);
  //   $scope.obj=data;
  // })
  $scope.obj=$rootScope.obj["EnggProfile"].sheetData;

});
