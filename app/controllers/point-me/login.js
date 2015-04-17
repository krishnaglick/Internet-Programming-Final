import Ember from 'ember';

var loginController = Ember.Controller.extend({
	authenticationService: Ember.inject.service('authenticationService'),
	isRegistering: false,
	loading: '',
	user: {
		username: '',
		password: '',
		email: ''
	},
	actions: {
        login: function() {
        	this.set('loading', 'loading');
            var authXHR = this.get('authenticationService').login(this.user);
            if(authXHR) {
            	authXHR.success((data) => {
            		this.get('authenticationService').createSession(this, data);
            	});
            	authXHR.complete(() => {
            		this.set('loading', '');
            	});
			}
        },
        register: function() {
        	this.set('loading', 'loading');
            var authXHR = this.get('authenticationService').register(this.user);
            if(authXHR) {
            	authXHR.success((data) => {
            		this.get('authenticationService').createSession(this, data);
            	});
            	authXHR.complete(() => {
            		this.set('loading', '');
            	});
			}
        },
		createAccount: function() {
			this.set('isRegistering', true);
			this.set('session.appTitle', 'Register');
		},
		cancelCreateAccount: function() {
			this.set('isRegistering', false);
			this.set('session.appTitle', 'Login');
		}
	}
});

export default loginController;
