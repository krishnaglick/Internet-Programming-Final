import Ember from 'ember';
import DataRoute from 'ember-data-route/mixins/data-route';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';


export default Ember.Route.extend(DataRoute, {
	beforeModel: function() {
		if(!this.session.isAuthenticated) {
			this.transitionTo('point-me.login');
		}
	},
	model: function() {
		return this.store.createRecord('share', {});
	}
});
