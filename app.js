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
      if (item.length < 4) {
        $scope.message = "Enjoy!";
      }
      else {
        $scope.message = "Too much!";
      }

  };

};

})();
