import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function() {
		if(!this.session.isAuthenticated) {
			this.transitionTo('point-me.login');
		}
	},
	setupController: function(controller, model) {
		var getPointsXHR = controller.get('pointLister').getMyPoints(controller.get('session.token'));
		getPointsXHR.success(function(data) {
			controller.set('myPoints', data);
		});
		controller.set('session.appTitle', 'My Points');
		controller.set('model', model);
	}
});
