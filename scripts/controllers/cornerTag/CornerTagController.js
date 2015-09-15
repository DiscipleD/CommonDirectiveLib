/**
 * Created by DJZ on 2015/8/28.
 * Auth: DJZ
 */
define([
    'scripts/controllers/appControllersModule',
    'scripts/directives/directiveDisplayPage/DirectiveDisplayPageDirective',
    'scripts/directives/cornerTag/CornerTagDirective',
    'scripts/services/common/LoadFileService'
],function(controllers){
    'use strict';

    controllers.controller('CornerTagController', ['$scope', 'LoadFileService', function($scope, LoadFileService){

        $scope.initPage = function(){
            $scope.directiveInfo = {
                title: 'Corner Tag Directive',
                introduction: 'Usually used as a corner mark of the corner.',
                exampleUsage: '<div class="corner-tag item-list">' +
                '    <div ng-repeat="item in itemList">' +
                '        <div class="item-block" ng-class="$index % 4 == 0?'+ "'first-col':''" + '">' +
                '            <div class="item-picture"><img ng-src="{{item.loc}}"></div>' +
                '            <div class="item-name" ng-bind="item.name"></div>' +
                '            <div class="item-price" ng-bind="item.price | currency"></div>' +
                '            <div cdl-corner-tag tag-text="corner.text" tag-color="corner.color"></div>' +
                '        </div>' +
                '    </div>' +
                '</div>',
                code: [
                    {
                        title: 'CSS',
                        content: '\n.side-corner-tag{' +
                        '\n    float: right;' +
                        '\n    width: 110px;' +
                        '\n    height: 45px;' +
                        '\n    position: absolute;' +
                        '\n    bottom: 0;' +
                        '\n    right: -45px;' +
                        '\n    /*use parent font-size*/' +
                        '\n    /*font-size: 16px;*/' +
                        '\n    text-align: center;' +
                        '\n    transform: rotate(-45deg);' +
                        '\n    -webkit-transform: rotate(-45deg);' +
                        '\n    -moz-transform: rotate(-45deg);' +
                        '\n    -o-transform: rotate(-45deg);' +
                        '\n    -ms-transform: rotate(-45deg);' +
                        '\n    color: #fff;' +
                        '\n    line-height: 45px;' +
                        '\n}' +
                        '\n' +
                        '\n.side-corner-tag p{' +
                        '\n    margin-top: -5px;' +
                        '\n    margin-left: -15px;' +
                        '\n}'
                    }
                ]
            };

            $scope.corner = {
                color: '#22cc99',
                text: 'New'
            };

            $scope.itemList = [
                {name: 'Apple 6', price: '6000', loc: 'image/default.png'},
                {name: 'Nokia lumia', price: '3500', loc: 'image/default.png'},
                {name: 'Samsung Galaxy S6', price: '4000', loc: 'image/default.png'},
                {name: 'HUAWEI P8', price: '3000', loc: 'image/default.png'},
                {name: 'BlackBerry P9982', price: '10000', loc: 'image/default.png'}
            ];
        };

        LoadFileService.loadCssFile('styles/cornerTag/cornerTag.css');

        $scope.initPage();
    }]);
});
