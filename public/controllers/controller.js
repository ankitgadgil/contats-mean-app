function AppCtrl($scope, $http) {
	console.log("Hello World from AppCtrl")

	var refresh = function()
	{
		//this sends a REST request to the server for data gets a response from server
		$http.get('/superherocontacts').success(function(response){
			console.log("I got the data i requested");
			$scope.superheros = response;
			$scope.newsuperhero = {}; //clear input boxes
		});
	}

	refresh();

	$scope.addContact=function(){
		console.log($scope.newsuperhero);
		$http.post('/superherocontacts', $scope.newsuperhero).success(function(response){
			console.log(response);
			refresh();
		});
	}
}