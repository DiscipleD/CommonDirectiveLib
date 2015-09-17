/**
 * Created by DJZ on 2015/7/29.
 * Auth: DJZ
 */
define([
    'angular',
    'scripts/app',
    'scripts/controllers/directiveMenuList/directiveMenuListController',
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
            .when('/directiveList', {
                templateUrl: 'views/common/directiveMenuList.html',
                controller: 'DirectiveMenuController'
            })
            .when('/cornerTag', {
                templateUrl: 'views/common/directiveContainPage.html',
                controller: 'CornerTagController'
            })
            .when('/pageNavigation', {
                templateUrl: 'views/common/directiveContainPage.html',
                controller: 'PageNavigationController'
            })
            .when('/recommendTag', {
                templateUrl: 'views/common/directiveContainPage.html',
                controller: 'RecommendTagController'
            });
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }]);
});