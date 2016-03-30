define([
    'hero/route',
    'hero/hero.module'
], function(route, app) {

    app.component('heroes', {
            template: '<h2>Heroes</h2><ng-outlet></ng-outlet>',
            $routeConfig: route
        });

});