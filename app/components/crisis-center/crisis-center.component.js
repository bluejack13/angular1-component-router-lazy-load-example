define([
    'crisis-center/route',
    'crisis-center/crisis-center.module'
], function(route, app) {

    app.component('crisisCenter', {
            template: '<h2>Crisis Center</h2><ng-outlet></ng-outlet>',
            $routeConfig: route
        });

});