'use strict';
angular.module('app').directive('appBack',[function(){
	return{
		restirct:"A",
		replate:true,
		templateUrl:"view/template/back.html",
		link:function($scope){
			$scope.back = function(){
				window.histroy.back()
			}
		}
	}
}])