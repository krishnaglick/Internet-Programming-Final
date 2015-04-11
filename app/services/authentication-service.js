import Ember from 'ember';

var authenticationService = Ember.Service.extend({
	name: 'authenticationService',
	injectIn: 'routes',
	availableIn: 'controllers',
	login: function(model, router) {
		return Ember.$.ajax({
			type: "POST",
			dataType: "JSON",
			contentType: "application/json",
			url: 'http://cop4813.ccec.unf.edu/~group4/user.php/login',
			data: JSON.stringify({
				username: model.get('username'),
				password: model.get('password')
			}),
			success: function(data) {
				//sessionStore.token = data.token;
				//router.transitionTo('point-me.share');
			}
		});
	},
	register: function(model, router) {
		return Ember.$.ajax({
			type: "POST",
			dataType: "JSON",
			contentType: "application/json",
			url: 'http://cop4813.ccec.unf.edu/~group4/user.php/register',
			data: JSON.stringify({
				username: model.get('username'),
				password: model.get('password'),
				email: model.get('email')
			}),
			success: function(data) {
				//sessionStore.token = data.token;
				//router.transitionTo('point-me.share');
			}
		});
	}
});

export default authenticationService;
