(function () {
    'use strict';

    function projects(data) {
        var PROJECTS_URL = 'api/projects';

        function getPublicProjects() {
            return data.get(PROJECTS_URL);
        }

        function filterProjects(parameters) {
            var PROJECTS_FILTER_URL = PROJECTS_URL + '/all';
            if (parameters.count === 0) {
                return data.get(PROJECTS_FILTER_URL);
            }

            PROJECTS_FILTER_URL += '?';
            var urlParams = encodeUrlParams(parameters);

            return data.get(PROJECTS_FILTER_URL + urlParams);
        }

        function getLicenses() {
            return data.get('api/licenses');
        }

        function createProject(project) {
            return data.post(PROJECTS_URL, project);
        }

        function getProjectDetails(id) {
            return data.get(PROJECTS_URL + '/' + id);
        }

        function joinProject(id) {
            return data.put(PROJECTS_URL + '/' + id);
        }

        function encodeUrlParams(parameters) {
            var str = "";
            for (var key in parameters) {
                if (str != "") {
                    str += "&";
                }
                str += key + "=" + parameters[key];
            }

            return str;
        }

        return {
            getPublicProjects: getPublicProjects,
            filterProjects: filterProjects,
            getLicenses: getLicenses,
            createProject: createProject,
            getProjectDetails: getProjectDetails,
            joinProject: joinProject
        }
    }

    angular.module('myApp.services')
        .factory('projects', ['data', projects]);
}());