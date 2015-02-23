function AppCtrl($scope, $http) {
	console.log("Hello World from AppCtrl")

	$http.get('/contactlist').success(function(response){
		console.log("I got the data i requested");
		$scope.superheros = response;
	})
}