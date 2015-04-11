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
            /*this.get('authenticationService').login(this.get('model'), this.get('router'))
			.success(function(data) {
				debugger;
				sessionStore.set('token', data);
			}.bind(this));*/
			this.get('session').authenticate('authenticator:phpAuth', {
				data: this.get('data'),
				action: 'login'
			}).success(function() {

			});
        },
        register: function() {
			/*this.get('authenticationService').register(this.get('model'), this.get('router'))
			.success(function(data) {
				sessionStore.set('token', data);
			}.bind(this));*/
			this.get('session').authenticate('authenticator:phpAuth', {
				data: this.get('model'),
				action: 'register'
			}).success(function() {

			});
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
