/**
 * Created by DJZ on 2015/9/12.
 * Auth: DJZ
 */
define([
    'scripts/controllers/appControllersModule',
    'scripts/directives/directiveDisplayPage/DirectiveDisplayPageDirective',
    'scripts/directives/recommendTag/RecommendTagDirective',
    'scripts/services/common/LoadFileService'
],function(controllers){
    'use strict';

    controllers.controller('RecommendTagController', ['$scope', 'LoadFileService', function($scope, LoadFileService){

        $scope.initPage = function(){
            $scope.directiveInfo = {
                title: 'Recommend Tag Directive',
                introduction: 'A tag directive which include a text input box and two blocks. One used to show tags user choose or input; the other used to show some recommend tags in it.',
                exampleUsage: '<div cdl-recommend-tag user-tags-list="userTagsList" recommend-tags-list="recommendTagsList" max-tag-length="maxTagLength"></div>',
                code: [
                    {
                        title: 'Template',
                        content: '\n<div class="form-horizontal">\n' +
                        '    <div class="form-group">\n' +
                        '        <label class="control-label col-lg-2" for="customerTagsInput">Customer Tag</label>\n' +
                        '        <input type="text" id="customerTagsInput" class="form-control col-lg-3" ng-keyup="customerTagsInputKeyUp($event)"\n' +
                        '               placeholder="Please enter customize tag here." maxlength="20">\n' +
                        '        <div class="col-lg-7">\n' +
                        '            <button type="button" class="btn btn-info" ng-click="addCustomerTags()">Add</button>\n' +
                        '        </div>\n' +
                        '    </div>\n' +
                        '    <div class="form-group">\n' +
                        '        <label class="control-label col-lg-2" for="userTagsBlock">User Tag List</label>\n' +
                        '        <div id="userTagsBlock" class="col-lg-10 tagsBlock userTagsBlock">\n' +
                        '            <div class="tagItem on-mouse-hand" ng-repeat="tag in userTagsList" ng-click="removeTagSelected($index)">\n' +
                        '                <span ng-bind="tag.text"></span>\n' +
                        '                <button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n' +
                        '            </div>\n' +
                        '        </div>\n' +
                        '        <div class="col-lg-2"></div>\n' +
                        '        <div class="col-lg-10 errMsg" ng-bind="errMsg"></div>\n' +
                        '    </div>\n' +
                        '    <div class="form-group">\n' +
                        '        <label class="control-label col-lg-2" for="recommendTagsBlock">Recommend Tag List</label>\n' +
                        '        <div id="recommendTagsBlock" class="col-lg-10 tagsBlock recommendTagsBlock">\n' +
                        '            <div class="tagItem on-mouse-hand" ng-repeat="tag in recommendTagsList" ng-click="toggleTagSelect($index)">\n' +
                        '                <span ng-bind="tag.text"></span>\n' +
                        '            </div>\n' +
                        '        </div>\n' +
                        '    </div>\n' +
                        '</div>'
                    },
                    {
                        title: 'Directive(Extract)',
                        content: '\nvar inputElement = element.find("#customerTagsInput");\n\n' +
                        'scope.addCustomerTags = function(){\n' +
                        '    var val = inputElement.val().trim();\n' +
                        '    if (val){\n' +
                        '        var tag = {"text": val};\n' +
                        '        if (scope.userTagsList.length >= scope.maxTagLength){\n' +
                        '            scope.errMsg = "Max User Tag amount is " + scope.maxTagLength + ". Please remove some tag first.";\n' +
                        '            return;\n' +
                        '        }else if(scope.tagIndexOf(tag, scope.userTagsList) > -1){\n' +
                        '            scope.errMsg = "Tag " + tag.text + "is already in your Tag List.";\n' +
                        '            return;\n' +
                        '        }else{\n' +
                        '            if(scope.tagIndexOf(tag, scope.recommendTagsList) !== -1){\n' +
                        '                angular.element(element.find(".recommendTagsBlock .tagItem")[scope.tagIndexOf(tag, scope.recommendTagsList)]).addClass("selectedTag");\n' +
                        '            }\n' +
                        '            scope.addTagToUserList(tag);\n' +
                        '        }\n' +
                        '    }else{\n' +
                        '        scope.addWarning(inputElement);\n' +
                        '        inputElement.focus();\n' +
                        '    }\n' +
                        '    scope.clearInput();\n' +
                        '};\n'
                    },
                    {
                        title: 'CSS',
                        content: '\n#customerTagsInput{\n' +
                        '    width: 25%;\n' +
                        '}\n\n' +
                        '.tagsBlock{\n' +
                        '    line-height: inherit;\n' +
                        '    background-color: #fff;\n' +
                        '    border: 1px solid #bce8f1;\n' +
                        '    border-radius: 4px;\n' +
                        '    min-height: 37px;\n' +
                        '}\n\n' +
                        '.tagItem{\n' +
                        '    border: 1px solid #28a4c9;\n' +
                        '    border-radius: 3px;\n' +
                        '    padding: 2px 6px;\n' +
                        '    display: inline-block;\n' +
                        '    margin: 4px 0;\n' +
                        '}\n\n' +
                        '.tagItem + .tagItem{\n' +
                        '    margin-left: 10px;\n' +
                        '}\n\n' +
                        '.tagItem .close{\n' +
                        '    border-left: 1px solid #a94442;\n' +
                        '    margin-left: 4px;\n' +
                        '    padding-left: 4px;\n' +
                        '}\n\n' +
                        '.tagItem:hover .close{\n' +
                        '    opacity: .5;\n' +
                        '}\n\n' +
                        '.tagItem.selectedTag{\n' +
                        '    background-color: #28a4c9;\n' +
                        '    color: #fff;\n' +
                        '}\n'
                    }
                ]
            };

            $scope.maxTagLength = 10;
            $scope.recommendTagsList = [{"text": "math"}, {"text": "computer since"}, {"text": "logic analysis"}];
            $scope.userTagsList = [];
        };

        LoadFileService.loadCssFile('styles/recommendTag/recommendTag.css');

        $scope.initPage();
    }]);
});
