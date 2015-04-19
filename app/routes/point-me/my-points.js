import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function() {
		if(!this.session.isAuthenticated) {
			this.transitionTo('point-me.login');
		}
	},
	setupController: function(controller, model) {
		var getPointsXHR = controller.get('pointLister').getMyPoints(controller.get('session.token'));
		getPointsXHR.success((data) => {
			controller.set('myPoints', data);
		});
		getPointsXHR.error((data) => {
			if(data.code === 401) {
				this.get('session.showMessage')('negative', 'Session Expired', 'Your session has expired, please login again!');
			}
			if(data.code === 500) {
				this.get('session.showMessage')('negative', 'System Error', 'There was a system error, please try again.');
			}
		});
		controller.set('session.appTitle', 'My Points');
		controller.set('model', model);
		controller.set('session.grid', 'sixteen wide mobile twelve wide tablet computer column');
	}
});
