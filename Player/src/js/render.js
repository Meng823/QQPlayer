 (function($,root){
	var $scope = $(document.body);
	//渲染歌曲信息
	function renderInfo(info){
		var html = '<h1 class="song-name">'+info.song+'</h1>' +
				   '<h3 class="singer-name">'+'-- &nbsp'+info.singer+'&nbsp --'+'</h3>' +
				   '<h3 class="album-name">'+info.album+'</h3>';
		$scope.find('.song-info').html(html);
	}
	//渲染歌曲图片以及高斯模糊
	function renderImage(src){
		var image = new Image();
		image.onload = function(){
			$scope.find('.song-img img').attr('src',src);
			root.blurImg(image,$scope);
		}
		image.src = src;
	}
	//渲染TurnBtn
	function renderTurnBtn(isTurn){
		if(isTurn){
			$scope.find('.turn-btn').removeClass('rands');
			
		}else{
			$scope.find('.turn-btn').addClass('rands');
			// $scope.find('.turn-btn').removeClass('rands');
		}
	}

	root.render = function(data){
		renderInfo(data);
		renderImage(data.image);
	
	},
	root.renderTurnBtn=renderTurnBtn;
}(window.Zepto,window.player||(window.player={})))