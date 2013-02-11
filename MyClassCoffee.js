
(function(window, document) {
  /*
      if window.NameSpaces == undefined
          window.NameSpaces = {}
  */

  var MyClass;
  return MyClass = (function() {
    /*
            @member = "@member"
            @MEMBER = "@MEMBER"
    */

    function MyClass(option) {
      this.option = {};
      this._extends(option);
      this._init();
    }

    /*
            member = "private"
            getMember:->
                member
    */


    MyClass.prototype._extends = function(option) {
      var param;
      if (option === void 0) {
        return;
      }
      for (param in option) {
        this.option[param] = option[param];
      }
      return this;
    };

    MyClass.prototype._init = function() {
      return this;
    };

    return MyClass;

  })();
})(this, this.document);
