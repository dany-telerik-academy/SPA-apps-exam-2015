(function () {
    'use strict';

    function CommitDetailsController($location, $routeParams, commits) {
        var vm = this;

        // TODO: simplify (no need to refresh content)
        vm.getCommitDetails = function (id) {
            commits.getCommitDetails(id)
                .then(function (getCommitDetails) {
                    vm.commit = getCommitDetails;
                })
                .catch(function (err) {
                    $location.path('/');
                });
        }

        vm.getCommitDetails($routeParams.id);
    }

    angular.module('myApp.controllers')
        .controller('CommitDetailsController', ['$location', '$routeParams', 'commits', CommitDetailsController]);
}());