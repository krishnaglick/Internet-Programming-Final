import Ember from 'ember';

var pointLister = Ember.Service.extend({
	name: 'pointLister',
	injectIn: 'routes',
	availableIn: 'controllers',
	getMyPoints: function(authToken) {
		if(authToken) {
			return Ember.$.ajax({
				type: "POST",
				dataType: "JSON",
				contentType: "application/json",
				url: 'http://cop4813.ccec.unf.edu/~group4/point_me.php/get',
				headers: {
					token: authToken
				}
			});
		}
	},
	deletePoint: function(point) {
		debugger;
	}
});

export default pointLister;