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
                    controller: 'TodosController',
                    templateUrl: 'todos/index.html',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-calendar"></i> Sessions'
                    }
                }
            },
            {
                url: '/todos/:status',
                config: {
                    title: 'todos',
                    controller: 'TodosController',
                    templateUrl: 'todos/index.html',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-calendar"></i> Sessions'
                    }
                }
            }
        ];
    }

})();