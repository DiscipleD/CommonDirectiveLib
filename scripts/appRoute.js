/**
 * Created by DJZ on 2015/7/29.
 * Auth: DJZ
 */
define([
    'angular',
    'scripts/app',
    'scripts/controllers/cornerTag/CornerTagController',
    'scripts/controllers/pageNavigation/PageNavigationController',
    'scripts/controllers/recommendTag/RecommendTagController'
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
            })
            .when('/recommendTag', {
                templateUrl: 'views/recommendTag/page.html',
                controller: 'RecommendTagController'
            });
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }]);

});