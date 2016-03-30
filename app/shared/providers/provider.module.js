define([], function () {

    var app = angular.module('app.provider', [])
        .config(config)
        .provider('lazyRegister', LazyRegisterProvider);

    config.$inject = ['lazyRegisterProvider'];
    function config(lazyRegisterProvider) {
        lazyRegisterProvider.call(app);
    }

    LazyRegisterProvider.$inject = ['$controllerProvider', '$compileProvider', '$filterProvider', '$provide'];
    function LazyRegisterProvider($controllerProvider, $compileProvider, $filterProvider, $provide) {

        this.call = function (context) {
            context.controller = $controllerProvider.register;
            context.directive = $compileProvider.directive;
            context.component = $compileProvider.component;
            context.filter = $filterProvider.register;
            context.provider = $provide.provider;
            context.factory = $provide.factory;
            context.service = $provide.service;
        };

        this.$get = angular.noop;
    }

});