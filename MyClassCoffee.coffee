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

    # プライベートメンバ
    ###
    @prototype:(()=>
        member = "private"
        @prototype.getMember = ()->
            member
        @prototype
    )()
    ###

    constructor:(option)->
        # super()
        @option = {}
        @_extends option
        @_init()

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