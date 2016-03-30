define([
    'shared/componentResolver'
], function(componentResolver) {
    return [
        {
            path: '/crisis-center/...',
            name: 'CrisisCenter',
            loader: componentResolver('crisisCenter', 'crisis-center/crisis-center.component'),
            useAsDefault: true
        },
        {
            path: '/heroes/...',
            name: 'Heroes',
            loader: componentResolver('heroes', 'hero/hero.component')
        }
    ]
});