define([], function() {

    angular.module('crisis-center')
        .service('crisisService', Svc);

    Svc.$inject = ['$q'];
    function Svc($q) {
        var crisesPromise = $q.when([
            {id: 1, name: 'Princess Held Captive'},
            {id: 2, name: 'Dragon Burning Cities'},
            {id: 3, name: 'Giant Asteroid Heading For Earth'},
            {id: 4, name: 'Release Deadline Looms'}
        ]);

        this.getCrises = function() {
            return crisesPromise;
        };

        this.getCrisis = function(id) {
            return crisesPromise.then(function(crises) {
                for(var i=0; i<crises.length; i++) {
                    if ( crises[i].id == id) return crises[i];
                }
            });
        };
    }

});