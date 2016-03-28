(function () {
    'use strict';

    function data($http, $q, authorization, notifier, baseServiceUrl) {

        function get(url, queryParams) {
            var defered = $q.defer();

            var authHeader = authorization.getAuthorizationHeader();

            $http.get(baseServiceUrl + '/' + url, { params: queryParams, headers: authHeader })
                .then(function (response) {
                    defered.resolve(response.data);
                }, function (error) {
                    error = getErrorMessage(error);
                    notifier.error(error);
                    defered.reject(error);
                });

            return defered.promise;
        }

        function post(url, postData) {
            var defered = $q.defer();

            var authHeader = authorization.getAuthorizationHeader();

            $http.post(baseServiceUrl + '/' + url, postData, { headers: authHeader })
                .then(function (response) {
                    defered.resolve(response.data);
                }, function (error) {
                    error = getErrorMessage(error);
                    notifier.error(error);
                    defered.reject(error);
                });

            return defered.promise;
        }

        function put(url, postData) {
            var defered = $q.defer();

            var authHeader = authorization.getAuthorizationHeader();

            $http.put(baseServiceUrl + '/' + url, postData, { headers: authHeader })
                .then(function (response) {
                    defered.resolve(response.data);
                }, function (error) {
                    error = getErrorMessage(error);
                    notifier.error(error);
                    defered.reject(error);
                });

            return defered.promise;
        }

        function getErrorMessage(response) {
            var error;
            if (response.data) {
                error = response.data.modelState;
                if (error && error[Object.keys(error)[0]][0]) {
                    error = error[Object.keys(error)[0]][0];
                }
                else if (response.data.Message) {
                    error = response.data.Message;
                } else {
                    error = response.data.error_description;
                }
            }

            return error;
        }

        return {
            get: get,
            post: post,
            put: put
        };
    }

    angular.module('myApp.services')
        .factory('data', ['$http', '$q', 'authorization', 'notifier', 'baseServiceUrl', data]);
}());