import Ember from 'ember';

var pointController = Ember.Controller.extend({
	pointLister: Ember.inject.service('point-lister-service'),
	point: [],
	actions: {
		deletePoint: function(point) {
			debugger;
			this.get('pointLister').deletePoint(point);
		}
	}
});

export default pointController;
