var readingBuddy = angular.module('readingBuddy', ['angularAudioRecorder']);


readingBuddy.config(['recorderServiceProvider', function(recorderServiceProvider){

}]);


readingBuddy.run(function($rootScope){

	$rootScope.test = function(){
		console.log('test');
	}

	$rootScope.test2 = function(){
		console.log('test2');
	}


});