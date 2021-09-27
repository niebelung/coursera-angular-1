(function () {
"use strict";

angular.module('common')
.service('MyInfoService', MyInfoService);

function MyInfoService() {
    var myinfo = this;

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

    myinfo.setInfo = function (firstName, lastName, email, phone, favoriteDish) {
        myinfo.firstName = firstName;
        myinfo.lastName = lastName;
        myinfo.email = email;
        myinfo.phone = phone;
        myinfo.favoriteDish = favoriteDish;
    };

    myinfo.getInfo = function() {
        return {
            firstName: myinfo.firstName,
            lastName: myinfo.lastName,
            email: myinfo.email,
            phone: myinfo.phone,
            favoriteDish: myinfo.favoriteDish
        }
    }
}


})();