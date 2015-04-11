import Ember from 'ember';
import DataRoute from 'ember-data-route/mixins/data-route';

export default Ember.Route.extend(DataRoute, {
	beforeModel: function() {
		if(!('token' in window.sessionStore)) {
			this.transitionTo('point-me.login');
		}
	},
	model: function() {
		return this.store.createRecord('share', {});
	}
});
