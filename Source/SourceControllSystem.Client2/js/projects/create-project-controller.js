(function () {
    'use strict';

    function CreateProjectController($location, projects, identity) {
        var vm = this;
        vm.identity = identity;

        projects.getLicenses()
            .then(function(licenses) {
                vm.licenses = licenses;
            });

        vm.createProject = function (newProject) {
            projects.createProject(newProject)
                .then(function (id) {
                    $location.path('/projects/' + id);
                });
        }
    }

    angular.module('myApp.controllers')
        .controller('CreateProjectController', ['$location', 'projects', 'identity', CreateProjectController]);
}());