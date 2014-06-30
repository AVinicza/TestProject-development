angular.module('starter.controllers', [])

.controller('MultiCtrl', function($scope) {
})

.controller('SingleCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
});

