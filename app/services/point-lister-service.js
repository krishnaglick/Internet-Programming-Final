import Ember from 'ember';

var pointLister = Ember.Service.extend({
	name: 'pointLister',
	injectIn: 'routes',
	availableIn: 'controllers',
	getMyPoints: function(authToken) {
		if(authToken) {
			return Ember.$.ajax({
				type: "GET",
				dataType: "JSON",
				contentType: "application/json",
				url: 'http://cop4813.ccec.unf.edu/~group4/point_me.php/get',
				headers: {
					token: authToken
				}
			});
		}
	},
	deletePoint: function(pointDeleteHash, authToken, controller) {
		if(pointDeleteHash) {
			Ember.$.ajax({
				type: 'POST',
				dataType: 'json',
				url: 'https://api.imgur.com/3/image/' + pointDeleteHash,
				headers: {
					Authorization: 'Client-ID f051940ab101721'
				}
			}).success(() => {
				Ember.$.ajax({
					type: "GET",
					dataType: "JSON",
					contentType: "application/json",
					url: 'http://cop4813.ccec.unf.edu/~group4/point_me.php/delete/' + pointDeleteHash,
					headers: {
						token: authToken
					}
				}).success(() => {
					controller.get('session.showMessage')('positive', 'Point Deleted', 'Point Was Deleted.');
				}).error((data) => {
					if(data.code === 401) {
						controller.get('session.showMessage')('negative', 'Session Expired', 'Your session has expired, please login again!');
					}
					if(data.code === 404) {
						controller.get('session.showMessage')('negative', 'Point Not Found', 'The point was not found, it was probably already deleted. Please refresh the page.');
					}
					if(data.code === 500) {
						controller.get('session.showMessage')('negative', 'System Error', 'There was a system error, please try again.');
					}
				}).complete(() => {
					controller.parentController.get('myPoints').removeObject(controller.get('model'));
				});
			}).error(() => {
				controller.get('session.showMessage')('negative', 'Error When Deleting Point', 'Please refresh the page.');
			});
		}
	}
});

export default pointLister;