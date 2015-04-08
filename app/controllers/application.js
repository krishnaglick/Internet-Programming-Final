import Ember from 'ember';

var app = Ember.Controller.extend({
	imageUploader: Ember.inject.service('imageUploader'),	
	appName: 'PointMe',
	appTitle: 'Home',
	friendsEmail: '',
	myEmail: '',
	address: '',
	comment: '',
	image: '',
	actions: {
		selectImage: function() {
			uploadAnImage.click();
		},
		uploadImage: function() {
			this.get('imageUploader').uploadImage(uploadAnImage.files[0]);
		},
		clearImage: function() {
			this.set('image', '');
		},
		submitPointMe: function() {
			debugger;
		}
	}
});

export default app;