'use strict';
angular.module('app').directive('appGameinfo',[function(){
	return{
		restrict:"A",
		replate:true,
		templateUrl:"view/template/gameconinfo.html"
	}
}])