angular.module("myApp").controller("empPersonalCtrl", function($scope,$rootScope,$http) {
  $scope.obj=$rootScope.obj["EnggPersonalData"].sheetData;

});
