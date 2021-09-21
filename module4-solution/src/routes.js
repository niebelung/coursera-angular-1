(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menu/templates/home.template.html'
  })

  .state('categoriesList', {
    url: '/categories-list',
    templateUrl: 'src/menu/templates/categories-main.template.html',
    controller: 'CategoriesListController as categoriesList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })
  .state('itemList', {
    url: '/item-list/{categoryName}',
    templateUrl: 'src/menu/templates/items-main.template.html',
    controller: 'ItemListController as itemList',
    resolve: {
      items: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.categoryName);
      }],
      category: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
        return MenuDataService.getAllCategories().then( function (categories) {
          return categories.find(element => element.short_name === $stateParams.categoryName).name;
        });
      }]
    }
  });
}

})();
