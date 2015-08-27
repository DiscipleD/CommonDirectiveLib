/**
 * Created by qy on 2015/7/31.
 */
define([
    'scripts/directives/appDirectivesModule'
], function(directives){
    'use strict';
    return directives.directive('cdlLoader', ['$rootScope', function($rootScope){
        return {
            restrict: 'EA',
            template: '<p>Loading...</p>',
            link: function(scope, element, attrs){
                element.addClass('hide');

                $rootScope.$on('$routeChangeStart', function(){
                    element.removeClass('hide');
                });

                $rootScope.$on('$routeChangeSuccess', function(){
                    element.addClass('hide');
                });
            }
        };
    }]);
});