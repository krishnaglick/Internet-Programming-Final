import Ember from 'ember';

var loginController = Ember.Controller.extend({
	authenticationService: Ember.inject.service('authenticationService'),
	isRegistering: false,
	loading: '',
	user: {
		username: '',
		password: '',
		email: ''
	},
    canLogin: function() {
        return  this.get('user.username') &&
                this.get('user.password');
    }.property('user.username', 'user.password'),
    canRegister: function() {
        return  this.get('canLogin')    &&
                this.get('user.email')  ;
    }.property('canLogin', 'user.email'),
	actions: {
        login: function() {
            if(this.get('canLogin')) {
            	this.set('loading', 'loading');
                var authXHR = this.get('authenticationService').login(this.user);
                if(authXHR) {
                	authXHR.success((data) => {
                		this.get('authenticationService').createSession(this, data);
                        this.get('session.showMessage')('positive', 'Logged In', 'Welcome to Point-Me!');
                        Ember.$('#menuNav#share').addClass('active teal');
                	});
                    authXHR.error((data) => {
                        if(data.status === 404) {
                            this.get('session.showMessage')('negative', 'Invalid Credentials', 'Incorrect username or password');
                        }
                        if(data.status === 500) {
                            this.get('session.showMessage')('negative', 'System Error', 'There was a system error, please try again.');
                        }
                    });
                	authXHR.complete(() => {
                		this.set('loading', '');
                	});
    			}
            }
        },
        register: function() {
            if(this.get('canRegister')) {
            	this.set('loading', 'loading');
                var authXHR = this.get('authenticationService').register(this.user);
                if(authXHR) {
                	authXHR.success((data) => {
                		this.get('authenticationService').createSession(this, data);
                        this.get('session.showMessage')('positive', 'Account Created', 'Welcome to Point-Me!');
                        Ember.$('#menuNav#share').addClass('active teal');
                	});
                    authXHR.error((data) => {
                        if(data.status === 409) {
                            this.get('session.showMessage')('negative', 'Duplicate Account', 'An account already exists with that username, please choose another!');
                        }
                        if(data.status === 500) {
                            this.get('session.showMessage')('negative', 'System Error', 'There was a system error, please try again.');
                        }
                    });
                	authXHR.complete(() => {
                		this.set('loading', '');
                	});
    			}
            }
        },
		createAccount: function() {
			this.set('isRegistering', true);
			this.set('session.appTitle', 'Register');
		},
		cancelCreateAccount: function() {
			this.set('isRegistering', false);
			this.set('session.appTitle', 'Login');
		},
        enterAction: function() {
            if(this.get('isRegistering')) {
                this.send('register');
            }
            else {
                this.send('login');
            }
        }
	}
});

export default loginController;