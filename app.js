(function(){
  'use strict';

  angular.module('MyfirstApp',[])

  .controller('ItControls',function($scope){
    $scope.name = "Uma";
    $scope.hello = function(){
      return "Hello Karthik";
    }
  })
})()
