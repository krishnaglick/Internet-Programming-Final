import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function() {
		if(!this.session.isAuthenticated) {
			this.transitionTo('point-me.login');
		}
	},
	setupController: function(controller, model) {
		var getPointsXHR = this.service('point-lister-service').getMyPoints(controller.get('session.token'));
		getPointsXHR.success(function(data) {
			controller.set('myPoints', data);
		});
		getPointsXHR.complete(function() {
			debugger;
		})
		controller.set('model', model);
	}
});
