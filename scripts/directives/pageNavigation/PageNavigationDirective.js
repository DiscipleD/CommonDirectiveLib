/**
 * Created by DJZ on 2015/8/31.
 * Auth: DJZ
 * use: <div cdl-page-nav page-num="pageNum" current-page="currentPage" function-name="goPage(pageId)"></div>
 */
define([
    'scripts/directives/appDirectivesModule'
], function(directives){
    'use strict';
    directives.directive('cdlPageNav', function(){
        return {
            restrict: "EA",
            templateUrl: "views/pageNavigation/pageNavigation.html",
            scope: {
                pageNum: "=",
                currentPage: "=",
                functionName: "&"
            },
            link: function(scope, element, attr){
                scope.pageStep = 4;

                scope.pageNum = scope.pageNum ? scope.pageNum : 0;

                scope.selectPage = function(pageId){
                    if (pageId < 1 || pageId > scope.pageNum || pageId === scope.currentPage) return;
                    scope.renderPageNav(pageId, scope.pageNum);

                    $("html,body").animate({scrollTop:"0px"}, 500);
                    scope.functionName({pageId:pageId});
                };

                scope.$watch('pageNum', function(){
                    scope.renderPageNav(scope.currentPage, scope.pageNum);
                });

                scope.renderPageNav = function(currentPage, pageNum){
                    scope.pages = [];

                    scope.currentPage = currentPage;

                    var startPage = currentPage - scope.pageStep < 1 ? 1 : currentPage - scope.pageStep;
                    var endPage = currentPage + scope.pageStep > pageNum ? pageNum : currentPage + scope.pageStep;
                    if (startPage > 1) {
                        scope.pages.push(1);
                        scope.pages.push("...");
                    }
                    for (var index = startPage; index <= endPage; index++){
                        scope.pages.push(index);
                    }
                    if (endPage < pageNum) {
                        scope.pages.push("...");
                        scope.pages.push(pageNum);
                    }
                };
            }
        };
    });
});