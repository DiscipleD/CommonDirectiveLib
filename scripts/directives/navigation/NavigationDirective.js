/**
 * Created by qy on 2015/7/29.
 */
define([
    'scripts/directives/appDirectivesModule'
], function(directives){
    'use strict';
    return directives.directive('cdlNav', function(){
        return {
            restrict: 'EA',
            templateUrl: 'views/navigation/navigation.html',
            link: function (scope, element, attr) {
            }
        };
    });
});