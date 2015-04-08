<?php

//require orm and instantiate DB connection
include 'rb.php';
R::setup('mysql:host=localhost;dbname=group4', 'group4', 'cop4group4');

//functions
function createToken($userId) {
	$token = R::dispense('token');
	$token->user_id = $userId;
	$token->token = generateToken();
	$token->expires_at = strtotime("+20 minutes");
	R::store($token);

	return $token->token;
}

function retrieveToken($userId) {
	$tokens = R::find('token', 'user_id = ?', [$userId]);
	R::trashAll($tokens);
	return createToken($userId);
}

function isValidToken($authToken) {
	$token = R::find('token', 'token = ?', [$authToken]);

	if($token != null) {
		if(strtotime("+20 minutes") >= $token->expires_at) {
			$token->expires_at = strtotime("+20 minutes");
			return true;
		}
	}

	return false;
}

function isUserAdmin($authToken) {
	$token = R::find('token', 'token = ?', [$authToken]);

	if($token != null) {
		$user = R::load('user', $token->user_id);

		if($user != null) {
			return intval($user->admin) != 0;
		}
	}

	return false;
}

function getUserId($authToken) {
	$token = R::find('token', 'token = ?', [$authToken]);

	if($token != null) {
		return $token->user_id;
	}

	return false;
}

//utility functions
function generateToken() {
	//TODO: return random string
	return "token";
}
