'use strict';
angular.module('app').directive('appArticlefooter',[function(){
	return{
		restrict:'A',
		replate:true,
		templateUrl:"view/template/articlefooter.html"
	}
}])