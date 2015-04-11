import Ember from 'ember';
import DataRoute from 'ember-data-route/mixins/data-route';

export default Ember.Route.extend(DataRoute, {
	model: function() {
		return this.store.createRecord('authentication', {});
	}
});
