(function() {
    'use strict';

    angular
        .module('app.todo')
        .run(routeConfig);

    routeConfig.$inject = ['routehelper'];
    /* @ngInject */
    function routeConfig(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/todos',
                config: {
                    title: 'todos',
                    templateUrl: 'app/todo/index.html',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-calendar"></i> Sessions'
                    }
                }
            },
            {
                url: '/todos/search/:search',
                config: {
                    title: 'todos-search',
                    templateUrl: 'app/todos/index.html',
                    settings: {}
                }
            },
            {
                url: '/todos/:id',
                config: {
                    templateUrl: 'app/todos/show.html',
                    title: 'todos',
                    settings: {}
                }
            }
        ];
    }
})();