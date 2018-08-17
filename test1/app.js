var app = angular.module('LunchCheck', []);
app.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
    $scope.firstname = "Uma";

    $scope.checkFood = function(checkFood){
      $scope.foodItem = checkFood;
      var myFood = $scope.foodItem;
      if(!myFood){
        $scope.msg = "Please enter data first";
      }
      else{
        $scope.numOfitems = myFood.split(",");
        $scope.total = $scope.numOfitems.length;
        if($scope.total < 4){
          $scope.msg = "Enjoy!";
        }
        else{
          $scope.msg = "Too much!";
        }
      }
  };
};
