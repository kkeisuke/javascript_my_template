(function($, window, document, undefined){

    /**
     * クラス
     * @param {jQuery Object} $target jQuery Elements
     */
    $.pluginName = function($target){
        this.$target = $target;
        this.option = {
            //初期値など
        };
    };

    /**
     * クラスメンバー
     */
    //$.pluginName.member = ;
    //$.pluginName.MEMBER = ;

    /**
     * インスタンスメソッド
     */
    $.extend($.pluginName.prototype,{
        // オプションを継承
        _setOption:function(option){
            if(option === undefined) { return; }
            $.extend(this.option, option);
        },
        _init:function(){
            
        }
        //ここに追加
    });

    /**
     * 各セレクタをターゲットにインスタンスを生成する。
     */
    $.fn.pluginName = function(option){
        return this.each(function(){
            var instance = new $.pluginName($(this));
            instance._setOption(option);
            instance._init();
        });
    };

}(jQuery, this, this.document));