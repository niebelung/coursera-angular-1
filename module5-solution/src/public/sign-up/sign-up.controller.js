(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignUpController', SignUpController);
    
    SignUpController.$inject = ['MyInfoService', 'MenuService'];
    function SignUpController(MyInfoService, MenuService) {
      var signUpCtrl = this;

      signUpCtrl.info = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        favoriteDish: ""
      }

      signUpCtrl.saved = false;

      signUpCtrl.submit = function() {
          MyInfoService.setInfo(
            signUpCtrl.info.firstName, 
            signUpCtrl.info.lastName, 
            signUpCtrl.info.email, 
            signUpCtrl.info.phone, 
            signUpCtrl.info.favoriteDish);
          signUpCtrl.saved = true;
      };

      signUpCtrl.validateFavoriteDishInput = function () {

        MenuService.getMenuItem(signUpCtrl.info.favoriteDish).then(function(response){
            signUpCtrl.regForm.favoriteDish.$setValidity('isOnMenu', true);
          }
        )
        .catch(function(error) {
          signUpCtrl.regForm.favoriteDish.$setValidity('isOnMenu', false);
        })
      };
    }
    
})();
    