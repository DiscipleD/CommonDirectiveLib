define([
    'angular',
    'scripts/app',
    'scripts/controllers/cornerTag/CornerTagController',
    'scripts/controllers/pageNavigation/PageNavigationController'
], function(angular, app) {
    'use strict';

    return app.config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html'
            })
            .when('/cornerTag', {
                templateUrl: 'views/cornerTag/page.html',
                controller: 'CornerTagController'
            })
            .when('/pageNavigation', {
                templateUrl: 'views/pageNavigation/page.html',
                controller: 'PageNavigationController'
            });
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }]);

});