import Ember from 'ember';

var pointMeController = Ember.Controller.extend({
	appName: 'PointMe',
	actions: {
		share: function() {
			this.send('removeActiveMenuItems');
			Ember.$('#menuNav#share').addClass('active teal');
			this.transitionToRoute('point-me.share');
			Ember.$('.ui.sidebar').sidebar('toggle');
		},
		myPoints: function() {
			this.send('removeActiveMenuItems');
			Ember.$('#menuNav#seeMyPoints').addClass('active teal');
			this.transitionToRoute('point-me.my-points');
			Ember.$('.ui.sidebar').sidebar('toggle');
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
			Ember.$('#menuNav.link.item').removeClass('active teal');
		}
	}
});

export default pointMeController;
