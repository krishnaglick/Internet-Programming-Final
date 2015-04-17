import Ember from 'ember';

var authenticationService = Ember.Service.extend({
	name: 'authenticationService',
	injectIn: 'routes',
	availableIn: 'controllers',
	login: function(user) {
		if(user.username == '' || user.password == '') {
			return;
		}
		return Ember.$.ajax({
			type: "POST",
			dataType: "JSON",
			contentType: "application/json",
			url: 'http://cop4813.ccec.unf.edu/~group4/user.php/login',
			data: JSON.stringify({
				username: user.username,
				password: user.password
			})
		});
	},
	register: function(user) {
		return Ember.$.ajax({
			type: "POST",
			dataType: "JSON",
			contentType: "application/json",
			url: 'http://cop4813.ccec.unf.edu/~group4/user.php/register',
			data: JSON.stringify({
				username: user.username,
				password: user.password,
				email: user.email
			})
		});
	},
	createSession: function(controller, requestData) {
		controller.session.set('token', requestData.token);
		controller.session.username = controller.user.username;
		controller.session.set('isAuthenticated', true);
		controller.transitionToRoute('point-me.share');
		controller.set('user.username', '');
		controller.set('user.password', '');
		controller.set('user.email', '');
	}
});

export default authenticationService;
