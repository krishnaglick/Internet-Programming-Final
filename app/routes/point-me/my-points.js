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
			controller.set('myPoints', Ember.$.map(data, function(point) {
				if(point.userComment && point.location) {
					point.userComment = point.userComment.substr(0,120);
					point.location = point.location.substr(0,120);
				}
				return point;
			}));
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
