import Ember from 'ember';
import DataRoute from 'ember-data-route/mixins/data-route';

var pointMeRoute = Ember.Route.extend(DataRoute, {
    beforeModel: function() {
        this.transitionTo('point-me.login');
    }
});

export default pointMeRoute;
