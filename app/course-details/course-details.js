'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/course-details', {
    templateUrl: 'course-details/course-details.html',
    controller: 'course-detailsCtrl as course-details'
  });
}])

.controller('course-detailsCtrl', function($scope, sharedProperties) {
    $scope.course = sharedProperties.getCourse();
});
