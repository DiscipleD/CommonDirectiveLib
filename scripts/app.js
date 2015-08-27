define([
    'angular',
    'scripts/controllers/appControllersModule',
    'scripts/services/appServicesModule',
    'scripts/directives/appDirectivesModule',
    'angularRoute'
], function (angular) {
    'use strict';
    return angular.module('CommonDirectiveLib', ['CommonDirectiveLib.Controllers', 'CommonDirectiveLib.Services', 'CommonDirectiveLib.Directives', 'ngRoute']);
});