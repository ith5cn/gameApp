'use strict';
angular.module('app').directive('appHotlist',[function(){
	return{
		restrict:'A',
		replace:true,
		templateUrl:'view/template/hotlist.html'
	}
}]);
