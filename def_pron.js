//Using dictionary api to define and pronounce words. 

//Need to make a request and get a response in XML format.

var define = function() {
	var xhr = new XMLHttpRequest();
	xhr.addEventListener("load", reqListener);
	xhr.open("GET", "http://www.dictionaryapi.com/api/v1/references/collegiate/xml/test?key=81d2524c-3e55-429a-9d73-da9fdf9d0951"); //wrapped in ${word}
	xhr.send(); //send request

	console.log(xhr.status);
	console.log(xhr.statusText);
}

define();

var reqListener = function(){
	console.log(this.responseText); //respontext is the "soup" of the html tags.
}

//pass word you want to define. 

//I will get it as XML I can manual parse and serealize to string or objects.
//maybe can use regexp.