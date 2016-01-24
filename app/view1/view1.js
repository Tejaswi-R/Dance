'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'FirstCtrl as first'
  });
}])
.controller('FirstCtrl', function($scope, sharedProperties) {
    $scope.searchKeys = sharedProperties.getObject();
});
