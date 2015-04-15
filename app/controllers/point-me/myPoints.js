import Ember from 'ember';

var myPointsController = Ember.Controller.extend({
	pointLister: Ember.inject.service('point-lister-service'),
	appTitle: 'My Points',
	myPoints: [],
	actions: {
		deletePoint: function(point) {
			this.get('pointLister').deletePoint(point);
		}
	}
});

export default myPointsController;
