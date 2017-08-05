'use strict';
angular.module('app').directive('appGiftsearch',[function(){
	return{
		restrict:'A',
		replace:true,
		templateUrl:'view/template/giftsearch.html'
	}
}])