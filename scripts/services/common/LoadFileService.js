/**
 * Created by DJZ on 2015/8/28.
 * Auth: DJZ
 */
define([
    'scripts/services/appServicesModule'
], function (services) {
    'use strict';
    return services.factory('LoadFileService', function(){

        var factory = {};
        var _basePath = 'localhost:63342/CommonDirectiveLib/'

        factory.loadCssFile = function(path){
            if (path){
                var css = $('<link rel="stylesheet"/>');
                css.attr('href', path);
                $('head').append(css);
            }
        };

        return factory;
    });
});