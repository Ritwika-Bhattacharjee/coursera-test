(function(){
	'use strict';
	angular.module("NameController", [])
	.controller("NameCalculatorController", function($scope){
		$scope.name = "";
		$scope.totalvalue = 0;

		$scope.displaynumeric = function(){
			var totalnamevalue = calculatenumericforstring($scope.name);
			$scope.totalvalue = totalnamevalue;
		}

		function calculatenumericforstring(string){
			var totalstringvalue = 0;
			for(var i=0; i<string.length; i++){
				totalstringvalue += string.charCodeAt(i);
			}
			return totalstringvalue;
		}

	});
})();