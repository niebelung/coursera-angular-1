(function () {
angular.module('MenuApp')
.controller('CategoriesListController');

CategoriesListController.$inject = ['MenuDataService', 'items'];
function CategoriesListController(MenuDataService, items) {
  var categoriesList = this;
  categoriesList.items = items;
}

})();