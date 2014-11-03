describe('constant', function(){

   beforeEach(module('app'));
   var app = angular.module('app');
   app.constant('constant', 1);

   describe('website', function(){
      it('be website', inject(function($injector){
         expect($injector.get('website')).toBe('TODO APP');
         expect($injector.get('description')).toBe('web description');
      }));
   });

   describe('constant', function(){
      it('be website', inject(function($injector){
         expect($injector.get('constant')).toBe(1);
      }));
   })
});

describe('test', function(){
   var common = angular.module('common', []);

   common.constant('I18n', 'foo');
   common.config(['I18n', function(I18n) {
      console.log("common I18n " + I18n)
   }]);

   var app = angular.module('plunker', ['common']);
   app.config(['I18n', function(I18n) {
      console.log("plunker I18n " + I18n)
   }]);

   describe('tests', function() {

      beforeEach(module('common'));
      beforeEach(function() {
         module(function($provide) {
            console.log('change to bar');
            $provide.constant('I18n', 'bar');
         });
      });
      beforeEach(module('plunker'));

      it('anything looks great', inject(function($injector) {
         var i18n = $injector.get('I18n');
         expect(i18n).toBe('bar');
      }));
   });
});

describe('constant vs value', function(){
   var app = angular.module('app');
   app.value('myValue', 1);
   app.constant('myConstant', 1);
   app.config(function($provide){
      $provide.decorator('myValue', function($delegate){
         $delegate += 1;
         return $delegate;
      });
      //$provide.decorator('myConstant', function($delegate){
      //   $delegate += 1;
      //   return $delegate;
      //});
   });

   beforeEach(module('app'));

   describe('override value with decorator', function(){
      it('eq 1', inject(function($injector){
         expect($injector.get('myValue')).toBe(2);
         expect($injector.get('myConstant')).toBe(1);
      }));
   });
})