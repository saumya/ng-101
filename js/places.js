//version 1.0.0
//wrap in a closure, which is self executing
//(function(){})();
(function(){

var app = angular.module("placesModule",[]);

//controller

//Data
var allPlaces = [
{
	name:'Pune',
	state:'Maharashtra'
},
{
	name:'Bangalore',
	state:'Karnataka'
}
];
//directive
app.directive("allavailablePlaces",function(){
	return{
		restrict: 'E',
		templateUrl: 'html/places.html',
		controller: function(){
			this.places = allPlaces;
		},
		controllerAs: 'placesController'
	};
});


	
})();

