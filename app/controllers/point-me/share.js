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
			if('token' in window.sessionStore) {
				Ember.$.ajax({
					type: "POST",
					dataType: "JSON",
					contentType: "application/json",
					url: 'http://cop4813.ccec.unf.edu/~group4/user.php/register',
					headers: {
						token: window.sessionStore.token
					},
					data: JSON.stringify({
						username: '',
						password: '',
						email: ''
					}),
					success: function(data) {
						window.sessionStore.token = data.token;
					}
				});
			}
			//Post my model to PHP backend
		}
	}
});

export default shareController;
