import Ember from 'ember';

var shareController = Ember.Controller.extend({
	imageUploader: Ember.inject.service('image-uploader-service'),
	appTitle: 'Share a Point!',
	haveImage: '',
	loading: '',
	formValid: function() {
		return	this.get('model.friendsEmail')		&&
				this.get('model.userEmail')			&&
				this.get('model.location')			&&
				this.get('model.comment')			&&
				this.get('model.imgurLink')			&&
				this.get('model.imgurDeleteHash')	;
	}.property('model.friendsEmail', 'model.userEmail', 'model.location', 'model.comment', 'model.imgurLink', 'model.imgurDeleteHash'),
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
			function savePointMe(controller, model) {
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
					success: () => {
						controller.set('model', controller.store.createRecord('share', {}));
						controller.set('haveImage', '');
						this.get('session.showMessage')('positive', 'Point Sent', 'Your Point-Me was sent!');
					},
					error: (data) => {
						if(data.code === 401) {
							this.get('session.showMessage')('negative', 'Session Expired', 'Your session has expired, please login again!');
						}
						if(data.code === 500) {
							this.get('session.showMessage')('negative', 'System Error', 'There was a system error, please try again.');
						}
					}
				});
			}

			if(this.session.isAuthenticated && this.get('formValid')) {
				savePointMe(this, this.get('model'));
			}
		}
	}
});

export default shareController;
