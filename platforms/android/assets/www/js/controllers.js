angular.module('starter.controllers', [])

.controller('MultiCtrl', function($scope) {
	function onDeviceReady(){
		$scope.friends = Friends.all();
		$scope.$apply();
	}
})

.controller('SingleCtrl', function($scope, Friends) {
	function onDeviceReady(){
		$scope.friends = Friends.all();
		$scope.$apply();
	}
});

