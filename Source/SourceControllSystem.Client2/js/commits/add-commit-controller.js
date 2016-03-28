(function () {
    'use strict';

    function AddCommitController($location, $routeParams, commits, identity) {
        var vm = this;
        vm.identity = identity;
        
        vm.commit = {};
        vm.commit.ProjectId = $routeParams.id;

        vm.addCommit = function (newCommit) {
            commits.addCommit(newCommit)
                .then(function (id) {
                    $location.path('/project/' + newCommit.ProjectId);
                });
        }
    }

    angular.module('myApp.controllers')
        .controller('AddCommitController', ['$location', '$routeParams', 'commits', 'identity', AddCommitController]);
}());