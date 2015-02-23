function AppCtrl($scope, $http) {
	console.log("Hello World from AppCtrl")

	$http.get('/superherocontacts').success(function(response){
		console.log("I got the data i requested");
		$scope.superheros = response;
	})

	$scope.addContact=function(){
		console.log($scope.newsuperhero);
		$http.post('/superherocontacts', $scope.newsuperhero).success(function(response){
			console.log(response);
		});
	}
}