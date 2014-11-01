(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('aDirective', aDirective);

    aDirective.$inject = ['$window'];

    function aDirective($window) {
        var directive = {
            link: link,
            restrict: 'A',
            scope:{
                aDirective:"=",
                info:"@"
            }
        };
        return directive;

        function link(scope, element) {
            element.addClass('plain');

            element.bind('click', function(){
                scope.clicked = true;
                scope.aDirective.message += " World";
            })
        }
    }
})();