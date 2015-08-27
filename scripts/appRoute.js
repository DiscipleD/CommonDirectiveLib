define([
    'angular',
    'scripts/app'
], function(angular, app) {
    'use strict';

    return app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/home.html'
        });
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }]);

});