//This js file is the logic for: given an original paragraph string, and a speech to text returned paragraph string, will compare them and determine which user error it is. Accounts for the "Yellow" color code. Repeating words, skipping words, adding extra words.

(function(){
	'use strict';

	var ck_repeat = function (original, user) {

	};

	var ck_skipping = function (original, user) {

	};

	var ck_adding = function (original, user) {

	};

	//load your variables here, contained.
	var init = function() {

		var original = "Your original paragraph here.";
		var user = "Whatever the API said the user read your paragraph as.";

		ck_adding(original, user);
		ck_repeat(original, user);
		ck_skipping(original, user);
	};

	$(init());
	
}());