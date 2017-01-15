//Run while reader is reading.

var filter = function (raw_txt) {
	return raw_txt.replace("-"," ").replace(/[^a-zA-Z ]/g, "").toLowerCase();
};

//return result will be passed to logic.js.

//Calculate accuracy

var cal_acc = function (original, result) {
	//Given array of reds and yellow.
	//original
	var score = original.length;
	for (i = 0; i < result.length; i++) {
		if (result[i].color == 0) { //red
			score = score - 1;
			//saying extra words will dock you another red. 
		} else {
			//yellow
			score = score - 0.5; 
		}
	}
	return score/original.length;
}


