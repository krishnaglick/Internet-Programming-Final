import Ember from 'ember';

var imageUploader = Ember.Service.extend({
	name: 'imageUploader',
	injectIn: 'routes',
	availableIn: 'controllers',
	convertImageToBase64: function(file, callback) {
	    var reader = new FileReader();
	    reader.onload = function() { callback(reader); };
	    reader.readAsDataURL(file);
	},
	uploadImage: function(image, pointMeModel, pointMeController) {
		this.get('convertImageToBase64')(image, function(base64Image) {
			Ember.$.ajax({
				type: 'POST',
				dataType: 'json',
				url: 'https://api.imgur.com/3/image',
				headers: {
					Authorization: 'Client-ID f051940ab101721'
				},
				data: {
					image: base64Image.result.split(',')[1],
				}
			}).success(function(data) {
				pointMeModel.set('imgurLink', data.data.link);
				pointMeModel.set('imgurDeleteHash', data.data.deletehash);
			}).complete(function() {
				pointMeController.set('loading', '');
			});
		});
	}
});

export default imageUploader;