import Ember from 'ember';

var myPointsController = Ember.ArrayController.extend({
	pointLister: Ember.inject.service('point-lister-service'),
	appTitle: 'My Points',
	myPoints: []
});

export default myPointsController;
