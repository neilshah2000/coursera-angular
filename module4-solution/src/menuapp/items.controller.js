(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['menuItems'];
function ItemsController(menuItems){
  var menu;
  menu = this;
  menu.menuItems = menuItems;
}

})();
