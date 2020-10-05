(function () {
	'use strict';

	angular.module('LunchCheck', [])

	.controller('LunchCheckController', LunchCheckController);

		LunchCheckController.$inject=['$scope'];
			function LunchCheckController ($scope){
				$scope.lunchitems = function(){
					var message = "Please enter the data";
					if($scope.lunch!="" && $scope.lunch!=null &&
							$scope.lunch!=undefined){
						if($scope.lunch.split(',').length<=3 ){
								message = "Enjoy!";
						}
						else{
								message = "Too Much!";
						}
					}	
					$scope.result = message;	
				}
			}
})();
