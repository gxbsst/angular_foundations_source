(function () {
    'use strict';
    angular.module('app.core', [
        /*
         * Angular modules
         */
        'ngRoute', 'ngSanitize',

        //'restangular',
        'restangular',

        /*
         * Our reusable cross app code modules
         */
        //'blocks.exception', 'blocks.logger', 'blocks.router',
        'blocks.router',
        'templates'
        /*
         * 3rd Party modules
         */
        //'ui.bootstrap',     // ui-bootstrap (ex: carousel, pagination, dialog)
        //'breeze.angular',   // tells breeze to use $q instead of Q.js
        //'breeze.directives',// breeze validation directive (zValidate)
        //'ngplus',           // ngplus utilities
        //'ngzWip'            // zStorage and zStorageWip
    ]);
})();
