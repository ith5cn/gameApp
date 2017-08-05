'use strict';
angular.module('app').directive('appMyselfhead',[function(){
	return {
		restrict:"A",
		replate:true,
		templateUrl:'view/template/myselfhead.html'
	}
}])