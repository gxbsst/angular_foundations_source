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
                    controller: 'TodosController',
                    templateUrl: 'todos/index.html'
                }
            },
            {
                url: '/todos/:status',
                config: {
                    controller: 'TodosController',
                    templateUrl: 'todos/index.html'
                }
            }
        ];
    }

})();