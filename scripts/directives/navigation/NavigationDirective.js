/**
 * Created by DJZ on 2015/7/29.
 * Auth: DJZ
 * use: <nav cdl-nav></nav>
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

                scope.dropdownPageList = [
                    {
                        title: 'Corner Tag',
                        url: '#/cornerTag'
                    },
                    {
                        title: 'Page Navigation',
                        url: '#/pageNavigation'
                    },
                    {
                        title: 'Recommend Tag',
                        url: '#/recommendTag'
                    }
                ];
            }
        };
    });
});