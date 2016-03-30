define(['shared/componentResolver'], function(componentResolver) {
    return [
        {
            path: '/',
            name: 'CrisisList',
            loader: componentResolver('crisisList', 'crisis-center/crisis-list.component'),
            useAsDefault: true
        },
        {
            path: '/:id',
            name: 'CrisisDetail',
            loader: componentResolver('crisisDetail', 'crisis-center/crisis-detail.component')
        }
    ]
});