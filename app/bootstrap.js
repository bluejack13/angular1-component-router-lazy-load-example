define('app/bootstrap', [
    'shared/providers/provider.module',
    'hero/hero.module',
    'crisis-center/crisis-center.module',
    'app/app.module'
], function() {

    angular
        .element(document.getElementsByTagName('head'))
        .append(angular.element('<base href="' + window.location.pathname + '" />'));

    angular.bootstrap(document, ['app']);

});

(function(dependencies) {
    require(dependencies);
})(['app/bootstrap']);