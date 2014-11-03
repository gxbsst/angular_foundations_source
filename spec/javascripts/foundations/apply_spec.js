describe('Apply', function(){
    var element;
    var elementWithoutApply;
    var $scope, $scopeWithoutApply;
    var app = angular.module('app');
    app.directive('contentItemWithApply', contentItemWithApply);

    function contentItemWithApply(){
        var linker = function (scope, element, attrs) {
            element.on('click', function(){
                console.log('click fired!');
                scope.$apply(function() {
                    scope.count++;
                });
            })
        }

        var controller = function($scope) {
            $scope.count = 0;
        };

        return {
            link: linker,
            controller: controller
        };
    }

    beforeEach(module('app'));
    beforeEach(inject(function($compile, $rootScope){
        $scope = $rootScope.$new();
        $scopeWithoutApply = $rootScope.$new();
        element = angular.element('<div content-item-with-apply><h2>{{count}}</h2></div>');
        $compile(element)($scope);
    }));

    it("should equal 0", function(){
        $scope.$digest();
        expect(element.find('h2').html()).toBe("0")
    })

    describe('with $apply', function(){
        it("should equal 1", function() {
            $scope.$digest();
            browserTrigger(element, "click");
            expect(element.scope().count).toBe(1);
            expect(element.find('h2').html()).toBe("1");
        });
    });

    describe('without $apply', function(){
       beforeEach(inject(function(){
           spyOn($scope, "$apply").and.callFake(function() {
               return true;
           });
       }));

        it("should equal 1", function() {
            $scope.$digest();
            browserTrigger(element, "click");
            expect(element.scope().count).toBe(0);
            expect(element.find('h2').html()).toBe("0");
        });
    });
});