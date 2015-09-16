/**
 * Created by DJZ on 2015/7/29.
 * Auth: DJZ
 * use: <nav cdl-nav></nav>
 */
define([
    'scripts/directives/appDirectivesModule'
], function(directives){
    'use strict';
    return directives.directive('cdlNav', ['$rootScope', '$location', function($rootScope, $location){
        return {
            restrict: 'EA',
            templateUrl: 'views/navigation/navigation.html',
            link: function (scope, element) {

                $rootScope.$on('$routeChangeSuccess', function(){
                    var currentPath = $location.path();
                    var aLink = element.find(".nav.navbar-nav li a[href='#" + currentPath + "']");
                    switch (currentPath){
                        case '/':
                        case '/directiveList':
                            aLink.parent().addClass('active').siblings().removeClass('active');
                            break;
                        default :
                            element.find('.dropdown').addClass('active').siblings().removeClass('active');
                    }
                });

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
    }]);
});