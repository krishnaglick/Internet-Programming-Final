import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

var pointMeRoute = Ember.Route.extend(ApplicationRouteMixin, {
	beforeModel: function() {
		if(!this.session.isAuthenticated) {
			this.transitionTo('point-me.login');
		},
		Ember.$('#point-me-app .ui.sidebar').sidebar({
			context: Ember.$('#point-me-app')
		})
		.sidebar('attach events', '.ui.sidebar .item');
	}
});

export default pointMeRoute;
