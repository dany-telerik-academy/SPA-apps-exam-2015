(function () {
    'use strict';

    function commits(data) {
        var COMMITS_URL = 'api/commits';

        function getPublicCommits() {
            return data.get(COMMITS_URL);
        }

        function getCommitDetails(id) {
            return data.get(COMMITS_URL + '/' + id);
        }

        function addCommit(commit) {
            return data.post(COMMITS_URL, commit);
        }

        return {
            getPublicCommits: getPublicCommits,
            getCommitDetails: getCommitDetails,
            addCommit: addCommit
        }
    }

    angular.module('myApp.services')
        .factory('commits', ['data', commits]);
}());