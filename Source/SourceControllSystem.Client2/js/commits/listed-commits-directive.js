(function() {
    'use strict';

    function listedCommits() {
        return {
            restrict: 'A',
            templateUrl: 'views/directives/listed-commits-directive.html'
        }
    }

    angular.module('myApp.directives')
        .directive('listedCommits', [listedCommits]);
}());