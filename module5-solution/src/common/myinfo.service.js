(function () {
"use strict";

angular.module('common')
.service('MyInfoService', MyInfoService);

function MyInfoService() {
    var myInfo = this;

    myinfo.firstName = "";
    myinfo.lastName = "";
    myinfo.email = "";
    myinfo.phone = "";
    myinfo.favoriteDish = "";

    myinfo.isSet = function () {
        return (
            myinfo.firstName 
            && myinfo.lastName 
            && myinfo.email 
            && myinfo.phone 
            && myinfo.favoriteDish
        );
    };

    myInfo.setInfo = function (firstName, lastName, email, phone, favoriteDish) {
        myinfo.firstName = firstName;
        myinfo.lastName = lastName;
        myinfo.email = email;
        myinfo.phone = phone;
        myinfo.favoriteDish = favoriteDish;
    
    };
}


})();