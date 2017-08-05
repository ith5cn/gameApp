'use strict';
angular.module('app').controller('newslistCtrl',['$scope','$http',function($scope,$http){
	$http.get('/data/gameclassify.json').then(function(res){
  		$scope.list = res.data;
  	});
  	$http.get('data/news.json').then(function(res){
  		$scope.newslist = res.data;
  	});
  	$http.get('data/gamehistory.json').then(function(res){
  		$scope.histroylist = res.data;
  	})
}])
