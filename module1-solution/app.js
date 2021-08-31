(function () {
'use strict';

angular.module('LunchChecker', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.dishes = "";
  $scope.message = "";

  $scope.displayMessage = function() {
    if ($scope.dishes === "") {
      $scope.message = "Please enter data first";
      return;
    }

    var dishesSplit = $scope.dishes.split(',');

    if (dishesSplit.length > 3) {
      $scope.message = "Too much!";
      return;
    }

    $scope.message = "Enjoy!";
  };

}


})();
