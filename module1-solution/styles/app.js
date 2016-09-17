(function(){
    //console.log('test');
    'use strict';
    var app;
    app = angular.module('lunchChecker', []);

    app.controller('lunchCheckController', ['$scope', function($scope){
        console.log($scope);
        $scope.lunches = '';
        $scope.message = '';
        $scope.check = function(){
          var lunchList;
          //console.log($scope.lunches);

          if($scope.lunches.trim() === ''){
              $scope.message = 'Please enter data first';
          }
          else{
              lunchList = $scope.lunches.trim().split(',');
              if(lunchList.length < 4){
                  $scope.message = 'Enjoy!';
              }
              else{
                  $scope.message = 'Too much!';
              }
          }
          //console.log(lunchList);
        }
    }]);
})();
