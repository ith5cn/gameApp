'use strict';
angular.module('app',['ui.router']); //创建模块
'use strict';

angular.module('app').config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	//配置路由
	$stateProvider.state('hotlist',{
		url:'/hotlist', //哈希值
		templateUrl:'view/hotlist.html', //模板
		controller:'hotlistCtrl'  //控制器
	}).state('newlist',{
		url:'/newlist', //哈希值
		templateUrl:'view/newlist.html', //模板
		controller:"newlistCtrl"
	}).state('newslist',{
		url:'/newslist', //哈希值
		templateUrl:'view/newslist.html', //模板
		controller:"newslistCtrl"
	}).state('newwlk',{
		url:'/newwlk', //哈希值
		templateUrl:'view/newwlk.html', //模板
		controller:"newwlkCtrl"
	}).state('giftlist',{
		url:'/giftlist', //哈希值
		templateUrl:'view/giftlist.html' //模板
	}).state('myself',{
		url:'/myself', //哈希值
		templateUrl:'view/myself.html' //模板
	}).state('gameconnews',{
		url:'/gameconnews/:id', //哈希值
		templateUrl:'view/gameconnews.html' //模板
	}).state('gamegiftcon',{
		url:'/gamegiftcon/:id', //哈希值
		templateUrl:'view/gamegiftcon.html' //模板
	}).state('article',{
		url:'/article/:id', //哈希值
		templateUrl:'view/article.html' //模板
	}).state('gift',{
		url:'/gift/:id', //哈希值
		templateUrl:'view/gamecongift.html' //模板
	})
	$urlRouterProvider.otherwise('hotlist');
}])
'use strict';
angular.module('app').controller('hotlistCtrl', ['$scope','$http', function($scope,$http){
  $http.get('/data/gameclassify.json').then(function(res){
  	$scope.list = res.data;
  });
  $http.get('data/game.json').then(function(res){
  	var arr = new Array();
  	for(var i in res.data){
  		if(res.data[i].gameState == "hot")
  		{
  			arr.push(res.data[i]);
  			continue;
  		}
  	}
  	$scope.hotlist =arr;
  });
  $http.get('data/gamehistory.json').then(function(res){
  	$scope.histroylist = res.data;
  })
}]);
'use strict';
angular.module('app').controller('newlistCtrl',['$scope','$http',function($scope,$http){
	 $http.get('/data/gameclassify.json').then(function(res){
  		$scope.list = res.data;
  	});
  	$http.get('data/game.json').then(function(res){
  	var arr = new Array();
  	for(var i in res.data){
  		if(res.data[i].gameState == "new")
  		{
  			arr.push(res.data[i]);
  			continue;
  		}
  	}
  		$scope.newlist =arr;
  	});
  $http.get('data/gamehistory.json').then(function(res){
  	$scope.histroylist = res.data;
  })
}]);
'use strict';
angular.module('app').controller('newslistCtrl',['$scope','$http',function($scope,$http){
	$http.get('/data/gameclassify.json').then(function(res){
  		$scope.list = res.data;
  	});
  	$http.get('data/news.json').then(function(res){
  		$scope.newslist = res.data;
  	});
  	$http.get('data/gamehistory.json').then(function(res){
  		$scope.histroylist = res.data;
  	})
}])

'use strict';
angular.module('app').controller('newwlkCtrl',['$scope','$http',function($scope,$http){
	$http.get('/data/gameclassify.json').then(function(res){
  		$scope.list = res.data;
  	});
  	$http.get('data/game.json').then(function(res){
  	var arr = new Array();
  	for(var i in res.data){
  		if(res.data[i].gameState == "wlk")
  		{
  			arr.push(res.data[i]);
  			continue;
  		}
  	}
  		$scope.newwlklist =arr;
  	});
  	$http.get('data/gamehistory.json').then(function(res){
  		$scope.histroylist = res.data;
  	}	)
}])

'use strict';
angular.module('app').directive('appArticle',[function(){
	return{
		restrict:"A",
		replate:true,
		templateUrl:"view/template/articlecon.html"
	}
}])
'use strict';
angular.module('app').directive('appArticlefooter',[function(){
	return{
		restrict:'A',
		replate:true,
		templateUrl:"view/template/articlefooter.html"
	}
}])
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
'use strict';
angular.module('app').directive('appFooter',[function(){
	return{
		restrict:'A',
		replace:true,
		templateUrl:'view/template/footer.html'
	}
}])
'use strict';
angular.module('app').directive('appGameclassify',[function(){
	return{
		restrict:'A',
		replace:true,
		templateUrl:'view/template/gameclassify.html'
	}
}])
'use strict';
angular.module('app').directive('appGamebanner',[function(){
	return{
		restrict:"A",
		replate:true,
		templateUrl:"view/template/gameconbanner.html"
	}
}])
'use strict';
angular.module('app').directive('appGameconfooter',[function(){
	return{
		restrict:"A",
		replate:true,
		templateUrl:"view/template/gameconfooter.html"
	}
}])
'use strict';
angular.module('app').directive('appGamecongift',[function(){
	return{
		restrict:"A",
		replate:true,
		templateUrl:"view/template/gamecongift.html"
	}
}])
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
'use strict';
angular.module('app').directive('appGameinfo',[function(){
	return{
		restrict:"A",
		replate:true,
		templateUrl:"view/template/gameconinfo.html"
	}
}])
'use strict';
angular.module('app').directive('appGameconnews',[function(){
	return{
		restrict:"A",
		replace:true,
		templateUrl:"view/template/gameconnewslist.html"
	}
}])
'use strict';
angular.module('app').directive('appGiftifon',[function(){
	return{
		restrict:"A",
		replate:true,
		templateUrl:"view/template/giftconinfo.html"
	}
}])
'use strict';
angular.module('app').directive('appGiftlist',[function(){
	return{
		restrict:'A',
		replace:true,
		templateUrl:'view/template/giftlist.html'
	}
}])
'use strict';
angular.module('app').directive('appGiftsearch',[function(){
	return{
		restrict:'A',
		replace:true,
		templateUrl:'view/template/giftsearch.html'
	}
}])
'use strict';
angular.module('app').directive('appHead',[function(){
	return{
		restrict:'A',
		replace:true,
		templateUrl:'view/template/head.html'
	}
}])
'use strict';
angular.module('app').directive('appHistorygame',[function(){
	return{
		restrict:'A',
		replace:true,
		templateUrl:'view/template/history.html'
	};
}]);
'use strict';
angular.module('app').directive('appHotlist',[function(){
	return{
		restrict:'A',
		replace:true,
		templateUrl:'view/template/hotlist.html'
	}
}]);

'use strict';
angular.module('app').directive('appMyselfhead',[function(){
	return {
		restrict:"A",
		replate:true,
		templateUrl:'view/template/myselfhead.html'
	}
}])
'use strict';
angular.module('app').directive('appMyselfmain',[function(){
	return{
		restrict:"A",
		replate:true,
		templateUrl:'view/template/myselfmian.html'
	}
}])
'use strict';
angular.module('app').directive('appNewlist',[function(){
	return{
		restrict:'A',
		replace:true,
		templateUrl:'view/template/newlist.html'
	}
}]);

'use strict';
angular.module('app').directive('appNewslist',[function(){
	return{
		restrict:'A',
		replace:true,
		templateUrl:'view/template/newslist.html'
	}
}]);

'use strict';
angular.module('app').directive('appNewwlk',[function(){
	return{
		restirct:'A',
		replace:true,
		templateUrl:'view/template/newwlk.html'
	}
}])