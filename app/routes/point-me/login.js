import Ember from 'ember';

export default Ember.Route.extend({
	setupController: (controller) => {
		controller.set('session.appTitle', 'Login');
	}
});
