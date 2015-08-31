require.config({
    paths: {
        "jquery": "vendor/jquery/jquery",
        "angular": "vendor/angular/angular",
        "angularRoute": "vendor/angular/angular-route",
        "bootstrap": "vendor/bootstrap/js/bootstrap"
    },
    shim: {
        "angular" : {
            "exports" : "angular"
        },
        "bootstrap": {
            deps: ["jquery"]
        },
        "angularRoute": {
            deps: ["angular"]
        }
    },
    priority: [
        "jquery",
        "angular"
    ]
    ,urlArgs: "bust=" + (new Date()).getTime()  //防止读取缓存，调试用
});

require( [
    'jquery',
    'angular',
    'bootstrap',
    'scripts/app',
    'scripts/appRoute',
    'scripts/directives/loader/LoaderDirective',
    'scripts/directives/navigation/NavigationDirective'
], function($, angular) {
    'use strict';
    $(document).ready(function () {
        var $html = $('html');
        angular.bootstrap($html, ['CommonDirectiveLib']);
    });
});