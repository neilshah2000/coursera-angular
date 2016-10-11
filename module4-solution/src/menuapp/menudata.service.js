(function(){
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http']
function MenuDataService($http){
  var menu;
  menu = this;

  menu.getAllCategories = function(){
    return $http({
      method: 'GET',
      url: 'https://davids-restaurant.herokuapp.com/categories.json'
    }).then(function successCallback(response) {
      menu.categories = response.data;
      return menu.categories;
    }, function errorCallback(response) {
      return response;
    });
  }

  menu.getItemsForCategory = function(shortName){
    var catURL;
    catURL = 'https://davids-restaurant.herokuapp.com/menu_items.json?category=' + shortName;
    return $http({
      method: 'GET',
      url: catURL
    }).then(function successCallback(response) {
      menu.menuItems = response.data.menu_items;
      return menu.menuItems;
    }, function errorCallback(response) {
      return response;
    });
  }

  menu.testValue = function(){
    return "this is a test value";
  }
}
})();
