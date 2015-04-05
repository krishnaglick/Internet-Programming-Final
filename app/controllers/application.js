import Ember from 'ember';

var app = Ember.Controller.extend({
	imageUploader: Ember.inject.service(),
	appName: 'PointMe',
	appTitle: 'Home',
	noResize: function() {return 'resize: none;';},
	actions: {
		uploadImage: function() {
			this.get('imageUploader').uploadImage();
		}
	}
});

export default app;