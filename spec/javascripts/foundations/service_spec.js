describe('service', function(){
   var app = angular.module('serviceApp', []);

   app.service('myService', myService);
   myService.$injector = [];

   function myService(){
      var self = this;
      var boards = [
         {"id": "0", "title": "Board 00", "content": "Content pending."},
         {"id": "1", "title": "Board 01", "content": "Content pending."},
         {"id": "2", "title": "Board 02", "content": "Content pending."},
         {"id": "3", "title": "Board 03", "content": "Content pending."},
         {"id": "4", "title": "Board 04", "content": "Content pending."}
      ];

      self.getBoards = getBoards;

      function getBoards () {
         return boards;
      }
   }

   var service;
   beforeEach(module('serviceApp'));
   beforeEach(inject(function(myService){
      service = myService;
   }));

   it('return 5 record', function(){
      expect(service.getBoards().length).toBe(5)
   })

   it('id of the first record is 1', function(){
      expect(service.getBoards()[0]['id']).toBe('0')
   })

})