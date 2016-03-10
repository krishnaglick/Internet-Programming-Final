import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

var pointMeRoute = Ember.Route.extend(ApplicationRouteMixin, {
	beforeModel: function() {
		if(!this.session.isAuthenticated) {
			this.transitionTo('point-me.login');
		}
		Ember.$('#point-me-app .ui.sidebar').sidebar('setting', 'transition', 'overlay');

		this.set('session.menu', {});

		this.set('session.showMessage', (type, title, message) => {
            this.set('session.message', message);
            this.set('session.messageTitle', title);
            this.set('session.messageType', type);
            Ember.$('#errorMessage').slideDown();
		});
	}
});

export default pointMeRoute;
