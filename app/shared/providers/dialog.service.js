define([], function () {

    angular.module('app.provider')
        .service('dialogService', DialogService);

    DialogService.$inject = ['$q'];
    function DialogService($q) {
        this.confirm = function(message) {
            return $q.when(window.confirm(message || 'Is it OK?'));
        };
    }

});