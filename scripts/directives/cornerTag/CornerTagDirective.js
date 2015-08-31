/**
 * Created by qy on 2015/8/30.
 * Auth: DingJianzhe
 * use: <div cdl-corner-tag tag-text="New" tag-color="#22cc99"></div>
 */
define([
    'scripts/directives/appDirectivesModule'
], function(directives){
    'use strict';
    return directives.directive('cdlCornerTag', function(){
        return {
            restrict: 'EA',
            templateUrl: 'views/cornerTag/cornerTag.html',
            scope: {
                tagText: '@',
                tagColor: '@'
            },
            link: function(scope, element, attrs){
                element.find('.side-corner-tag').css('background-color', scope.tagColor);
            }
        };
    });
});