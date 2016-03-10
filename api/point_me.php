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
$app->group('/point_me', function() use ($app) {
	$app->post('/add', function() use ($app) {
		if(isValidToken($app->request()->headers['token'])) {
			//create and save new point me object
			$pointMe = R::dispense('point_me');
			$pointMe->user_id = getUserId($app->request()->headers['token']);
			$pointMe->title = $app->request()->post('title');
			$pointMe->description = $app->request()->post('description');
			$pointMe->message = $app->request()->post('message');
			$pointMe->email = $app->request()->post('email');
			$pointMe->address = $app->request()->post('address');
			$pointMe->imgur_id = $app->request()->post('imgurId');

			R::store($pointMe);

			//create email text based on new info
			//send email to friend, cc sender?
		}
	});

	$app->get('/get/:userId', function($userId) use ($app) {
		if(isValidToken($app->request()->headers['token'])) {
			if(isUserAdmin($app->request()->headers['token'])) {
				$app->response->headers['Content-Type'] = 'application/json';
				$app->response->status = '200';

				$pointMes = R::getAll("Select * from point_me");
				echo json_encode($pointMes);
			}
			else {
				$app->response->headers['x-error-code'] = '2';
				$app->response->headers['x-error-error-message'] = 'User is not an adminstrator';
				$app->response->status = '404';
			}
		}
		else {
			$app->response->headers['x-error-code'] = '3';
			$app->response->headers['x-error-error-message'] = 'Invalid User Token';
			$app->response->status = '404';
		}
	});

	$app->delete('/delete/:pointMeId', function($pointMeId) use ($app) {

		if(isValidToken($app->request()->headers['token'])) {
			if(isUserAdmin($app->request()->headers['token'])) {
				$app->response->status = '200';
				
				$pointMe = R::load('point_me', $pointMeId);
				R::trash($pointMe);
			}
			else {
				$app->response->headers['x-error-code'] = '2';
				$app->response->headers['x-error-error-message'] = 'User is not an adminstrator';
				$app->response->status = '404';
			}
		}
		else {
			$app->response->headers['x-error-code'] = '3';
			$app->response->headers['x-error-error-message'] = 'Invalid User Token';
			$app->response->status = '404';
		}
	});
});

//run app on server
$app->run();
