import Ember from 'ember';

var shareController = Ember.Controller.extend({
	imageUploader: Ember.inject.service('imageUploader'),
	appTitle: 'Home',
	haveImage: '',
	loading: '',
	actions: {
		selectImage: function() {
			Ember.$('#uploadAnImage').click();
		},
		uploadImage: function() {
			this.set('loading', 'loading');
			this.get('imageUploader').uploadImage(Ember.$('#uploadAnImage')[0].files[0], this.get('model'), this);
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

export default shareController;
