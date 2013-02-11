
(function($, window, document) {
  return $.pluginName = (function() {

    function pluginName($target) {
      this.$target = $target;
      this.option = {};
    }

    $.extend(pluginName.prototype, {
      _setOption: function(option) {
        if (option === void 0) {
          return;
        }
        $.extend(this.option, option);
        return this;
      },
      _init: function() {
        return this;
      }
    });

    $.fn.pluginName = function(option) {
      return this.each(function() {
        var instance;
        instance = new pluginName($(this));
        instance._setOption(option);
        instance._init();
        return this;
      });
    };

    return pluginName;

  })();
})(jQuery, this, this.document);
