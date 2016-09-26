(function(){
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyShoppingController', buyController)
  .controller('AlreadyBoughtShoppingController', boughtController)
  .service('ShoppingListCheckOffService', checkService);

  buyController.$inject = ['ShoppingListCheckOffService'];
  function buyController(ShoppingListCheckOffService){
    var buy;

    buy = this;

    buy.itemsToBuy = ShoppingListCheckOffService.toBuyItems();

    buy.buyItem = function(index){
      ShoppingListCheckOffService.buyItem(index);
    }
  }

  boughtController.$inject = ['ShoppingListCheckOffService'];
  function boughtController(ShoppingListCheckOffService){
    var bought;

    bought = this;

    bought.itemsBought = ShoppingListCheckOffService.boughtItems();
  }

  function checkService(){
    var toBuy, bought, service;

    service = this;

    toBuy = [
      { name: 'cookies', quantity: 10 },
      { name: 'rice', quantity: 3 },
      { name: 'spices', quantity: 100 },
      { name: 'popodoms', quantity: 8 },
      { name: 'chapatis', quantity: 15 }
    ];

    bought = [];

    service.toBuyItems = function(){
      return toBuy;
    }

    service.boughtItems = function(){
      return bought;
    }

    service.buyItem = function(itemIndex){
      bought.push(toBuy[itemIndex]);
      toBuy.splice(itemIndex, 1);
      console.log(bought);
    }
  }

})();
