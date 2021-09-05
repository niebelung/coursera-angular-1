(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService) {
  var toBuyList = this;

  toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

  toBuyList.moveToAlreadyBoughtList = function(index) {
    ShoppingListCheckOffService.moveToAlreadyBoughtList(index);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBoughtList = this;
  alreadyBoughtList.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
}


function ShoppingListCheckOffService() {
  var service = this;

  var toBuyitems = [
    {
      name:  "Cookies",
      quantity: 10
    },
    {
      name:  "Chips",
      quantity: 5
    },
    {
      name:  "Candies",
      quantity: 100
    },
    {
      name:  "Muffins",
      quantity: 42
    },
    {
      name:  "Croissants",
      quantity: 2
    }
  ];

  var alreadyBoughtItems = [];

  service.moveToAlreadyBoughtList = function(itemIndex) {
    alreadyBoughtItems.push(toBuyitems.splice(itemIndex, 1)[0]);
  };

  service.getToBuyItems = function () {
    return toBuyitems;
  };

  service.getAlreadyBoughtItems = function () {
    return alreadyBoughtItems;
  };
}

})();
