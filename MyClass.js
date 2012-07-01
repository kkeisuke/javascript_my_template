(function(window, document, undefined){

    var inherit = (function(){
        var F = function(){};
        return function(C, P){
            F.prototype = P.prototype;
            C.prototype = new F();
            C.__super__ = P.prototype;
            C.prototype.constructor = C;
        };
    }());

    // 継承
    // inherit(MyClass, Parent);

    /**
     * クラス
     * @param {Object} option オプション
     */
    // NameSpaces.MyClass = function(option){
    function MyClass(option){
        // MyClass.__super__.constructor.call(this);
        this.option = {
            //初期値など
        };
        this._extends(option);
        this._init();
    }

    /**
     * クラスメンバー
     */
    //MyClass.member = "";
    //MyClass.MEMBER = "";

    /**
     * プライベートメンバ
     */
    MyClass.prototype = (function(){
        // var member = "";
        return {
            /* getMember:function(){
                return member;
            } */
        };
    }());

    /**
     * インスタンスメソッド
     */
    // オプションを継承
    MyClass.prototype._extends = function(option){
        if(option === undefined) { return; }
        for(var param in option){
            this.option[param] = option[param];
        }
    };
    MyClass.prototype._init = function(){
        
    };
    /* MyClass.prototype.method = function(){
        
    }; */

    // インスタンスを生成する。
    // var instance = new MyClass(option);

}(this, this.document));