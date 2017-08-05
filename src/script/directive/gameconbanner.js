'use strict';
angular.module('app').directive('appGamebanner',[function(){
	return{
		restrict:"A",
		replate:true,
		templateUrl:"view/template/gameconbanner.html"
	}
}])