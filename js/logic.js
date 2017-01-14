//This js file is the logic for: given an original paragraph string, and a speech to text returned paragraph string, will compare them and determine which user error it is. Accounts for the "Yellow" color code, and "Red" color code. Repeating words, skipping words, adding extra words.

//Green not set; default green, Yellow = 1, Red = 0; 
//ErrMsg: Repeat = 0, Add = 1, Skip = 2, Incorrect compeletely = 3 (program logic to check chap list for this case !! [TODO]).

//What do I return back to front end?
//Message string for error if there is one.
//Index int of word in original paragraph.
//Color code for the string index.

//Data structure: Order matters so index, (int to string for color code) Array? [] or Object? {} of color code arrays? send back in json format?

//RETURNING OBJECT IN JSON NOTATION!

(function(){
	'use strict';

	//Recursive checking functions.
	//Wreck cars checking functions. (Case where one word becomes two.)
	//Re Recursive checking functions functions. (Redundant humans. Don't pick original paragraphs with repeats.)
	//Recursive functions. (Case where you skipped a word. Code Red.)

	//YELLOW: return boolean
	//when called its already confirmed there is adding.
	var ck_repeat = function (original, user) {
		//User error, don't repeat words, yellow as warning.
		//Message in evaluation to not repeat and offer pronouciation.

	};

	//RED: return boolean
	var ck_skipping = function (original, user) {

	};

	//YELLOW: return boolean
	//repeat logic is same... should just combine and det. if it is repeat or not later.
	var ck_adding = function (original, user) {
		if (original[0] === user[0]) { //o: "i saw (a dog)"; u: "i saw (a blue dog)"
			return original[1] === user[2];
		} //o: "(i) saw a dog"; u: "(but i) saw a dog"
		return original[0] === user[1];
	};

	//Only check first portion of this array, add into the result array.
	//Return an int that tells you how much you add to users' current pointer, and start back comparing there.
	var check = function (i, original, user) {
		//calls other ck functions.
		//check repeat first 
		if (ck_adding(original, user)) {
			result.push({index: i, err_msg: 1, color: 1}); //skipped, and yellow.
		} else if (ck_repeat(original, user)) {
			result.push({index: i, err_msg: 0, color: 1});
		} else if (ck_skipping(original, user)) {
			result.push({index: i, err_msg: 2, color: 0});
		} else { //you're just wrong
			result.push({index: i, err_msg: 3, color: 0});
		}
		//logic for if none of top and next is correct the its just wrong. 
		//call something to give me a list of potential other top words for that index of users' speech.
	};

	//load your variables here, contained.
	var init = function(original_, user_) {

		var i = 0;
		var u = 0;
		var original = original_.split(" ");//"Your original paragraph here.";
		var user = user_.split(" ");//"Whatever the API said the user read your paragraph as.";
		var result = [];//index is nth word. Can just push to this.
		//{index: 18, color: 0}, {index: 74, err_msg: 1, color: 1} //means 74th index word is yellow because of reason in index 1.

		//check syntax for &&
		while((1 < original.length) && (u < user.length)) {
			if (original[i] != user[u]) { //don't match? check.
				if (i == 0) { //First word doesnt have previous word.
					u += check(i, original, user); //send the whole thang.
				} else {
					u += check(i, original.slice(i-1, original.length), user.slice(i-1, user.length));
				}
				//check(original.slice(i-1,i+2), user.slice(i-1,i+2))
			} else { //increment both since they match
				++u;
			}
			++i;
		}
	};

	$(init());

}());