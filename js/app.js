/**
 * Created by ANDILE25 on 26/09/2016.
 */
'use strict'
/* App Module*/

angular
    .module('helloWorldApp',[
         'ngRoute',
         'helloWorldControllers'

     ])

.config(['$routeProvider','$locationProvider',
    function($routeProvider){

        $routeProvider.
            when('/',{
            templateUrl: 'main.html',
            controller:'MainCtrl'
        }).when('/show',{
            templateUrl:'show.html',
            controller: 'ShowCtrl'
        }).when('/customer',{
            templateUrl:'partials/customer.html',
            controller: 'CustomerCtrl'
        }).when('/addCustomer',{
            templateUrl:'partials/newCustomer.html',
            controller: 'AddCustomerCtrl'
        }).when('/addedCustomer/:customer/:city',{
            templateUrl:'partials/addedCustomer.html',
            controller: 'AddedCustomerCtrl'
        });

        //$locationProvider.ht5Mode(false).hashPrefix('!');
    }]);
