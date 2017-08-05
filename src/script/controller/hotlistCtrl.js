'use strict';
angular.module('app').controller('hotlistCtrl', ['$scope','$http', function($scope,$http){
  $http.get('/data/gameclassify.json').then(function(res){
  	$scope.list = res.data;
  });
  $http.get('data/game.json').then(function(res){
  	var arr = new Array();
  	for(var i in res.data){
  		if(res.data[i].gameState == "hot")
  		{
  			arr.push(res.data[i]);
  			continue;
  		}
  	}
  	$scope.hotlist =arr;
  });
  $http.get('data/gamehistory.json').then(function(res){
  	$scope.histroylist = res.data;
  })
}]);