(function () {
    'use strict';
    
    angular.module('data')
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
    .service('MenuDataService', MenuDataService);
    
    MenuDataService.$inject = ['$http', 'ApiBasePath' ]
    function MenuDataService($http, ApiBasePath) {
      var dataservice = this;

      dataservice.getAllCategories = function () {
        return $http({
            method: "GET",
            url: (ApiBasePath + "/categories.json")
          }).then(function (response) {
            var items = [];
            // console.log(response.data)
            response.data.forEach(element => {
              // console.log(element)
              items.push(element);
            });
            return items;
          });
        };

      dataservice.getItemsForCategory = function (categoryShortName) {
        return $http({
          method: "GET",
          url: (ApiBasePath + "/menu_items.json"),
          params: {
            category: categoryShortName
          }
        }).then(function (response) {
          var items = [];
          // console.log(response.data)
          response.data.menu_items.forEach(element => {
            // console.log(element)
            items.push(element);
          });
          return items;
        });

      };
    }
    
    })();
    