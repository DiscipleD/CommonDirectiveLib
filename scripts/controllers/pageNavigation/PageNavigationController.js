/**
 * Created by DJZ on 2015/8/31.
 * Auth: DJZ
 */
define([
    'scripts/controllers/appControllersModule',
    'scripts/directives/directiveDisplayPage/DirectiveDisplayPageDirective',
    'scripts/directives/pageNavigation/PageNavigationDirective',
    'scripts/services/common/LoadFileService'
],function(controllers){
    'use strict';

    controllers.controller('PageNavigationController', ['$scope', 'LoadFileService', function($scope, LoadFileService){

        $scope.pageSize = 8;

        $scope.initPage = function(){
            $scope.directiveInfo = {
                title: 'Page Navigation Directive',
                introduction: 'A general page footer navigation, could be used in mostly website by little change.',
                exampleUsage: '<div class="page-nav item-list">' +
                '    <div ng-repeat="item in shownList track by $index">' +
                '        <div class="item-block" ng-class="$index % 4 == 0?'+ "'first-col':''" + '">' +
                '            <div class="item-picture"><img ng-src="{{item.loc}}"></div>' +
                '            <div class="item-name" ng-bind="item.name"></div>' +
                '            <div class="item-price" ng-bind="item.price | currency"></div>' +
                '        </div>' +
                '    </div>' +
                '</div>' +
                '<div cdl-page-nav page-num="pageNum" current-page="currentPage" function-name="goPage(pageId)"></div>',
                code: [
                    {
                        title: 'Template',
                        content: '\n<div class="pageNav">' +
                        '\n    <nav>' +
                        '\n        <ul class="pagination">' +
                        '\n            <li ng-class="currentPage <= 1?' + "'readOnly':''" + '">' +
                        '\n                <a aria-label="Previous" ng-click="selectPage(currentPage - 1)">' +
                        '\n                    <span aria-hidden="true">&lt;</span>' +
                        '\n                </a>' +
                        '\n            </li><!--' +
                        '\n            --><li ng-repeat="page in pages track by $index" ng-class="page === currentPage?' + "'active':''" + '">' +
                        '\n                <label ng-if="page === ' + "'...'" + ' ng-bind="page"></label>' +
                        '\n                <a ng-if="page !== ' + "'...'" + ' ng-click="selectPage(page)">{{page}}</a>' +
                        '\n            </li><!--' +
                        '\n            --><li ng-class="currentPage >= pageNum?' + "'readOnly':''" + '">' +
                        '\n                <a ng-click="selectPage(currentPage + 1)" aria-label="Next">' +
                        '\n                    <span aria-hidden="true">&gt;</span>' +
                        '\n                </a>' +
                        '\n            </li>' +
                        '\n        </ul>' +
                        '\n    </nav>' +
                        '\n</div>'
                    },
                    {
                        title: 'Controller',
                        content: '\n// define the page change function' +
                        '\n$scope.goPage = function(pageId){' +
                        '\n    $scope.shownList = [];' +
                        '\n    var starIndex = (pageId - 1) * $scope.pageSize;' +
                        '\n    var endIndex = pageId * $scope.pageSize > $scope.itemList.length ? $scope.itemList.length : pageId * $scope.pageSize;' +
                        '\n    for (var index = 0; starIndex < endIndex; index++, starIndex++){' +
                        '\n    $scope.shownList[index] = $scope.itemList[starIndex];' +
                        '\n    }' +
                        '\n};'
                    },
                    {
                        title: 'Directive',
                        content: '\nreturn {' +
                        '\n    restrict: "EA",' +
                        '\n    templateUrl: "views/pageNavigation/pageNavigation.html",' +
                        '\n    scope: {' +
                        '\n        pageNum: "=",' +
                        '\n        currentPage: "=",' +
                        '\n        functionName: "&"' +
                        '\n    },' +
                        '\n    link: function(scope, element, attr){' +
                        '\n        scope.pageStep = 4;' +
                        '\n' +
                        '\n        scope.pageNum = scope.pageNum ? scope.pageNum : 0;' +
                        '\n' +
                        '\n        scope.selectPage = function(pageId){' +
                        '\n            if (pageId < 1 || pageId > scope.pageNum || pageId === scope.currentPage) return;' +
                        '\n            scope.renderPageNav(pageId, scope.pageNum);' +
                        '\n' +
                        '\n            $("html,body").animate({scrollTop:"0px"}, 500);' +
                        '\n            scope.functionName({pageId:pageId});' +
                        '\n        };' +
                        '\n' +
                        '\n        scope.$watch("pageNum", function(){' +
                        '\n            scope.renderPageNav(scope.currentPage, scope.pageNum);' +
                        '\n        });' +
                        '\n' +
                        '\n        scope.renderPageNav = function(currentPage, pageNum){' +
                        '\n            scope.pages = [];' +
                        '\n' +
                        '\n            scope.currentPage = currentPage;' +
                        '\n' +
                        '\n            var startPage = currentPage - scope.pageStep < 1 ? 1 : currentPage - scope.pageStep;' +
                        '\n            var endPage = currentPage + scope.pageStep > pageNum ? pageNum : currentPage + scope.pageStep;' +
                        '\n            if (startPage > 1) {' +
                        '\n                scope.pages.push(1);' +
                        '\n                scope.pages.push("...");' +
                        '\n            }' +
                        '\n            for (var index = startPage; index <= endPage; index++){' +
                        '\n                scope.pages.push(index);' +
                        '\n            }' +
                        '\n            if (endPage < pageNum) {' +
                        '\n                scope.pages.push("...");' +
                        '\n                scope.pages.push(pageNum);' +
                        '\n            }' +
                        '\n        };' +
                        '\n    }' +
                        '\n};'
                    }
                ]
            };

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

        LoadFileService.loadCssFile('styles/pageNavigation/pageNavigation.css');

        $scope.initPage();
    }]);
});