'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .directive('contactCardMobile', [function() {
    return {
      restrict: 'E',
      scope: {
        
      },
      templateUrl: 'views/directive-contact-card-mobile.html'
    };
  }])
  .directive('contactCardDesktop', [function() {
    return {
      restrict: 'E',
      scope: {
        contact: '=',
        selectContact: '&'
      },
      templateUrl: 'views/directive-contact-card-desktop.html'
    };
  }])
  .directive('selectedUser', [function() {
    return {
      restrict: 'E',
      scope: {
        contact: '='
      },
      templateUrl: 'views/directive-selected-user.html'
    };
  }]);
