(function () {
    "use strict";
    
    angular.module('public')
    .controller('MyInfoController', MyInfoController);
    
    MyInfoController.$inject = ['isSet', 'myInfo', 'MyInfoService'];
    function MyInfoController(isSet, myInfo, MyInfoService) {
      var myInfoCtrl = this;
      myInfoCtrl.isSet = isSet;
      myInfoCtrl.myInfo = myInfo;
    }
}
)();
    