/**
 * Created by DJZ on 2015/9/12.
 * Auth: DJZ
 * use: <div cdl-recommend-tag user-tags-list="userTagsList" recommend-tags-list="recommendTagsList" max-tag-length="maxTagLength"></div>
 */
define([
    'scripts/directives/appDirectivesModule'
], function(directives) {
    'use strict';
    directives.directive('cdlRecommendTag', function () {
        return {
            restrict: "EA",
            replace: false,
            templateUrl: "views/recommendTag/recommendTag.html",
            scope: {
                userTagsList: '=',
                recommendTagsList: '=',
                maxTagLength: '='
            },
            link: function (scope, element) {
                var inputElement = element.find('#customerTagsInput');

                scope.clearInput = function(){
                    inputElement.val('');
                };

                scope.customerTagsInputKeyUp = function(e){
                    if (e.keyCode === 13){
                        scope.addCustomerTags();
                        e.target.blur();
                    }else if(e.target.value.trim()){
                        scope.removeWarning(angular.element(e.target));
                    }
                };

                scope.addCustomerTags = function(){
                    var val = inputElement.val().trim();
                    if (val){
                        var tag = {"text": val};
                        if (scope.userTagsList.length >= scope.maxTagLength){
                            scope.errMsg = 'Max User Tag amount is ' + scope.maxTagLength + '. Please remove some tag first.';
                            return;
                        }else if(scope.tagIndexOf(tag, scope.userTagsList) > -1){
                            scope.errMsg = 'Tag ' + tag.text + 'is already in your Tag List.';
                            return;
                        }else{
                            if(scope.tagIndexOf(tag, scope.recommendTagsList) !== -1){
                                angular.element(element.find('.recommendTagsBlock .tagItem')[scope.tagIndexOf(tag, scope.recommendTagsList)]).addClass('selectedTag');
                            }
                            scope.addTagToUserList(tag);
                        }
                    }else{
                        scope.addWarning(inputElement);
                        inputElement.focus();
                    }
                    scope.clearInput();
                };

                scope.addTagToUserList = function (tag) {
                    scope.userTagsList.push(tag);
                    scope.errMsg = null;
                };

                scope.removeTagFromUserList = function (index) {
                    scope.userTagsList.splice(index, 1);
                    scope.errMsg = null;
                };

                scope.addWarning = function(element){
                    element.parent().addClass('has-warning');
                };

                scope.removeWarning = function(element){
                    element.parent().removeClass('has-warning');
                };

                scope.removeTagSelected = function(index){
                    var tagsIndex = scope.tagIndexOf(scope.userTagsList[index], scope.recommendTagsList);
                    if (tagsIndex < 0){
                        scope.removeTagFromUserList(index);
                    }else{
                        scope.toggleTagSelect(tagsIndex);
                    }
                };

                scope.toggleTagSelect = function (index) {
                    var tagsIndex = scope.tagIndexOf(scope.recommendTagsList[index], scope.userTagsList);
                    if (tagsIndex < 0){
                        if (scope.userTagsList.length >= scope.maxTagLength){
                            scope.errMsg = 'Max User Tag amount is ' + scope.maxTagLength + '. Please remove some tag first.';
                            return;
                        }
                        scope.addTagToUserList(scope.recommendTagsList[index]);
                    }else{
                        scope.removeTagFromUserList(tagsIndex);
                    }
                    angular.element(element.find('.recommendTagsBlock .tagItem')[index]).toggleClass('selectedTag');
                };

                scope.tagIndexOf = function (tag, tagList) {
                    var index = -1;
                    for (var i in tagList){
                        if (tag.text === tagList[i].text){
                            index = i;
                            break;
                        }
                    }
                    return index;
                }
            }
        };
    });
});