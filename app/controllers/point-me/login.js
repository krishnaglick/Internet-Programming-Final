import Ember from 'ember';

var loginController = Ember.Controller.extend({
	authenticationService: Ember.inject.service('authenticationService'),
	appTitle: 'Login | Register',
	actions: {
        login: function() {
            //this.get('authentication-service')....
        },
        register: function() {
            //this.get('authentication-service')....
        }
	}
});

export default loginController;
