'use strict';
angular.module('app').controller('newwlkCtrl',['$scope','$http',function($scope,$http){
	$http.get('/data/gameclassify.json').then(function(res){
  		$scope.list = res.data;
  	});
  	$http.get('data/game.json').then(function(res){
  	var arr = new Array();
  	for(var i in res.data){
  		if(res.data[i].gameState == "wlk")
  		{
  			arr.push(res.data[i]);
  			continue;
  		}
  	}
  		$scope.newwlklist =arr;
  	});
  	$http.get('data/gamehistory.json').then(function(res){
  		$scope.histroylist = res.data;
  	}	)
}])
