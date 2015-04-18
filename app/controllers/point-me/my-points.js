import Ember from 'ember';

var myPointsController = Ember.Controller.extend({
	pointLister: Ember.inject.service('point-lister-service'),
	appTitle: 'My Points',
	myPoints: []
});

export default myPointsController;
