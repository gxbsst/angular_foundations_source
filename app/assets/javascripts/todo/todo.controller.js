(function () {
  'use strict';

  angular
    .module('app')
    .controller('TodosController', TodosController);

  TodosController.$inject = ['$scope','$routeParams', '$filter', 'Restangular'];

  function TodosController($scope, $routeParams, $filter, Restangular) {
    /*jshint validthis: true */
    var vm = this;
    var todos = vm.todos = [];
    vm.status = '';
    vm.statusFilter = null;
    vm.todo = {};
    vm.editedTodo = null;
    vm.originalTodo = null;
    vm.editedTodo = null;

    vm.addTodo = addTodo;
    vm.editTodo  = editTodo;
    vm.doneEditing = doneEditing;
    vm.revertEditing = revertEditing;
    vm.removeTodo = removeTodo;
    vm.clearCompletedTodos = clearCompletedTodos;
    vm.markAll = markAll;
    vm.completed = completed;

    $scope.$watch('todoCtrl.todos', completedCalculate, true);
    $scope.$on('$routeChangeSuccess', handleRouteChange);

    loadAll();

    function loadAll() {
      Restangular.all('todos').getList().then(function(allTodos){
        todos = vm.todos = allTodos;
      });
    }

    function completed(todo) {
      Restangular.one('todos', todo._id).get().then(function(td){
        td.completed = todo.completed;
        td.put();
      });
    }

    function handleRouteChange(){
      var status = vm.status = $routeParams.status || '';

      vm.statusFilter = (status === 'active') ?
      { completed: false } : (status === 'completed') ?
      { completed: true } : null;
    }

    function completedCalculate (newValue, oldValue) {
      vm.remainingCount = $filter('filter')(vm.todos, { completed: false}).length;
      vm.completedCount = vm.todos.length - vm.remainingCount;
      vm.allChecked = !vm.remainingCount;
    }

    function addTodo() {
      Restangular.all('todos').post({todo: vm.todo}).then(function(todos){
        vm.todos.push(vm.todo);
        vm.todo = {};
      })
    }

    function editTodo (todo) {
      vm.editedTodo = todo;
      // Clone the original todo to restore it on demand.
      vm.originalTodo = angular.extend({}, todo);
    }

    function doneEditing(todo) {
      Restangular.one('todos', todo._id).get().then(function(td){

        vm.editedTodo = null;
        td.title = todo.title.trim();

        if (!td.title) {
          vm.removeTodo(todo);
          return;
        }

        td.put();
      });
    }

    function revertEditing (todo) {
      vm.todos[vm.todos.indexOf(todo)] = vm.originalTodo;
      vm.doneEditing(vm.originalTodo);
    }

    function removeTodo(todo) {
      Restangular.one('todos', todo._id).get().then(function(td){
        td.remove().then(function(){
          vm.todos.splice(vm.todos.indexOf(todo), 1);
        })
      });
    }

    function clearCompletedTodos () {
      vm.todos = vm.todos.filter(function (val) {
        return !val.completed;
      });
    }

    function markAll(completed) {
      vm.todos.forEach(function (todo) {
        todo.completed = !completed;
        vm.completed(todo);
      });
    }

  }

})();
