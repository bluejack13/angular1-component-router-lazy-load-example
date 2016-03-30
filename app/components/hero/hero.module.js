define([
    'shared/providers/provider.module'
], function() {

    var app = angular.module('heroes', ['app.provider'])
        .config(config);

    config.$inject = ['lazyRegisterProvider'];
    function config(lazyRegisterProvider) {
        lazyRegisterProvider.call(app);
    }

    return app;

});