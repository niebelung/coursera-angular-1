(function () {
    'use strict';
    
    angular.module('data')
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
    .service('MenuDataService', MenuDataService);
    
    MenuDataService.$inject = ['$http', 'ApiBasePath' ]
    function MenuDataService($http, ApiBasePath) {
      var service = this;

      searcher.getAllCategories = function () {
        return $http({
            method: "GET",
            url: (ApiBasePath + "/categories.json")
          }).then(function (response) {
            var items = [];
            response.data.categories.forEach(element => {
              items.push(element);
            });
            return items;
          });
        };
    }
    
    })();
    