import Ember from 'ember';

export default Ember.Route.extend({
	setupController: function(controller) {
		controller.set('session.appTitle', 'Login');
		controller.set('isRegistering', false);
		controller.set('session.grid', 'sixteen wide mobile twelve wide tablet eight wide computer column');
	}
});
