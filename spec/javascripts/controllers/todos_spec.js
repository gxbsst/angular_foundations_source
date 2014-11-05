describe('Todos', function() {

  var ctrl, scope;
  var todoService;

  beforeEach(module('app'));
  beforeEach(inject(function ($controller, $rootScope, Todo) {
    scope = $rootScope.$new();
    ctrl = $controller('TodosController', {scope: scope});
    todoService = Todo;
  }));

  it('should not have an edited Todo on start', function () {
    expect(ctrl.editedTodo).toBeNull();
  });

  it('should not have any Todos on start', function () {
    expect(ctrl.todos.length).toBe(0);
  });

  describe('#addTodo', function () {

    var ctrl, scope, todoService, httpBackend;

    beforeEach(inject(function ($controller, $rootScope, $httpBackend, Todo) {

      todoService = Todo;
      scope = $rootScope.$new();
      ctrl = $controller('TodosController', {
        scope: scope,
        Todo: todoService
      });

      httpBackend = $httpBackend;

      httpBackend.whenPOST('/todos', {
        todo: {title: 'title'}
      }).respond({id: 1});

      httpBackend.expectPOST("/todos").respond({id: 1});
    }));

    describe('having no Todos', function () {
      beforeEach(inject(function ($controller, Todo) {
        ctrl = $controller('TodosController', {
          $scope: scope,
          Todo: Todo
        });
        scope.$digest();
      }));

      it('should not add empty Todos', function () {
        ctrl.newTodo = '';
        ctrl.addTodo();
        scope.$digest();
        expect(ctrl.todos.length).toBe(0);
      });

    });

    describe('having Todos', function () {
      it('should trim whitespace from new Todos', function () {
        ctrl.newTodo = {todo: { title: '  buy some unicorns  '}};
        ctrl.addTodo();
        //scope.$digest();
        httpBackend.flush();
        expect(ctrl.todos.length).toBe(1);
      });

    });
  });
});