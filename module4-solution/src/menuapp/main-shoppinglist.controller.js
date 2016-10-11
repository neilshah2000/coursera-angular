(function () {
'use strict';

angular.module('MenuApp')
.controller('MainShoppingListController', MainShoppingListController);


// MainShoppingListController.$inject = ['ShoppingListService'];
// function MainShoppingListController(ShoppingListService) {
MainShoppingListController.$inject = ['items'];
function MainShoppingListController(items) {
  console.log('shpping list controller');
  var mainList = this;
  //mainList.items = items;

  // mainList.$onInit = function () {
  //   ShoppingListService.getItems()
  //   .then(function (result) {
  //     mainList.items = result;
  //   });
  // };
}

})();
