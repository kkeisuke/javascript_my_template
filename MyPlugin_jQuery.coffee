class $.pluginName

    # クラスメンバ
    # @member = "@member"
    # @MEMBER = "@MEMBER"

    constructor:($target)->
        @$target = $target
        @option = {}

    # インスタンスメソッド
    $.extend pluginName.prototype,
        # オプションを継承
        _setOption:(option)->
            if option == undefined
                return
            $.extend @option, option
            @
        _init:->
            @
        # ここに追加

    $.fn.pluginName = (option)->
        @each ->
            instance = new pluginName $ @
            instance._setOption option
            instance._init()
            @