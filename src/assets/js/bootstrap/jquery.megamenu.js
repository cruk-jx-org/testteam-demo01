/*
  jQuery MegaMenu Plugin
  Author: GeekTantra
  Author URI: http://www.geektantra.com/2010/05/jquery-megamenu-2/
  NOTE: This is based off the above plugin but the code has actually been patched.
  Hence, keep this file out of vendor/
*/

(function ($) {
  "use strict";

  $.fn.megamenu = function(options) {
    options = $.extend({
      activate_action: "mouseover",
      deactivate_action: "mouseleave",
      show_method: "slideDown",
      tap_support: true,
      hide_method: "slideUp",
      justify: "left",
      enable_js_shadow: false,
      shadow_size: 1,
      mm_timeout: 0
    }, options);

    var $megamenu = this;
    var isIE6 = navigator.userAgent.toLowerCase().indexOf("msie 6") !== -1;

    if (options.activate_action === "click") {
      options.mm_timeout = 0;
    }

    $megamenu.children("li").each(function() {
      var $mmItemContent = $(this).find(".mm-item-content");
      var mmTimer = 0;

      $mmItemContent.hide();
      $mmItemContent.wrapInner('<div class="mm-content-base"></div>');

      if (options.enable_js_shadow === true) {
        $mmItemContent.append('<div class="mm-js-shadow"></div>');
      }

      $(this).addClass("mm-item");
      $(this).find("div:first").addClass("mm-item-content");
      $(this).find("a:first").addClass("mm-item-link");

      $(document).bind("click", function() {
        $(".mm-item-content").hide();
        $(".mm-item-link").removeClass("mm-item-link-hover");
      });

      $(this).bind("click", function(event) {
        event.stopPropagation();
      });

      // Activation Method Starts

      if (options.tap_support === true) {
        options.activate_action = "touchstart " + options.activate_action;

        $("a.mm-item-link").bind("click", function(event) {
          event.preventDefault();

          if ($(event.currentTarget).hasClass("mm-item-link-hover")) {
            document.location.href = event.currentTarget.href;
          }
        });
      }

      $(this).bind(options.activate_action, function(event) {
        event.stopPropagation();

        var $mmItemLink = $(this).find("a.mm-item-link");
        var $mmItemContent = $(this).find("div.mm-item-content");

        clearTimeout(mmTimer);

        mmTimer = setTimeout(function() { // Emulate HoverIntent
          $mmItemLink.addClass("mm-item-link-hover");
          $mmItemContent.css({
            "top": ($mmItemLink.offset().top + $mmItemLink.outerHeight()) - 1 + "px",
            "left": ($mmItemLink.offset().left) - 5 + "px"
          });

          if (options.justify === "left") {
            // Coordinates of the right end
            var mmObjectRightEnd = $megamenu.offset().left + $megamenu.outerWidth();
            var mmContentRightEnd = $mmItemLink.offset().left + $mmItemContent.outerWidth() - 5;

            if (mmContentRightEnd >= mmObjectRightEnd) {
              // Menu content exceeding the outer box - limit megamenu inside the outer box
              $mmItemContent.css({
                "left": ($mmItemLink.offset().left - (mmContentRightEnd - mmObjectRightEnd)) - 2 + "px"
              });
            }
          }
          else if (options.justify === "right") {
            // Coordinates of the left end
            var mmObjectLeftEnd = $megamenu.offset().left;
            var mmContentLeftEnd = $mmItemLink.offset().left - $mmItemContent.outerWidth() + $mmItemLink.outerWidth() + 5;

            if (mmContentLeftEnd <= mmObjectLeftEnd) {
              // Menu content exceeding the outer box - limit megamenu inside the outer box
              $mmItemContent.css({
                "left": mmObjectLeftEnd + 2 + "px"
              });
            }
            else {
              $mmItemContent.css({
                "left": mmContentLeftEnd + "px"
              });
            }
          }

          if (options.enable_js_shadow === true) {
            $mmItemContent.find(".mm-js-shadow")
              .height($mmItemContent.height())
              .width($mmItemContent.width())
              .css({
                "top": (options.shadow_size) + (isIE6 ? 2 : 0) + "px",
                "left": (options.shadow_size) + (isIE6 ? 2 : 0) + "px",
                "opacity": 0.5
              });
          }

          switch (options.show_method) {
            case "simple":
              $mmItemContent.show();
              break;
            case "slideDown":
              $mmItemContent.height("auto");
              $mmItemContent.slideDown("fast");
              break;
            case "fadeIn":
              $mmItemContent.fadeTo("fast", 1);
              break;
            default:
              $mmItemContent.each(options.show_method);
              break;
          }
        }, options.mm_timeout);
      });

      // Activation Method Ends

      // Deactivation Method Starts

      $(this).bind(options.deactivate_action, function (event) {
        event.stopPropagation();
        clearTimeout(mmTimer);

        var $mmItemLink = $(this).find(".mm-item-link");
        var $mmItemContent = $(this).find(".mm-item-content");

        switch (options.hide_method) {
          case "simple":
            $mmItemContent.hide();
            $mmItemLink.removeClass("mm-item-link-hover");
            break;
          case "slideUp":
            $mmItemContent.slideUp("fast", function () {
              $mmItemLink.removeClass("mm-item-link-hover");
            });
            break;
          case "fadeOut":
            $mmItemContent.fadeOut("fast", function () {
              $mmItemLink.removeClass("mm-item-link-hover");
            });
            break;
          default:
            $mmItemContent.each(options.hide_method);
            $mmItemLink.removeClass("mm-item-link-hover");
            break;
        }

        if ($mmItemContent.length < 1) {
          $mmItemLink.removeClass("mm-item-link-hover");
        }
      });

      // Deactivation Method Ends
    });
    this.show();
  };

})(jQuery);
