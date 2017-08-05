'use strict';
angular.module('app').directive('appArticle',[function(){
	return{
		restrict:"A",
		replate:true,
		templateUrl:"view/template/articlecon.html"
	}
}])