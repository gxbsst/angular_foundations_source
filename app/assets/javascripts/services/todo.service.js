(function () {
    'use strict';

    angular
        .module('app.service')
        .factory('Todo', Todo);

    Todo.$inject = ['Restangular'];

    /* @ngInject */
    function Todo(Restangular)
    {
       return Restangular.all('todos');
    }
})();