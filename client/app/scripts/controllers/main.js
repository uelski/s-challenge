'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')  
  .controller('MainCtrl', ['$http', '$scope', '$location', '$rootScope', function ($http, $scope, $location, $rootScope) {
    var req = $http.get('/api/contacts');
    req.then(function (res) {
      $scope.contacts = res.data.contacts;
      if ($rootScope.contactSelected === undefined) {
        $scope.contact = $scope.contacts[0];
        $rootScope.selectedIndex = 0;
      } else {
        $scope.contact = $rootScope.contactSelected;
      }
      
    });
    req.catch(function (err) {
      console.log(err);
    });

    $scope.selectContact = function(obj) {
      var index = obj.index;
      $scope.contact = $scope.contacts[index];
      $rootScope.selectedIndex = index;
    };

    $scope.showContact = function(obj) {
      var index = obj.index;
      $scope.contact = $scope.contacts[index];
      $rootScope.contactSelected = $scope.contacts[index];
      $rootScope.selectedIndex = index;
      $location.path('/contact');
    };


  }]);
