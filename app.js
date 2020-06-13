(function() {
  'use strict';

angular.module('LunchCheck', [])
  .controller('lunchBoxController', lunchBoxController);

  lunchBoxController.$inject=['$scope'];

  function lunchBoxController ($scope) {
    $scope.input = "";
    $scope.message = "";
    $scope.check = function () {
      var item =$scope.input.split(",");

      if (item.length > 1 && item.length <=3) {
        $scope.message = "Enjoy!";
      }
      else if (item.length > 3) {

        $scope.message = "Too much!";
      }
      else {
        $scope.message = "please enter data first";
      }

  };

};

})();
