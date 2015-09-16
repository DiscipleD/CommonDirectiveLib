/**
 * Created by DJZ on 2015/9/14.
 * Auth: DJZ
 * use: <div cdl-directive-display-page></div>
 */
define([
    'scripts/directives/appDirectivesModule'
], function(directives){
    directives.directive('cdlDirectiveDisplayPage', ['$compile', '$timeout', function($compile, $timeout){
        return {
            restrict: 'A',
            templateUrl: 'views/directiveDisplayPage/directiveDisplayPage.html',
            link: function(scope, element){
                var exampleDirectiveTemplate = angular.element(scope.directiveInfo.exampleUsage);
                var exampleDirective = $compile(exampleDirectiveTemplate)(scope);
                element.find('.exampleDirectivePanel').append(exampleDirective);

                element.find('.panel-heading').on('click', function () {
                    angular.element(this).toggleClass('expanded');
                    var panelElement = angular.element(this).parent().find('.panel-body').parent();
                    scope.toggleCollapsePanel(panelElement);
                });

                // set 'collapse-body' element height for transition animation
                $timeout(function () {
                    element.find('.collapse-body:not(.collapsed)').each(function () {
                        $(this).css('height', $(this).find('.panel-body').css('height'));
                    });
                    element.find('.collapse-body.collapsed').each(function () {
                        $(this).css('height', 0);
                    });
                }, 500);

                scope.toggleCollapsePanel = function (panelElement) {
                    if (panelElement.hasClass('collapsed')){
                        panelElement.removeClass('collapsed');

                        panelElement.css('height', panelElement.find('.panel-body').css('height'));
                    }else{
                        panelElement.addClass('collapsed');
                        panelElement.css('height', 0);
                    }
                }
            }
        };
    }]);
});