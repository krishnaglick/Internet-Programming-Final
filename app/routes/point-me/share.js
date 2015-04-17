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
	setupController: (controller) => {
		controller.set('session.appTitle', 'Share a Point');
	}
});
