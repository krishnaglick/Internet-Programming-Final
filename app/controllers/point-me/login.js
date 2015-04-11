import Ember from 'ember';

var loginController = Ember.Controller.extend({
	authenticationService: Ember.inject.service('authenticationService'),
	appTitle: 'Login',
	isRegistering: false,
	actions: {
        login: function() {
            this.get('authenticationService').login(this.get('model'), this.get('router'))
			.success(function(data) {
				debugger;
				sessionStore.set('token', data);
			}.bind(this));
        },
        register: function() {
			this.get('authenticationService').register(this.get('model'), this.get('router'))
			.success(function(data) {
				sessionStore.set('token', data);
			}.bind(this));
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
