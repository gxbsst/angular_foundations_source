describe('factory', function(){
    var app = angular.module('factoryApp', []);

    app.factory('myFactory', myFactory);
    myFactory.$injector = [];

    function myFactory(){
        var self = this;
        var boards = [
            {"id": "0", "title": "Board 00", "content": "Content pending."},
            {"id": "1", "title": "Board 01", "content": "Content pending."},
            {"id": "2", "title": "Board 02", "content": "Content pending."},
            {"id": "3", "title": "Board 03", "content": "Content pending."},
            {"id": "4", "title": "Board 04", "content": "Content pending."}
        ];

        function getBoards () {
            return boards;
        }

        return {
            getBoards: getBoards
        }
    }

    var factory;
    beforeEach(module('factoryApp'));
    beforeEach(inject(function(myFactory){
        factory = myFactory;
    }));

    it('return 5 record', function(){
        expect(factory.getBoards().length).toBe(5)
    })

    it('id of the first record is 1', function(){
        expect(factory.getBoards()[0]['id']).toBe('0')
    })

})