define([
    'crisis-center/crisis.service'
], function() {

    angular.module('crisis-center')
        .component('crisisList', {
            template:
            '<ul>\n' +
            '  <li ng-repeat="crisis in $ctrl.crises"\n' +
            '    ng-class="{ selected: $ctrl.isSelected(crisis) }"\n' +
            '    ng-click="$ctrl.onSelect(crisis)">\n' +
            '    <span class="badge">{{crisis.id}}</span> {{crisis.name}}\n' +
            '  </li>\n' +
            '</ul>\n',
            bindings: { $router: '<' },
            controller: CrisisListComponent,
            $canActivate: function($nextInstruction, $prevInstruction) {
                console.log('$canActivate', arguments);
            }
        });

    CrisisListComponent.$inject = ['crisisService'];
    function CrisisListComponent(crisisService) {
        var selectedId = null;
        var ctrl = this;

        this.$routerOnActivate = function(next) {
            console.log('$routerOnActivate', this, arguments);
            // Load up the crises for this view
            crisisService.getCrises().then(function(crises) {
                ctrl.crises = crises;
                selectedId = next.params.id;
            });
        };

        this.isSelected = function(crisis) {
            return (crisis.id == selectedId);
        };

        this.onSelect = function(crisis) {
            this.$router.navigate(['CrisisDetail', { id: crisis.id }]);
        };
    }

});