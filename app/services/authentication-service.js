import Ember from 'ember';

var authenticationService = Ember.Service.extend({
	name: 'authenticationService',
	injectIn: 'routes',
	availableIn: 'controllers'
});

export default authenticationService;
