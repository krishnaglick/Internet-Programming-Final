import Ember from 'ember';

var pointMeController = Ember.Controller.extend({
	appName: 'PointMe',
	actions: {
		share: function() {
			this.transitionToRoute('point-me.share');
			Ember.$('.ui.sidebar').sidebar('toggle');
		},
		myPoints: function() {
			this.transitionToRoute('point-me.myPoints');
			Ember.$('.ui.sidebar').sidebar('toggle');
		},
		logout: function() {
			this.session.set('isAuthenticated', false);
			this.session.set('username', '');
			this.transitionToRoute('point-me.login');
			Ember.$('.ui.sidebar').sidebar('toggle');
		},
		toggleSidebar: function() {
			Ember.$('.ui.sidebar').sidebar('toggle');
		},
		menuMouseover: function() {
			Ember.$('#menuText').transition('fade right');
		}
	}
});

export default pointMeController;
