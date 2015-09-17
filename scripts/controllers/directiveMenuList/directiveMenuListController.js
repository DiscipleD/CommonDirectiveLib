/**
 * Created by DJZ on 2015/9/17.
 * Auth: DJZ
 */
define([
    'scripts/controllers/appControllersModule',
    'scripts/services/common/LoadFileService'
],function(controllers){
    'use strict';

    controllers.controller('DirectiveMenuController', ['$scope', 'LoadFileService', function($scope, LoadFileService){

        $scope.initPage = function () {
            $scope.diretiveList = [
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
        };

        LoadFileService.loadCssFile('styles/directiveMenuList/directiveMenuList.css');

        $scope.initPage();
    }]);
});