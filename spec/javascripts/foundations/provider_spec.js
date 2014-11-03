describe('provider', function(){
    var app = angular.module('providerApp',[]);

    app.provider('User', User);
    User.$injector = [];

    function User() {

        var that = this;

        that.backendUrl = "http://localhost:3000";
        that.setBackendUrl = setBackendUrl;
        that.$get = myService;

        function setBackendUrl(newUrl) {
            if (newUrl) that.backendUrl = newUrl;
        }

        function myService($http) {
            var self = this;
            var service = {
                user: {},
                setName: function (newName) {
                    service.user['name'] = newName;
                },
                setEmail: function (newEmail) {
                    service.user['email'] = newEmail;
                },
                save: function () {
                    return $http.post(self.backendUrl + '/users', {
                        user: service.user
                    })
                },
                getBackendUrl: function(){
                    return self.backendUrl;
                }
            };
            return service;
        }
    }

    app.config(function(UserProvider){
        UserProvider.setBackendUrl('http://test.com');
    });

    var provider;
    beforeEach(module('providerApp'));
    beforeEach(inject(function(User){
        provider = User;
    }));

    it('return 5 record', function(){
        expect(provider.getBackendUrl()).toBe('http://test.com')
    })

    //it('id of the first record is 1', function(){
    //    expect(factory.getBoards()[0]['id']).toBe('0')
    //})

})