(function () {
    'use strict';

    function config($routeProvider) {

        var PARTIALS_PREFIX = 'views/partials/';
        var CONTROLLER_AS_VIEW_MODEL = 'vm';

        var routeResolvers = {
            authenticationRequired: {
                authenticate: ['$q', '$location', 'auth', function ($q, $location, auth) {
                    var isAuthorized = auth.isAuthenticated();
                    if (!isAuthorized) {
                        $location.path('/unauthorized');
                    }

                    return auth.isAuthenticated();
                }]
            }
        }

        $routeProvider
            .when('/', {
                templateUrl: PARTIALS_PREFIX + 'home/home.html',
                controller: 'HomeController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/projects', {
                templateUrl: PARTIALS_PREFIX + 'projects/projects.html',
                controller: 'ProjectsController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/projects/create', {
                templateUrl: PARTIALS_PREFIX + 'projects/create-project.html',
                controller: 'CreateProjectController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL,
                resolve: routeResolvers.authenticationRequired
            })
            .when('/projects/:id', {
                templateUrl: PARTIALS_PREFIX + 'projects/project-details.html',
                controller: 'ProjectDetailsController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL,
                resolve: routeResolvers.authenticationRequired
            })
            .when('/projects/:id/addcommits', {
                templateUrl: PARTIALS_PREFIX + 'commits/add-commit.html',
                controller: 'AddCommitController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL,
                resolve: routeResolvers.authenticationRequired
            })
            .when('/commits/:id', {
                templateUrl: PARTIALS_PREFIX + 'commits/commit-details.html',
                controller: 'CommitDetailsController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL,
                resolve: routeResolvers.authenticationRequired
            })
            .when('/unauthorized', {
                template: '<h1 class="text-center">YOU ARE NOT AUTHORIZED!</h1>'
            })
            .when('/register', {
                templateUrl: PARTIALS_PREFIX + 'identity/register.html',
                controller: 'SignUpCtrl'
            })
            .otherwise({ redirectTo: '/' });
    }

    angular.module('myApp.services', []);
    angular.module('myApp.directives', []);
    angular.module('myApp.filters', []);
    angular.module('myApp.controllers', ['myApp.services']);
    angular.module('myApp', ['ngRoute', 'ngCookies', 'kendo.directives', 'myApp.controllers', 'myApp.directives', 'myApp.filters']).
        config(['$routeProvider', config])
        .value('toastr', toastr)
        .constant('baseServiceUrl', 'http://localhost:42252/');
}());