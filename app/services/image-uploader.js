import Ember from 'ember';

var imageUploader = Ember.Service.extend({
	name: 'imageUploader',
	injectIn: 'routes',
	availableIn: 'controllers',
	convertImageToBase64: function(file, callback) {
	    var reader = new FileReader();
	    reader.onload = callback;
	    reader.readAsDataURL(file);
	},
	uploadImage: function(image) {
		debugger;
	}
});

export default imageUploader;