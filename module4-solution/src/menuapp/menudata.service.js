(function(){
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http']
function MenuDataService($http){
  var menu;
  menu = this;

  menu.getAllCategories = function(){
    // this method should return a promise
    // which is a result of using the `$http`
    // service, using the following REST API endpoint:
    // https://davids-restaurant.herokuapp.com/categories.json
    console.log('service getallcatagories');
    return $http({
      method: 'GET',
      url: 'https://davids-restaurant.herokuapp.com/categories.json'
    }).then(function successCallback(response) {
      // this callback will be called asynchronously
      // when the response is available
      //console.log(response);
      return response.data;
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      //console.log(response);
      return response;
    });
  }

  menu.getItemsForCategory = function(categoryShortName){
    // this method should return a promise which is a
    // result of using the `$http` service, using the
    // following REST API endpoint:
    // https://davids-restaurant.herokuapp.com/menu_items.json?category=,
    // where, before the call to the server, your code should append
    // whatever `categoryShortName` value was passed in as an
    // argument into the `getItemsForCategory` method.
    console.log(categoryShortName);
  }

  menu.testValue = function(){
    return "this is a test value";
  }
}
})();
