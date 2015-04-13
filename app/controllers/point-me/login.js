import Ember from 'ember';

var loginController = Ember.Controller.extend({
	authenticationService: Ember.inject.service('authenticationService'),
	appTitle: 'Login',
	isRegistering: false,
	data: {
		username: '',
		password: '',
		email: ''
	},
	actions: {
        login: function() {
            var authXHR = this.get('authenticationService').login(this.data);
            if(authXHR) {
            	authXHR.success(function(data) {
            		this.get('authenticationService').createSession(this, data);
            	}.bind(this));
			}
        },
        register: function() {
            var authXHR = this.get('authenticationService').register(this.data);
            if(authXHR) {
            	authXHR.success(function(data) {
            		this.get('authenticationService').createSession(this, data);
            	}.bind(this));
			}
        },
		createAccount: function() {
			this.set('isRegistering', true);
			this.set('appTitle', 'Register');
		},
		cancelCreateAccount: function() {
			this.set('isRegistering', false);
			this.set('appTitle', 'Login');
		}
	}
});

export default loginController;
