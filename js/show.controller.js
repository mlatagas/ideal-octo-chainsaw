/**
 * Created by ANDILE25 on 27/09/2016.
 */

angular
    .module('helloWorldApp')
    .controller('ShowCtrl',ShowCtrl);
function ShowCtrl ($scope) {
    $scope.message="Show World";
}