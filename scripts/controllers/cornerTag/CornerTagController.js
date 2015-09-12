/**
 * Created by DJZ on 2015/8/28.
 * Auth: DJZ
 */
define([
    'scripts/controllers/appControllersModule',
    'scripts/directives/cornerTag/CornerTagDirective',
    'scripts/services/common/LoadFileService'
],function(controllers){
    'use strict';

    controllers.controller('CornerTagController', ['$scope', 'LoadFileService', function($scope, LoadFileService){

        $scope.itemList = [
            {name: 'Apple 6', price: '6000', loc: 'image/default.png'},
            {name: 'Nokia lumia', price: '3500', loc: 'image/default.png'},
            {name: 'Samsung Galaxy S6', price: '4000', loc: 'image/default.png'},
            {name: 'HUAWEI P8', price: '3000', loc: 'image/default.png'},
            {name: 'BlackBerry P9982', price: '10000', loc: 'image/default.png'}
        ];

        LoadFileService.loadCssFile('styles/cornerTag/page.css');
        LoadFileService.loadCssFile('styles/cornerTag/cornerTag.css');

    }]);
});
