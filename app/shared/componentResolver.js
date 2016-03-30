define([], function() {
    return function(component, url) {
        return function () {
            return new Promise(function(resolve, reject) {
                require([url], function() {
                    resolve(component);
                });
            });
        }
    }
});