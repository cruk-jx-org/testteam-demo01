CRUK.MobileRebrand = function() {

    var
        userAgent = navigator.userAgent,
        $root = null,
        hitEvent = 'click',
        speed = 'fast', // or 'slow'
        leftMenu = "",
        leftMenuParent = "",

        // Place any content substitutions here
        reprocessExistingContent = function() {
            //jQuery('div.signs-symptoms>a').text('Signs and Symptoms app');
        },

        isMobileBrowser = function(userAgent) {
            return (userAgent.match(/Android/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPad/i) || userAgent.match(/iPod/i) || userAgent.match(/BlackBerry/i) || userAgent.match(/webOS/i));
        },

        resetActiveSubMenus = function() {
            var $menu = $root.find('div#mobile-menu-container li.selected');
            $menu.removeClass('selected');
            $menu.find('ul').hide();
        },

        addCallbacks = function() {
            // slide down expando on navbar menu
            $root.find('li#mobile-menu>a').bind(hitEvent, function(e) {
                e.preventDefault();
                var $this = jQuery(this);
                // Ensure any displayed search is collapsed
                $root.find('li#mobile-search').removeClass('expanded');
                $root.find('div#mobile-search-container').slideUp(speed, function() {
                    $this.parent().toggleClass('expanded');
                    $root.find('div#mobile-menu-container').slideToggle(speed, function() {
                        resetActiveSubMenus();
                    });
                });
                return false;
            });

            // slide down expando on navbar search
            $root.find('li#mobile-search>a').bind(hitEvent, function(e) {
                e.preventDefault();
                var $this = jQuery(this);
                // Ensure any displayed menu is collapsed
                $root.find('li#mobile-menu').removeClass('expanded');
                $root.find('div#mobile-menu-container').slideUp(speed, function() {
                    resetActiveSubMenus();
                    $this.parent().toggleClass('expanded');
                    $root.find('div#mobile-search-container').slideToggle(speed);
                });
                return false;
            });

            // show submenus
            $root.find('div#mobile-menu-container li.submenu>a').bind(hitEvent + ' focus', function(e) {
                var $this = jQuery(this);
                // Allow this link if we've already interacted with it
                if ($this.parent().hasClass("clicked")) {
                    return true;
                }

                // Add a class to handle the next interaction
                if (e.type === "click") {
                    $root.find("div#mobile-menu-container li").removeClass("clicked");
                    $this.parent().addClass('clicked');
                }

                // If a proper URL is provided use that rather than sliding out a submenu
                e.preventDefault();
                // First remove any selected
                resetActiveSubMenus();
                $this.parent().addClass('selected').find('ul').show();
                return false;
            });

            // Special activity on sitemap link
            $root.find('div#mobile-menu-container li#mobile-sitemap>a').bind(hitEvent, function(e) {
                var $this = jQuery(this);
                e.preventDefault();
                resetActiveSubMenus();
                createSiteMap();
                $root.find('div#mobile-menu-container').hide();
                $root.find('li#mobile-menu').removeClass('expanded');
                $root.find('div#mobile-sitemap-container').show();
                jQuery('div#main,div#footer,div#breadcrumb-nav,div#actions-bar').hide();
                jQuery('body').scrollTop(0);
                jQuery('body').addClass("all-sections");

                return false;
            });
        },

        mobileSubmenu = function() {
            leftMenu = jQuery('.secondNav');
            leftMenuParent = leftMenu.parent();
            //if(leftMenu.length > 0 && jQuery('#mobileSecondMenuTop').length <= 0) {


            //}
        },

        createSiteMap = function() {
            var $sitemap = $root.find('div#mobile-sitemap-container');
            if ($sitemap.find('div#sitemap-holder').html().length === 0) {
                var $footer = jQuery('div#footer_strip');
                var $info = jQuery('div#info');
                var $menu = $root.find('div#mobile-menu-container');
                $sitemap.hide();
                $sitemap.find('div#sitemap-holder').html($menu.html());
                $sitemap.find('div#sitemap-holder>ul>li').removeClass('selectable');
                $sitemap.find('div#sitemap-holder>ul>li>ul').show();
                $sitemap.find('div#sitemap-holder li#mobile-sitemap').remove();
                $sitemap.find('div#sitemap-holder br').remove();
                $sitemap.find('div#sharetools-holder').append($footer.html());
                $sitemap.find('div#info-holder').append($info.html());
            }
        },

        init = function() {
            //console.log("Init ran");
            // Do this as early as possible...
            reprocessExistingContent();

            mobileSubmenu();

            // Load up the mobile-specific nav directly after the logo.
            // All injected markup is wrapped in a container div
            jQuery.get('assets/tpl/mobile-menu.tpl.html', function(data) {
                //jQuery('#mobile-rebrand-wrapper').remove();
                jQuery('#cruk-nav').append(data);

                $root = jQuery('div#mobile-rebrand-wrapper');

                // Hide all submenus, search panel on startup
                $root.find('div#mobile-menu-container>ul>li>ul').hide();
                $root.find('div#mobile-menu-container').hide();
                $root.find('div#mobile-search-container').hide();
                $root.find('div#mobile-sitemap-container').hide();

                // Set 'expanded' on HOME if we are on the home page
                if (jQuery('body').hasClass('home-default')) {
                    $root.find('li#mobile-home').addClass('selected');
                }

                /*jQuery('.submenu:nth-child(2) li a').hammer({prevent_default: true}).bind('tap', function(event) {
                event.preventDefault();
                //console.log("Tap registered. Jumping to appropriate location...");
                jumpToSection(this.hash);
              });*/

                addCallbacks();
            });
            var dhash = "";
            dhash = document.location.hash;

            function jumpToSection(target) {
                if (target === "") {
                    //console.log("No hashtag given, returning false");
                    return false;
                }

                var hash = target.substring(1);
                //console.log("Handling hashtag: " + hash);

                var heading = jQuery('[name="' + hash + '"]').next();

                //console.log(heading + 'test');
                var offset = heading.offset().top;
                //console.log("About to set scrollTop to: " + offset);
                jQuery('html,body').animate({
                    scrollTop: offset
                }, 'slow');

                if (heading.hasClass("closed")) {
                    heading.click();
                }
                return false;
            }
        };

    return {
        init: init
    };
}();
CRUK.MobileRebrand.init();

function showSiblings() {

    var level = '';
    jQuery('.secondNav li.active-trail, .pane-menu-tree li.active-trail').each(function() {
        if (jQuery(this).is(":visible") && jQuery(this).hasClass('level-2')) {
            level = 2;
        }
        if (jQuery(this).is(":visible") && jQuery(this).hasClass('level-3')) {
            level = 3;
        }
        if (jQuery(this).is(":visible") && jQuery(this).hasClass('level-4')) {
            level = 4;
        }
        if (jQuery(this).is(":visible") && jQuery(this).hasClass('level-5')) {
            level = 5;
        }
        if (jQuery(this).is(":visible") && jQuery(this).hasClass('level-6')) {
            level = 6;
        }
    });
    jQuery('.level-' + level).each(function() {
        jQuery(this).addClass('show-sibling');
    });

}



jQuery(window).load(function() {

    var $desktop = jQuery('.megamenu');
    var script_loaded = false;
    var leftMenu = jQuery('.secondNav');
    var leftMenuParent = jQuery('.secondNav').parent() || {};

    function deviceMenuSw() {

        var menuState = true;
        menuState = jQuery("ul.megamenu").is(":visible");



        // clone secondNav and append to content
        if (jQuery('main .mobileSecondNav').length == 0) {
            //jQuery('.secondNav').clone().addClass('mobileSecondNav').appendTo('main');
        }
        // clone menu block 2
        if (jQuery('main .mobileSecondNavLanding').length == 0) {
            //jQuery('.pane-menu-tree').clone().addClass('mobileSecondNavLanding').appendTo('main');
        }


        if (menuState === true) {
            if (leftMenuParent.length > 0) {
                leftMenuParent.append(leftMenu);
            }
            showSiblings();
        } else {
            if (script_loaded == false) {
                script_loaded = true;
                jQuery('.mm-item-link').click("live", function(e) {
                    e.preventDefault();
                });
            }
            showSiblings();
        }
    }

    deviceMenuSw();

});
