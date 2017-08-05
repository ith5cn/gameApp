'use strict';
angular.module('app').directive('appGameclassify',[function(){
	return{
		restrict:'A',
		replace:true,
		templateUrl:'view/template/gameclassify.html'
	}
}])