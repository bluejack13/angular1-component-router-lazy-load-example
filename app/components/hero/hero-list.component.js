define([
    'hero/hero.service'
], function() {

    angular.module('heroes')
        .component('heroList', {
            template:
                '<div ng-repeat="hero in $ctrl.heroes" ' +
                '     ng-class="{ selected: $ctrl.isSelected(hero) }">\n' +
                '<a ng-link="[\'HeroDetail\', {id: hero.id}]">{{hero.name}}</a>\n' +
                '</div>',
            controller: HeroListComponent
        });

    HeroListComponent.$inject = ['heroService'];
    function HeroListComponent(heroService) {
        var selectedId = null;
        var $ctrl = this;

        this.$routerOnActivate = function(next) {
            // Load up the heroes for this view
            heroService.getHeroes().then(function(heroes) {
                $ctrl.heroes = heroes;
                selectedId = next.params.id;
            });
        };

        this.isSelected = function(hero) {
            return (hero.id == selectedId);
        };
    }

});