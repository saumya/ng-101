//version 1.0.0
//wrap in a closure, which is self executing
//(function(){})();
(function(){

//var app = angular.module("myApplication",[]);
var app = angular.module("myApplication",['ngRoute','placesModule']);

//config : Route
app.config(function($routeProvider){
//For Pretty URLs, use $locationProvider as below
//app.config(function($routeProvider,$locationProvider){
	
	$routeProvider
		.when("/",
			{
				controller: "ApplicationController",
				templateUrl: "html/partials/viewOne.html"	
			})
		.when("/3",
			{
				controller: "ApplicationController",
				templateUrl: "html/partials/viewThree.html"
			})
		.otherwise({ redirectTo: "/"});

		//pretty URLs with HTML5 history API
		//$locationProvider.html5Mode(true);
});


//controller
//app.controller('name',function(){});
app.controller('ApplicationController', function($scope,$http,$log){
	console.log('ApplicationController : init : ');	
	//Data
	$scope.persons = [
						{
							firstName:'saumya',
							lastName:'ray'
						},
						{
							firstName:'John',
							lastName:'Joe'
						},
						{
							firstName:'Julia',
							lastName:'Jene'
						}
					];
	//console.log(persons);
	$scope.testData = "Will be updated soon.";
	//get the method exposed to the View
	$scope.getWeather =  function(){
		console.log('Getting Weather');
		
		var that = this;//save the scope, the age old Trick

		var u = 'http://api.openweathermap.org/data/2.5/weather?id=2172797';
		$http.get(u).success(function(data){
			//that.weather = data;
			//console.log(data);
			that.testData = data;//store the data to the scope
		});
	};
});
//defining directive
//app.directive("name",function(){return{};});
//Element directive
app.directive("dOne",function(){
	return{
		restrict: 'E',
		templateUrl: 'html/directive-world.html'
	};
});
//atribute directive
app.directive("dattribOne",function(){
	return{
		restrict: 'A',
		templateUrl: 'html/directive-world.html'
	};
});
//directive with controller
app.directive("dwController",function(){
	return{
		restrict: 'E',
		templateUrl: 'html/directiveWithController.html',
		controller: function(){
			this.myName ='Directive Controller Data';
		},
		controllerAs: 'myFirstDirectiveController'
	};
});

	
})();

