'use strict';
angular.module('app').directive('appGameconnews',[function(){
	return{
		restrict:"A",
		replace:true,
		templateUrl:"view/template/gameconnewslist.html"
	}
}])