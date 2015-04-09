import Ember from 'ember';

var app = Ember.Controller.extend({
	imageUploader: Ember.inject.service('imageUploader'),	
	appName: 'PointMe',
	appTitle: 'Home',
	haveImage: '',
	loading: '',
	actions: {
		selectImage: function() {
			uploadAnImage.click();
		},
		uploadImage: function() {
			this.set('loading', 'loading');
			this.get('imageUploader').uploadImage(uploadAnImage.files[0], this.get('model'), this);
		},
		clearImage: function() {
			this.set('haveImage', '');
		},
		submitPointMe: function() {
			debugger;
			//this.get('model').save();
			//Need to learn me some saving right here.
		}
	}
});

export default app;