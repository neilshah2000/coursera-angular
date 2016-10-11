(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['catItems'];
function CategoriesController(catItems){
  var categories;
  categories = this;
  categories.items = catItems;
}

})();
