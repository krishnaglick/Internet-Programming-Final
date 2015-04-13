import Ember from 'ember';

var pointMeController = Ember.Controller.extend({
	appName: 'PointMe',
	actions: {
		logout: function() {
			this.session.set('isAuthenticated', false);
			this.session.set('username', '');
			this.transitionToRoute('point-me.login');
		}
	}
});

export default pointMeController;
