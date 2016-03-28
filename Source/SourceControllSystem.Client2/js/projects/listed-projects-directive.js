(function() {
    'use strict';

    function listedProjects() {
        return {
            restrict: 'A',
            templateUrl: 'views/directives/listed-projects-directive.html'
        }
    }

    angular.module('myApp.directives')
        .directive('listedProjects', [listedProjects]);
}());