/**
 * Created by DJZ on 2015/9/12.
 * Auth: DJZ
 */
define([
    'scripts/controllers/appControllersModule',
    'scripts/directives/recommendTag/RecommendTagDirective',
    'scripts/services/common/LoadFileService'
],function(controllers){
    'use strict';

    controllers.controller('RecommendTagController', ['$scope', 'LoadFileService', function($scope, LoadFileService){

        $scope.initPage = function(){
            $scope.maxTagLength = 10;
            $scope.recommendTagsList = [{"text": "math"}, {"text": "computer since"}, {"text": "logic analysis"}];
            $scope.userTagsList = [];
        };

        LoadFileService.loadCssFile('styles/pageNavigation/page.css');
        LoadFileService.loadCssFile('styles/recommendTag/recommendTag.css');

        $scope.initPage();
    }]);
});
