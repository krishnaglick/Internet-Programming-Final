import Ember from 'ember';

var imageUploader = Ember.Service.extend({
	name: 'imageUploader',
	injectIn: 'routes',
	availableIn: 'controllers',
	convertImageToBase64: function(file, callback) {
	    var reader = new FileReader();
	    reader.onload = function() { callback(reader) };
	    reader.readAsDataURL(file);
	},
	uploadImage: function(image) {
		this.get('convertImageToBase64')(image, function(base64Image) {
			$.ajax({
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
				//Do things with data
			});
		});
	}
});

export default imageUploader;