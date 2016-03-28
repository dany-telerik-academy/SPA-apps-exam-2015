(function () {
    'use strict';

    function ProjectDetailsController($location, $routeParams, projects) {
        var vm = this;

        vm.id = $routeParams.id;

        vm.getProjectDetails = function (id) {
            projects.getProjectDetails(id)
                .then(function (projectDetails) {
                    vm.project = projectDetails;
                })
                .catch(function (err) {
                    $location.path('/');
                });
        }

        vm.getProjectDetails($routeParams.id);

        vm.joinProject = function (id) {
            projects.joinProject(id)
                .then(vm.getProjectDetails(id));
        }
    }

    angular.module('myApp.controllers')
        .controller('ProjectDetailsController', ['$location', '$routeParams', 'projects', ProjectDetailsController]);
}());