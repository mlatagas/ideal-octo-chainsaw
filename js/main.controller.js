/**
 * Created by ANDILE25 on 26/09/2016.
 */
'use strict'
/*Controllers*/


angular
    .module('helloWorldApp')
    .controller('MainCtrl',MainCtrl);
    function MainCtrl ($scope) {
        $scope.message="Hello World";
    }

