import Ember from 'ember';

var pointMeController = Ember.Controller.extend({
	appName: 'PointMe',
	shareActive: '',
	myPointsActive: '',
	actions: {
		share: function() {
			this.send('removeActiveMenuItems');
			this.transitionToRoute('point-me.share');
			Ember.$('.ui.sidebar').sidebar('toggle');
			this.set('session.menu.shareActive', 'active teal');
		},
		myPoints: function() {
			this.send('removeActiveMenuItems');
			this.transitionToRoute('point-me.my-points');
			Ember.$('.ui.sidebar').sidebar('toggle');
			this.set('session.menu.myPointsActive', 'active teal');
		},
		logout: function() {
			this.session.set('isAuthenticated', false);
			this.session.set('username', '');
			this.send('removeActiveMenuItems');
			this.transitionToRoute('point-me.login');
			Ember.$('.ui.sidebar').sidebar('toggle');
		},
		toggleSidebar: function() {
			Ember.$('.ui.sidebar').sidebar('toggle');
			Ember.$('#menuText').transition('fade right');
		},
		clearError: function() {
			this.set('session.message', '');
			this.set('session.messageTitle', '');
			Ember.$('#errorMessage').slideUp();
		},
		removeActiveMenuItems: function() {
			Ember.$('#sidebar > div.item').removeClass('active teal');
			this.set('session.menu.shareActive', '');
			this.set('session.menu.myPointsActive', '');
		}
	}
});

export default pointMeController;
