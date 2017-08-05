'use strict';
angular.module('app').directive('appNewslist',[function(){
	return{
		restrict:'A',
		replace:true,
		templateUrl:'view/template/newslist.html'
	}
}]);
