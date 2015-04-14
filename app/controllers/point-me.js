import Ember from 'ember';

var pointMeController = Ember.Controller.extend({
	appName: 'PointMe',
	actions: {
		share: function() {
			this.transitionToRoute('point-me.share');
		},
		myPoints: function() {
			this.transitionToRoute('point-me.myPoints');
		},
		logout: function() {
			this.session.set('isAuthenticated', false);
			this.session.set('username', '');
			this.transitionToRoute('point-me.login');
			Ember.$('.ui.sidebar').sidebar('toggle');
		},
		toggleSidebar: function() {
			Ember.$('.ui.sidebar').sidebar('toggle');
		}
	}
});

export default pointMeController;
