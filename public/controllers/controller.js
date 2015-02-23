function AppCtrl($scope) {
	console.log("Hello World from AppCtrl")

	superhero1 = {
		"name" : "Ironman",
    	"email" : "ironman@avengers.org",
    	"number" : "(A1) 111-1111"
	};

	superhero2 = {
		"name" : "Hulk",
	    "email" : "hulk@avengers.org",
	    "number" : "(A2) 222-2222"
	};
	
	superhero3 = {
		"name" : "Thor",
	    "email" : "thor@avengers.org",
	    "number" : "(A3) 333-3333"
	};
	
	var superheros = { superhero1, superhero2, superhero3}
	$scope.superheros = superheros;
}