(function($,root){
    var ControlManager = function(length){
        this.index = 0;
        this.length = length ;
        console.log(this)
    }
    var num;
    console.log(this)
    ControlManager.prototype = {
        prev:function(){
            num=-num;
            return this.getIndex(num);
        },
        next:function(sort){
            
            if(sort==true){
                num=1;
            }else{
                num=this.TurnMusic();
            }
            return this.getIndex(num); 
        },
        //播放顺序
        TurnMusic:function(){
            //0-10之间随机整数
            var num = Math.floor(Math.random()*this.length);    
             return num;
        },
        getIndex:function(val){
            var index = this.index;
            var len = this.length;
            var curIndex = (index+val+len)%len ;
            this.index = curIndex;
            return curIndex;
        }
    }

    root.ControlManager = ControlManager ;
})(window.Zepto,window.player||(window.player={}))