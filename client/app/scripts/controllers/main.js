'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')  
  .controller('MainCtrl', ['$http', '$scope', function ($http, $scope) {
    var req = $http.get('/api/contacts');
    // var scope = this;

    req.then(function (res) {
      $scope.contacts = res.data.contacts;
      $scope.contact = $scope.contacts[0];
      $scope.selectedIndex = 0;
    });
    req.catch(function (err) {
      console.log(err);
    });

    $scope.selectContact = function(obj) {
      var index = obj.index;
      $scope.contact = $scope.contacts[index];
      $scope.selectedIndex = index;
    };

  }]);
