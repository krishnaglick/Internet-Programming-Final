import Ember from 'ember';

export default Ember.Route.extend({
	setupController: function(controller) {
		controller.set('session.appTitle', 'Login');
		controller.set('isRegistering', false);
	}
});
