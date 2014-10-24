'use strict';

/**
 * @ngdoc overview
 * @name packetviewApp
 * @description
 * # packetviewApp
 *
 * Main module of the application.
 */
angular
  .module('packetviewApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/packet', {
        templateUrl: 'views/packet.html',
        controller: 'PacketCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
