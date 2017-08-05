'use strict';

angular.module('app').config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	//配置路由
	$stateProvider.state('hotlist',{
		url:'/hotlist', //哈希值
		templateUrl:'view/hotlist.html', //模板
		controller:'hotlistCtrl'  //控制器
	}).state('newlist',{
		url:'/newlist', //哈希值
		templateUrl:'view/newlist.html', //模板
		controller:"newlistCtrl"
	}).state('newslist',{
		url:'/newslist', //哈希值
		templateUrl:'view/newslist.html', //模板
		controller:"newslistCtrl"
	}).state('newwlk',{
		url:'/newwlk', //哈希值
		templateUrl:'view/newwlk.html', //模板
		controller:"newwlkCtrl"
	}).state('giftlist',{
		url:'/giftlist', //哈希值
		templateUrl:'view/giftlist.html' //模板
	}).state('myself',{
		url:'/myself', //哈希值
		templateUrl:'view/myself.html' //模板
	}).state('gameconnews',{
		url:'/gameconnews/:id', //哈希值
		templateUrl:'view/gameconnews.html' //模板
	}).state('gamegiftcon',{
		url:'/gamegiftcon/:id', //哈希值
		templateUrl:'view/gamegiftcon.html' //模板
	}).state('article',{
		url:'/article/:id', //哈希值
		templateUrl:'view/article.html' //模板
	}).state('gift',{
		url:'/gift/:id', //哈希值
		templateUrl:'view/gamecongift.html' //模板
	})
	$urlRouterProvider.otherwise('hotlist');
}])