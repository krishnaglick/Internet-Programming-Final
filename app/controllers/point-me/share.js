import Ember from 'ember';

var shareController = Ember.Controller.extend({
	imageUploader: Ember.inject.service('image-uploader-service'),
	appTitle: 'Share a Point!',
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
			if(this.session.isAuthenticated) {
				function sendRequest(controller, model) {
					Ember.$.ajax({
						type: "POST",
						dataType: "JSON",
						contentType: "application/json",
						url: 'http://cop4813.ccec.unf.edu/~group4/point_me.php/add',
						headers: {
							token: controller.get('session.token')
						},
						data: JSON.stringify({
							friendsEmail: model.get('friendsEmail'),
							userEmail: model.get('userEmail'),
							location: model.get('location'),
							userComment: model.get('comment'),
							imgurLink: model.get('imgurLink'),
							imgurDeleteHash: model.get('imgurDeleteHash')
						}),
						success: function(data) {
							controller.set('model', controller.store.createRecord('share', {}));
						}
					});
				}
				sendRequest(this, this.get('model'));
			}
		}
	}
});

export default shareController;
