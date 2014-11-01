(function () {
    'use strict';

    angular
    .module('app')
    .controller('Todos', Todos);

    Todos.$inject = ['$routeParams', '$filter'];

    function Todos($routeParams, $filter) {
      /*jshint validthis: true */
      var vm = this;

      //vm.todos = todoStorage.get();
      //vm.newTodo = '';
      //vm.editedTodo = null;
      //vm.originalTodo = null;
      //vm.editedTodo = null;
      //vm.addTodo = addTodo;
      //vm.editTodo  = editTodo;
      //vm.doneEditing = doneEditing;
      //vm.revertEditing = revertEditing;
      //vm.markAll = markAll;
      //
      //vm.$watch('todos', updateTodo, true);
      //vm.$on('$routeChangeSuccess', handleRouteChange);
      //
      //function addTodo() {
      //  var newTodo = vm.newTodo.trim();
      //  if (!newTodo.length) {
      //    return;
      //  }
      //
      //  todos.push({
      //      title: newTodo,
      //      completed: false
      //  });
      //
      //  vm.newTodo = '';
      //};
      //
      //function editTodo (todo) {
      //  vm.editedTodo = todo;
      //  // Clone the original todo to restore it on demand.
      //  vm.originalTodo = angular.extend({}, todo);
      //};
      //
      //function doneEditing(todo) {
      //  todo.title = todo.title.trim();
      //
      //  if (!todo.title) {
      //    vm.removeTodo(todo);
      //  }
      //};
      //
      //
      //function revertEditing (todo) {
      //  todos[todos.indexOf(todo)] = vm.originalTodo;
      //  vm.doneEditing(vm.originalTodo);
      //};
      //
      //vm.removeTodo = removeTodo;
      //
      //function removeTodo(todo) {
      //  todos.splice(todos.indexOf(todo), 1);
      //};
      //
      //vm.clearCompletedTodos = clearCompletedTodos;
      //
      //function clearCompletedTodos () {
      //  vm.todos = todos = todos.filter(function (val) {
      //    return !val.completed;
      //  });
      //};
      //
      //function markAll(completed) {
      //  todos.forEach(function (todo) {
      //    todo.completed = !completed;
      //  });
      //};
      //
      //// Monitor the current route for changes and adjust the filter accordingly.
      //function handleRouteChange() {
      //  var status = vm.status = $routeParams.status || '';
      //
      //  vm.statusFilter = (status === 'active') ?
      //  { completed: false } : (status === 'completed') ?
      //  { completed: true } : null;
      //}
      //
      //
      //function updateTodo(newValue, oldValue) {
      //
      //  vm.remainingCount = $filter('filter')(todos, { completed: false }).length;
      //  vm.completedCount = todos.length - vm.remainingCount;
      //  vm.allChecked = !vm.remainingCount;
      //
      //  if (newValue !== oldValue) { // This prevents unneeded calls to the local storage
      //    todoStorage.put(todos);
      //  }
      //}

    }

})();
