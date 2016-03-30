define(['shared/componentResolver'], function (componentResolver) {
    return [
        {
            path: '/',
            name: 'HeroList',
            loader: componentResolver('heroList', 'hero/hero-list.component'),
            useAsDefault: true
        },
        {
            path: '/:id',
            name: 'HeroDetail',
            loader: componentResolver('heroDetail', 'hero/hero-detail.component')
        }
    ]
});