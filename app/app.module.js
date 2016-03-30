define([
    'app/app.route',
    'hero/hero.module',
    'crisis-center/crisis-center.module'
], function(route) {

    angular.module('app', ['ngComponentRouter', 'heroes', 'crisis-center'])
        .config(config)
        .value('$routerRootComponent', 'app')
        .component('app', {
            template:
                '<nav>\n' +
                '  <a ng-link="[\'CrisisCenter\']">Crisis Center</a>\n' +
                '  <a ng-link="[\'Heroes\']">Heroes</a>\n' +
                '</nav>\n' +
                '<ng-outlet></ng-outlet>\n',
            $routeConfig: route
        });

    config.$inject = ['$locationProvider'];
    function config($locationProvider) {
        $locationProvider.html5Mode(true);
    }

});