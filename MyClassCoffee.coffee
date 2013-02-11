((window, document)->

    ###
    if window.NameSpaces == undefined
        window.NameSpaces = {}
    ###

    # NameSpaces.MyClass = 
    class MyClass # extends MyParent

        # クラスメンバ
        ###
        @member = "@member"
        @MEMBER = "@MEMBER"
        ###

        constructor:(option)->
            # super()
            @option = {}
            @_extends option
            @_init()

        # プライベートメンバ
        ###
        member = "private"
        getMember:->
            member
        ###

        # オプションを継承
        _extends:(option)->
            if option is undefined
                return
            for param of option
                @option[param] = option[param]
            @

        _init:->
            @

    # instance = new MyClass()

) @, @document