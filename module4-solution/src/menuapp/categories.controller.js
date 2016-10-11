(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

// CategoriesController.$inject = ['MenuDataService'];
// function CategoriesController(MenuDataService){
CategoriesController.$inject = ['items'];
function CategoriesController(items){
  var categories;
  categories = this;
  categories.items = items;
  console.log('in controller');
  // console.log(MenuDataService.testValue());

  // console.log(items);

  // categories.items = items;

  // categories.$onInit = function () {
  //   MenuDataService.getAllCategories()
  //   .then(function (result) {
  //     console.log(result);
  //     categories.items = result;
  //   });
  // };

  categories.categoryClicked = function(index){
    console.log('index clicked: ', index);
    console.log(categories.items[index].short_name);
    // call https://davids-restaurant.herokuapp.com/menu_items.json?category=C
  }
}

})();
