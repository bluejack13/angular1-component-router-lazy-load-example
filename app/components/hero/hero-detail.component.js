define([], function() {

    angular.module('heroes')
        .component('heroDetail', {
            template:
            '<div ng-if="$ctrl.hero">\n' +
            '  <h3>"{{$ctrl.hero.name}}"</h3>\n' +
            '  <div>\n' +
            '    <label>Id: </label>{{$ctrl.hero.id}}</div>\n' +
            '  <div>\n' +
            '    <label>Name: </label>\n' +
            '    <input ng-model="$ctrl.hero.name" placeholder="name"/>\n' +
            '  </div>\n' +
            '  <button ng-click="$ctrl.gotoHeroes()">Back</button>\n' +
            '</div>\n',
            bindings: { $router: '<' },
            controller: HeroDetailComponent
        });

    HeroDetailComponent.$inject = ['heroService'];
    function HeroDetailComponent(heroService) {
        var $ctrl = this;

        this.$routerOnActivate = function(next) {
            // Get the hero identified by the route parameter
            var id = next.params.id;
            heroService.getHero(id).then(function(hero) {
                $ctrl.hero = hero;
            });
        };

        this.gotoHeroes = function() {
            var heroId = this.hero && this.hero.id;
            this.$router.navigate(['HeroList', {id: heroId}]);
        };
    }

});