//describe('hello world', function(){
//    var element;
//    var $scope;
//
//    beforeEach(module('app'))
//    beforeEach(inject(function($compile, $rootScope){
//        $scope = $rootScope.$new();
//        $scope.data = {message: 'Hello'}
//        element = angular.element('<div  a-directive="data" info="abc" >{{2 + 2}}</div>');
//        $compile(element)($scope);
//    }))
//
//
//    it("should equal 4", function(){
//        $scope.$digest();
//        expect(element.html()).toBe("4")
//    })
//
//    describe('ehSimple', function(){
//        it("should", function(){
//            expect(element.hasClass('plain')).toBe(true)
//        })
//
//        it("should re click", function(){
//            browserTrigger(element, "click");
//            var isolated = element.isolateScope();
//            expect(isolated.clicked).toBe(true)
//            //expect(element.scope().clicked).toBe(true);
//        })
//        it("should update both scope on click", function(){
//            browserTrigger(element, "click");
//            var isolated = element.isolateScope();
//            expect(isolated.aDirective.message).toBe("Hello World");
//            expect(isolated.info).toBe('abc')
//            expect($scope.data.message).toBe("Hello World");
//        })
//    })
//
//})
