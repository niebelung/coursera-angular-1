(function () {
    "use strict";
    
    angular.module('public')
    .controller('MyInfoController', MyInfoController);
    
    MyInfoController.$inject = ['isSet', 'myInfo', 'menuItem', 'MyInfoService', 'MenuService'];
    function MyInfoController(isSet, myInfo, menuItem, MyInfoService, MenuService) {
      var myInfoCtrl = this;
      myInfoCtrl.isSet = isSet;
      myInfoCtrl.myInfo = myInfo;
      myInfoCtrl.menuItem = menuItem;
    }
}
)();
    