/**
 * Created by DJZ on 2015/7/29.
 * Auth: DJZ
 */
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