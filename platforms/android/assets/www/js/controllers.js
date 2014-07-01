angular.module('starter.controllers', [])

.controller('MultiCtrl', function($scope, Friends) {
	document.addEventListener("contactsLoaded", function(){
		$scope.friends = Friends.all();
		if(!$scope.$$phase) {
		  $scope.$apply();
		}
	},
	false);
	$scope.friends = Friends.all();
})

.controller('SingleCtrl', function($scope, Friends) {
	document.addEventListener("contactsLoaded", function(){
		$scope.friends = Friends.all();
		if(!$scope.$$phase) {
		  $scope.$apply();
		}
	},
	false);
	$scope.friends = Friends.all();
});

