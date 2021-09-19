(function () {
    'use strict';
    
    angular.module('NarrowItDownApp', [])
    .controller("NarrowItDownController", NarrowItDownController)
    .service("MenuSearchService", MenuSearchService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
    .directive('foundItems', FoundItemsDirective);
    
    function FoundItemsDirective() {
      var ddo = {
        templateUrl: 'founditemlist.html',
        scope: {
          items: '<',
          onRemove: '&'
        },
        controller: FoundItemsDirectiveController,
        controllerAs: 'list',
        bindToController: true
      };
      return ddo;
    }

    function FoundItemsDirectiveController() {
      var list = this;
    }
      
      
    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
      var narrower = this;
      narrower.found = [];
      narrower.searchTerm = "";
      narrower.errorMessage = "";

      narrower.getNarrowedItemList = function () {

        if (narrower.searchTerm.length !== 0) {
          MenuSearchService.getMatchedMenuItems(narrower.searchTerm).then(
              function(result) {
                narrower.found = result;
                if (narrower.found.length === 0)  {
                    narrower.errorMessage = "Nothing found!";
                } else {
                    narrower.errorMessage = "";
                }
              }
          );
        } else {
            narrower.errorMessage = "Nothing found!";
        }
      };

      narrower.removeItem = function (index) {
        narrower.found.splice(index, 1);
      };

    }
    
    MenuSearchService.$inject = ['$http', 'ApiBasePath', '$filter'];
    function MenuSearchService($http, ApiBasePath, $filter) {
      var searcher = this;

      searcher.getMatchedMenuItems = function (searchTerm) {
        return $http({
            method: "GET",
            url: (ApiBasePath + "/menu_items.json")
          }).then(function (response) {
            var items = [];
            for (let i = 0; i < response.data.menu_items.length; i++) {
              var item = response.data.menu_items[i];  
              if ($filter('lowercase')(item.description).indexOf(
                  $filter('lowercase')(searchTerm)) !== -1) {
                items.push(item);
              }
            }
            return items;
          });
        };
    }
    
    })();
    