(function(){
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', narrowController)
  .service('MenuSearchService', searchService)
  .directive('foundItems', foundItemsFunc);

  function foundItemsFunc() {
    var ddo = {
      templateUrl: 'foundItems.html',
      restrict: 'E',
      scope: {
        foundItems: '<',
        scopeTest: '<',
        onRemove: '&',
        emptyResult: '<'
      }
    };

    return ddo;
  }

  narrowController.$inject = ['MenuSearchService'];
  function narrowController(MenuSearchService){
    var narrow;

    narrow = this;

    narrow.searchTerm;

    narrow.searchClicked = function(){
      var promise;

      narrow.empty = false;
      narrow.found = [];
      promise = MenuSearchService.getMatchedMenuItems(narrow.searchTerm);

      promise.then(function (response) {
        if(response.length < 1){
          narrow.empty = true;
        }
        narrow.found = response;
      })
      .catch(function (error) {
        console.log("Something went terribly wrong.");
      });
    }

    narrow.removeSearchItem = function(index){
      var removed = narrow.found.splice(index,1);
    }
  }

  searchService.$inject = ['$http']
  function searchService($http){
    var service, endPoint, request;

    service = this;

    endPoint = 'https://davids-restaurant.herokuapp.com/menu_items.json';
    request = {
      method: 'GET',
      url: endPoint
    }

    service.getMatchedMenuItems = function(searchTerm){
      return $http(request).then(function (result) {
          // process result and only keep items that match
          var foundItems, i;

          foundItems = result.data.menu_items;

          function searchFilter(value){
            return value.description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
          }

          if(searchTerm === undefined){
            foundItems = []
          }
          else{
            foundItems = foundItems.filter(searchFilter);
          }

          return foundItems;
      });
    }
  }

})();
