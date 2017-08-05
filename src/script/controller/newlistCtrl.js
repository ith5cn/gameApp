'use strict';
angular.module('app').controller('newlistCtrl',['$scope','$http',function($scope,$http){
	 $http.get('/data/gameclassify.json').then(function(res){
  		$scope.list = res.data;
  	});
  	$http.get('data/game.json').then(function(res){
  	var arr = new Array();
  	for(var i in res.data){
  		if(res.data[i].gameState == "new")
  		{
  			arr.push(res.data[i]);
  			continue;
  		}
  	}
  		$scope.newlist =arr;
  	});
  $http.get('data/gamehistory.json').then(function(res){
  	$scope.histroylist = res.data;
  })
}]);