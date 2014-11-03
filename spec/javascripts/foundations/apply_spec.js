describe('Apply', function(){
    var element;
    var $scope;
    var app = angular.module('app');
    app.directive('contentItem', contentItem);

    function contentItem(){
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
        element = angular.element('<div content-item><h2>{{count}}</h2></div>');
        $compile(element)($scope);
    }));

    it("should equal 0", function(){
        $scope.$digest();
        expect(element.find('h2').html()).toBe("0")
    })
    it("should equal 1", function(){
        $scope.$digest();
        browserTrigger(element, "click");
        expect(element.find('h2').html()).toBe("1")
    })
});