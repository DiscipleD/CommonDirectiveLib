/**
 * Created by DJZ on 2015/8/31.
 * Auth: DJZ
 */
define([
    'scripts/controllers/appControllersModule',
    'scripts/directives/pageNavigation/PageNavigationDirective',
    'scripts/services/common/LoadFileService'
],function(controllers){
    'use strict';

    controllers.controller('PageNavigationController', ['$scope', 'LoadFileService', function($scope, LoadFileService){

        $scope.pageSize = 8;

        $scope.initPage = function(){
            $scope.itemList = [];
            $scope.shownList = [];

            var tempList = [
                {name: 'Apple 6', price: '6000', loc: 'image/default.png'},
                {name: 'Nokia lumia', price: '3500', loc: 'image/default.png'},
                {name: 'Samsung Galaxy S6', price: '4000', loc: 'image/default.png'},
                {name: 'HUAWEI P8', price: '3000', loc: 'image/default.png'},
                {name: 'BlackBerry P9982', price: '10000', loc: 'image/default.png'}
            ];
            for (var i = 0; i < 20; i++){
                $scope.itemList = $scope.itemList.concat(tempList);
            }

            // init page
            $scope.currentPage = 1;
            $scope.pageNum = Math.ceil($scope.itemList.length / $scope.pageSize);

            $scope.goPage($scope.currentPage);
        };

        $scope.goPage = function(pageId){
            $scope.shownList = [];
            var starIndex = (pageId - 1) * $scope.pageSize;
            var endIndex = pageId * $scope.pageSize > $scope.itemList.length ? $scope.itemList.length : pageId * $scope.pageSize;
            for (var index = 0; starIndex < endIndex; index++, starIndex++){
                $scope.shownList[index] = $scope.itemList[starIndex];
            }
        };

        LoadFileService.loadCssFile('styles/pageNavigation/page.css');
        LoadFileService.loadCssFile('styles/pageNavigation/pageNavigation.css');

        $scope.initPage();
    }]);
});