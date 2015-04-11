import Ember from 'ember';

var authenticationService = Ember.Service.extend({
	name: 'authenticationService',
	injectIn: 'routes',
	availableIn: 'controllers',
	login: function(model) {
		return Ember.$.ajax({
			type: "POST",
			dataType: "JSON",
			contentType: "application/json",
			url: 'http://cop4813.ccec.unf.edu/~group4/user.php/login',
			data: JSON.stringify({
				username: model.get('username'),
				password: model.get('password')
			})
		});
	},
	register: function(model) {
		return Ember.$.ajax({
			type: "POST",
			dataType: "JSON",
			contentType: "application/json",
			url: 'http://cop4813.ccec.unf.edu/~group4/user.php/register',
			data: JSON.stringify({
				username: model.get('username'),
				password: model.get('password'),
				email: model.get('email')
			})
		});
	}
});

export default authenticationService;
