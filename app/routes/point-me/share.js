import Ember from 'ember';
import DataRoute from 'ember-data-route/mixins/data-route';

export default Ember.Route.extend(DataRoute, {
	beforeModel: function() {
		if(!this.session.isAuthenticated) {
			this.transitionTo('point-me.login');
		}
	},
	model: function() {
		return this.store.createRecord('share', {});
	},
	setupController: function(controller, model) {
		controller.set('session.appTitle', 'Share a Point');
		controller.set('model', model);
		controller.set('session.grid', 'sixteen wide mobile twelve wide tablet eight wide computer column');
	}
});
