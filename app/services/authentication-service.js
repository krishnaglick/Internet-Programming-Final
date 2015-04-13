import Ember from 'ember';

var authenticationService = Ember.Service.extend({
	name: 'authenticationService',
	injectIn: 'routes',
	availableIn: 'controllers',
	login: function(data) {
		if(data.username == '' || data.password == '') {
			return;
		}
		return Ember.$.ajax({
			type: "POST",
			dataType: "JSON",
			contentType: "application/json",
			url: 'http://cop4813.ccec.unf.edu/~group4/user.php/login',
			data: JSON.stringify({
				username: data.username,
				password: data.password
			})
		});
	},
	register: function(data) {
		return Ember.$.ajax({
			type: "POST",
			dataType: "JSON",
			contentType: "application/json",
			url: 'http://cop4813.ccec.unf.edu/~group4/user.php/register',
			data: JSON.stringify({
				username: data.username,
				password: data.password,
				email: data.email
			})
		});
	},
	createSession: function(controller, requestData) {
		controller.session.set('token', requestData.token);
		controller.session.username = controller.data.username;
		controller.session.set('isAuthenticated', true);
		controller.transitionToRoute('point-me.share');
	}
});

export default authenticationService;
