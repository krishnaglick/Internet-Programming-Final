import Ember from 'ember';

var authenticationService = Ember.Service.extend({
	name: 'authenticationService',
	injectIn: 'routes',
	availableIn: 'controllers',
	login: function(data) {
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
	}
});

export default authenticationService;
