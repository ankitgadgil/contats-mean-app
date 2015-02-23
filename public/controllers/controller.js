function AppCtrl($scope, $http) {
	console.log("Hello World from AppCtrl")

	var refresh = function()
	{
		//this sends a REST request to the server for data gets a response from server
		$http.get('/superherocontacts').success(function(response){
			console.log("I got the data requested");
			$scope.superheros = response;
			$scope.newsuperhero = {}; //clear input boxes
		});
	}

	refresh();

	$scope.addSuperhero = function(){
		console.log($scope.newsuperhero);
		$http.post('/superherocontacts', $scope.newsuperhero).success(function(response){
			console.log(response);
			refresh();
		});
	}

	$scope.removeSuperhero = function(id){
		console.log(id);
		$http.delete('/superherocontacts/' + id).success(function(response){
			console.log(response);
			refresh();
		})
	}

	$scope.editSuperhero = function (id){
		console.log(id);
		$http.get('/superherocontacts/' + id).success(function(response){
			$scope.newsuperhero = response; //makes to be edited superhero details show up in inputboxes
			$scope.editFlag = true;
		})
	}

	$scope.updateSuperhero = function() {
		console.log($scope.newsuperhero._id);

		//everything in the contact boxes will be transmitted to server
		$http.put('/superherocontacts/' + $scope.newsuperhero._id, $scope.newsuperhero).success(function(response){
			refresh()
			$scope.editFlag = false;
		})
	}

	var reset = function() {
		$scope.newsuperhero = {};
	}

	$scope.deselect = function () {
		reset();
		$scope.editFlag = false;
	}
}