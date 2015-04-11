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
            this.get('authenticationService').login(this.data)
			.success(function(data) {
				this.session.set('token', data.token);
				this.session.set('isAuthenticated', true);
				this.transitionToRoute('point-me.share');
			}.bind(this));
        },
        register: function() {
			this.get('authenticationService').register(this.data)
			.success(function(data) {
				this.session.set('token', data.token);
				this.session.isAuthenticated = true;
				this.transitionToRoute('point-me.share');
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
