(function() {
    'use strict';

    var core = angular.module('app.core');

    core.config(configure);

    configure.$inject = [ '$routeProvider', 'routehelperConfigProvider', 'RestangularProvider'];

    /* @ngInject */
    function configure( $routeProvider, routehelperConfigProvider, RestangularProvider) {

        RestangularProvider.setRestangularFields({
            id: '_id'
        });

        configureRouting();

        function configureRouting() {
            var routeCfg = routehelperConfigProvider;
            routeCfg.config.$routeProvider = $routeProvider;
            routeCfg.config.docTitle = 'CC: ';
            routeCfg.config.resolveAlways = { /* @ngInject */
                ready: function() {
                    //return datacontext.ready();
                }
            };
        }
    }
})();