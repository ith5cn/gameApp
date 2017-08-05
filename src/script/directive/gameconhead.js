'use strict';
angular.module('app').directive('appGameconhead',[function(){
	return{
		restict:"A",
		replate:true,
		templateUrl:"view/template/gameconhead.html",
		link:function($scope){
			$scope.back= function(){
				window.history.back();
			}
		}
	}
}])