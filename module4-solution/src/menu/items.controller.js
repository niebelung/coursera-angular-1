(function () {
    angular.module('MenuApp')
    .controller('ItemListController', ItemListController);
    
    ItemListController.$inject = ['$stateParams', 'MenuDataService', 'items', 'category'];
    function ItemListController($stateParams, MenuDataService, items, category) {
      var itemList = this;
      itemList.items = items;
      itemList.category = category;
      // console.log(categoriesList.items)
    }
    
    })();