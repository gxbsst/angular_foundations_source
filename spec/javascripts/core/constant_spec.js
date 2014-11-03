describe('constant', function(){
   beforeEach(module('app'));
   describe('website', function(){
      it('be website', inject(function($injector){
         expect($injector.get('website')).toBe('TODO APP');
         expect($injector.get('description')).toBe('web description');
      }));
   });
});