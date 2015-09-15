/**
 * Created by DJZ on 2015/9/14.
 * Auth: DJZ
 * use: <div cdl-directive-display-page></div>
 */
define([
    'scripts/directives/appDirectivesModule'
], function(directives){
    directives.directive('cdlDirectiveDisplayPage', ['$compile', function($compile){
        return {
            restrict: 'A',
            templateUrl: 'views/directiveDisplayPage/directiveDisplayPage.html',
            link: function(scope, element){
                var exampleDirectiveTemplate = angular.element(scope.directiveInfo.exampleUsage);
                var exampleDirective = $compile(exampleDirectiveTemplate)(scope);
                element.find('.exampleDirectivePanel').append(exampleDirective);

                element.find('.panel-heading').on('click', function () {
                    angular.element(this).toggleClass('expanded');
                    angular.element(this).parent().find('.panel-body').toggleClass('collapse');
                });
            }
        };
    }]);
});