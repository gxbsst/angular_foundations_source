(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('todoFocus', todoFocus);

    todoFocus.$inject = ['$timeout'];

    /* @ngInject */
    function todoFocus($timeout) {

        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            scope.$watch(attrs.todoFocus, function (newVal) {
                if (newVal) {
                    $timeout(function () {
                        element[0].focus();
                    }, 0, false);
                }
            });
        }
    }
})();


