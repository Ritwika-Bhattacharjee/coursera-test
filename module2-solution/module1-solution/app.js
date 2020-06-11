(function(){
	'use strict';
	angular.module("LunchCheck", [])
	.controller("LunchCheckController", LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope){
		$scope.lunchItems = "";
		$scope.checkButton = "";
		$scope.displayArea = "";
		$scope.message = "";

		$scope.displayMessage = function(){
			if($scope.lunchItems.length==0){
				$scope.message = "Please enter data first";
			}
			else{
				const n = countWords($scope.lunchItems);

				if(n<=3){
					$scope.message = "Enjoy!";
				}else if(n>3){
					$scope.message = "Too much!";
				}
			}
			
			
		} 
		function countWords(string){
			const words = string.split(',');
			var len =  words.length;
			return len;
			
		}

	}
})();