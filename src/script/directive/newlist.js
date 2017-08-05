'use strict';
angular.module('app').directive('appNewlist',[function(){
	return{
		restrict:'A',
		replace:true,
		templateUrl:'view/template/newlist.html'
	}
}]);
