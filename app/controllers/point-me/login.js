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
                        this.set('session.message', 'Welcome to Point-Me!');
                        this.set('session.messageTitle', 'Logged In');
                        Ember.$('#errorMessage').slideDown();
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
                        this.set('session.message', 'Welcome to Point-Me!');
                        this.set('session.messageTitle', 'Account Created');
                        Ember.$('#errorMessage').slideDown();
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
