'use strict';
angular.module('app').directive('appHistorygame',[function(){
	return{
		restrict:'A',
		replace:true,
		templateUrl:'view/template/history.html'
	};
}]);