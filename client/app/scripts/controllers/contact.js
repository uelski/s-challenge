'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ContactCtrl', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {


  	$scope.mobileContact = $rootScope.contactSelected;

  	$scope.backToContacts = function() {
  		$location.path('/');
  	};

  }]);
