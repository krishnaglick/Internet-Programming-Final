import Ember from 'ember';

var app = Ember.Controller.extend({
	imageUploader: Ember.inject.service(),
	appName: 'PointMe',
	appTitle: 'Home',
	data: {
		friendsEmail: '',
		myEmail: '',
		address: '',
		comment: '',
		image: ''
	},
	imageSelected: function() {
		return this.get('data.image');
	}.property('data.image'),
	actions: {
		selectImage: function() {
			uploadAnImage.click();
		},
		uploadImage: function() {
			this.get('imageUploader').uploadImage(uploadAnImage.files[0]);
		},
		clearImage: function() {
			this.set('data.image', '');
		}
	}
});

export default app;