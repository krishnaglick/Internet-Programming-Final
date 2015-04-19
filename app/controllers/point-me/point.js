import Ember from 'ember';

var pointController = Ember.Controller.extend({
	pointLister: Ember.inject.service('point-lister-service'),
	actions: {
		deletePoint: function() {
			this.get('pointLister').deletePoint(this.get('model.imgurDeleteHash'), this.get('session.token'), this);
		}
	}
});

export default pointController;
