//播放音乐模块
(function($,root){
    var $scope = $(document.body);
    var AudioManager = function(){
        this.audio = new Audio();
        this.status = 'pause';
        this.bindEvent();
    }
    //播放功能
    AudioManager.prototype = {
        bindEvent:function(sort){
            $(this.audio).on('ended',function(){
                $scope.find('.next-btn').trigger('click');
            })
        },
        play:function(){
            this.audio.play();
            this.status = 'play';
        },
        //暂停功能
        pause:function(){
            this.audio.pause();
            this.status = 'pause';
        },
        //设置音频地址
        setAudioSource:function(src){
            this.audio.src = src;
            this.audio.load();
            
        },
        //跳转歌曲时间
        jumpToPlay:function(time){
            this.audio.currentTime = time;
            this.audio.play();
        },
        
    }
    root.AudioManager = AudioManager;
}(window.Zepto,window.player||(window.player = {})))