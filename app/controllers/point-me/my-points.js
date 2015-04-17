import Ember from 'ember';

var myPointsController = Ember.ArrayController.extend({
	pointLister: Ember.inject.service('point-lister-service'),
	appTitle: 'My Points',
	myPoints: [],
	actions: {
		deletePoint: function(point) {
			debugger;
			this.get('pointLister').deletePoint(point);
		}
	}
});

export default myPointsController;
