import Base from 'simple-auth/authenticators/base';

var phpAuth = Base.extend({
    restore: function(data) {
        return new Ember.RSVP.Promise(function(resolve, reject) {
            resolve(data);
            reject();
        });
    },
    authenticate: function(options) {

    },
    invalidate: function(data) {

    }
});

export default phpAuth;
