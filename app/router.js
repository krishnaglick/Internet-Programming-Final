import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
	location: config.locationType,
	afterModel: function(){
		this.transitionTo('point-me.login');
	}
});

Router.map(function() {
	this.resource('point-me', {path: '/'}, function() {
		this.route('login');
		this.route('share');
	});
});

export default Router;
