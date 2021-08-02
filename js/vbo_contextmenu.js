(function ($) {
  'use strict';
  Drupal.behaviors.VBOContextMenu = {
    attach: function () {
      var form = $("form[id^=views-form-]:not(.vbo-contextmenu-processed)");

      if (!form) {
        return;
      }

      form.addClass('vbo-contextmenu-processed');
      if (form.hasClass('vbo-hide-form')) {
        $("div[id^=\"vbo-action-form-wrapper\"] .form-type-select.form-item-action", form).addClass('visually-hidden');
        $("input[id^=\"edit-submit\"]", form).addClass('visually-hidden');
      }

      $('.vbo-contextmenu-vbo-action').once().on('click', function (e) {
        var t = $(this),
          action_id = t.attr('vbo-action'),
          id = t.attr('contextmenu-id'),
          vbo_form = $('form[contextmenu="' + id + '"]'),
          action = vbo_form.find('select[name="action"]');
        if (action) {
          action.val(action_id);
          vbo_form.submit();
          e.preventDefault();
        }
      });
      // Attach context menu to VBO view rows
      $.contextMenu('html5', {
        animation: {duration: 0, show: 'fadeIn', hide: 'fadeOut'}
      });
    }
  }
})(jQuery);
