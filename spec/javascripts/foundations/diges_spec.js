describe('Digest', function(){
    var scope;

    beforeEach(module('app'));
    beforeEach(inject(function($rootScope){
        scope = $rootScope.$new();
        scope.name = 'misko';
        scope.counter = 0;
    }));

    it("counter", function(){
        expect(scope.counter).toEqual(0);
        scope.$watch('name', function(newValue, oldValue) {
            scope.counter = scope.counter + 1;
        });
        expect(scope.counter).toEqual(0);

        scope.$digest();
// the listener is always called during the first $digest loop after it was registered
        expect(scope.counter).toEqual(1);

        scope.$digest();
// but now it will not be called unless the value changes
        expect(scope.counter).toEqual(1);

        scope.name = 'adam';
        scope.$digest();
        expect(scope.counter).toEqual(2);
    });
});