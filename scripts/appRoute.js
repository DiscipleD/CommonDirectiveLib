define([
    'angular',
    'scripts/app',
    'scripts/controllers/cornerTag/CornerTagController'
], function(angular, app) {
    'use strict';

    return app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/home.html'
        });
        $routeProvider.when('/cornerTag', {
            templateUrl: 'views/cornerTag/page.html',
            controller: 'CornerTagController'
        });
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }]);

});