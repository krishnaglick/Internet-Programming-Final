import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
	location: config.locationType,
	afterModel: () => {
		this.transitionTo('point-me');
	}
});

Router.map(function() {
	this.resource('point-me', function() {
		this.route('login');
		this.route('share');
		this.route('my-points');
	});
});

export default Router;
