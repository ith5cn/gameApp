'use strict';
angular.module('app').directive('appGiftlist',[function(){
	return{
		restrict:'A',
		replace:true,
		templateUrl:'view/template/giftlist.html'
	}
}])