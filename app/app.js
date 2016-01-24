'use strict';
// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',

]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]).
service('sharedProperties', function() {
    var searchKeys = {
        DanceStyle: 'Salsa LA',
        City: 'Kiel'
    };
    var course = {
        id: '1',
    };

    return {
        getString: function() {
            return stringValue;
        },
        getCourse: function(value) {
            return course;
        },
        getObject: function() {
            return searchKeys;
        }
    }
});
