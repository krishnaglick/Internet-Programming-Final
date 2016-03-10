<?php

//require slim framework
require 'Slim/Slim.php';
require 'auth.php';

//require orm and instantiate DB connection
include 'rb.php';
R::setup('mysql:host=localhost;dbname=group4', 'group4', 'cop4group4');

//autoload slim application
\Slim\Slim::registerAutoloader();

//instantiate slim
$app = new \Slim\Slim([
	'debug' => true
]);

//routes
$app->group('/user', function() use ($app) {
	$app->post('/register', function() use ($app) {
		$user = R::dispense('user');
		$user->username = $app->request()->post('username');
		$user->password = $app->request()->post('password');
		$user->email = $app->request()->post('email');
		$user->admin = $app->request()->post('admin');

		R::store($user);

		$app->response->body['token'] = createToken($user->id);
	});

	$app->post('/login', function() use ($app) {
		$user = R::find('user', 'username = :username and password = :password', array(
			'username' => $app->request()->post('username');
			'password' => $app->request()->post('password');
		));

		if($user != null) {
			$app->response->body['token'] = retrieveToken($user->id);
			$app->response->status = '200';
		}
		else {
			$app->response->headers['x-error-code'] = '1';
			$app->response->headers['x-error-error-message'] = 'Invalid User Credentials';
			$app->response->status = '404';
		}
	});
});

//run app on server
$app->run();
