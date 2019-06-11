/**
 * @file
 * A JavaScript file for the theme.
 */
(function ($) {
  'use strict';

  $(window).load(function(){
    // Actions Bar
    $('.action-new-discussion').click(function (e) {
      e.preventDefault();
      $('.search-forum-panel').hide();
      $('.dropdown-user').hide();
      $('.action-search-forum').removeClass('expanded');
      $('.dropdown-user').removeClass('expanded');
      $('.new-discussion-panel').toggle();
      $(this).toggleClass('expanded');
    });
    $('.action-search-forum').click(function (e) {
      e.preventDefault();
      $('.new-discussion-panel').hide();
      $('.dropdown-user').hide();
      $('.action-new-discussion').removeClass('expanded');
      $('.dropdown-user').removeClass('expanded');
      $('.search-forum-panel').toggle();
      $(this).toggleClass('expanded');
    });

    $('.action-user').click(function (e) {
      e.preventDefault();
      $('.new-discussion-panel').hide();
      $('.search-forum-panel').hide();
      $('.action-new-discussion').removeClass('expanded');
      $('.action-search-forum').removeClass('expanded');
      $('.dropdown-user').show(function() {
        // Dismiss dropdown if anywhere other than the dropdown was clicked.
        $('*').on('click.dropdown-user--dismiss', function(event) {
          // Do nothing if dropdown was clicked.
          if ($(this).parents('.dropdown-user').length) {
            event.stopPropagation();
            return;
          }

          $('.action-user').toggleClass('expanded');
          $('.dropdown-user').toggle();
          $('*').off('click.dropdown-user--dismiss');
        });
      });
      $(this).toggleClass('expanded');
    });
  });

  $(document).ready(function(){
    // Load jQuery MegaMenu
    $('.megamenu').megamenu({
      show_method: 'fadeIn',
      hide_method: 'fadeOut',
      mm_timeout: 150,
      enable_js_shadow: false,
      shadow_size: 1
    });

    //Responsive search blocks
    $( "#block-menu-block-main-menu-block" ).clone().prependTo( "#block-system-main" );

    //$("#block-views-exp-posts-page").prepend("<div class='search-again'>Search again</div>");
    $( "#block-views-exp-posts-page" ).clone().appendTo( ".region-content" );
    $( "#block-views-exp-post-search-page" ).clone().appendTo( ".region-content" );

    // add active class to duscussions tab @ /users/username
    if ($('.page-user .tabs--primary li.active').length == 0) {
      $('.page-user .tabs--primary li:eq(0)').addClass('active');
    }
    // mobile tabs
    $('.page-user .tabs--primary:not(.tabs--basic) li a').each(function(){
        if($(this).html() == 'Update profile' || $(this).html() == 'Update profile<span class="element-invisible">(active tab)</span>') {
          $(this).parent('li').addClass('edit-button');
        }
    }).click(function(){
      if($(this).html() != 'Edit') {
        var link = $(this).attr('href') + '#tabs';
        $(this).attr('href', link);
      }
    });

    // Account Settings form - move Notification Preferences description above corresponding checkboxes.
    var $userProfileForm = $('#user-profile-form');
    if ($userProfileForm.length) {
      var $notificationPreferenceField = $('#edit-profile-main-field-notification-preference', $userProfileForm);

      if ($notificationPreferenceField.length) {
        var $notificationPreferenceDescription = $('.help-block', $notificationPreferenceField);
        var $notificationPreferenceOptions = $('#edit-profile-main-field-notification-preference-und', $notificationPreferenceField);

        $notificationPreferenceOptions.before($notificationPreferenceDescription);
      }
    }

    $('.page-user #block-crukc-system-user-profile').clone().insertAfter($('.region-above-tabs'));

    // For profile tabs, only show the first work on x-small screens.
    $.each($('.page-user .nav-tabs:not(.tabs--basic) a'), function( index, value ) {
      var text = $(this).text().replace('(active tab)', '').split(' ');
      for (var i = 0, len = text.length; i < len; i++) {
        if (i == 0) {
          text[i] = '<span>' + text[i] + '</span>';
        }
        else {
          text[i] = '<span class="hidden-xs">' + text[i] + '</span>';
        }
      }
      $(this).html(text.join(' '));
    });

    // Update hardcoded template "Meet the team" block with the actual text.
    var $templateBlock = $('.block-help.panel-from-template');
    if ($templateBlock.length) {
      var originalBlock = $('.block-help.pane-bundle-standard').html();

      $templateBlock.html(originalBlock).removeClass('panel-from-template');
    }

    // Add a class to the first of either the Announcements or Latest Discussion view pane for styling purposes.
    if ($('.page-home').length) {
      $('.page-home .pane-views-panes').first().addClass('pane-views-panes-first');
    }

    // Default login/register form to "login" mode.
    // This works around an issue where pressing back would retain the form state but hide some registration fields.
    $('#login-do-yes').click();
  });

  // Override the search autocomplete custom stuff so it doesn't spit out
  // ajax error messages.
  if(Drupal.ACDB != undefined) {
  Drupal.ACDB.prototype.search = function (searchString) {
    this.searchString = searchString;

    // Check allowed length of string for autocompete.
    var data = $(this.owner.input).first().data('min-autocomplete-length');
    if (data && searchString.length < data) {
      return;
    }

    // See if this string needs to be searched for anyway.
    if (searchString.match(/^\s*$/)) {
      return;
    }

    // Prepare search string.
    searchString = searchString.replace(/^\s+/, '');
    searchString = searchString.replace(/\s+/g, ' ');

    // See if this key has been searched for before.
    if (this.cache[searchString]) {
      return this.owner.found(this.cache[searchString]);
    }

    var db = this;
    this.searchString = searchString;

    // Initiate delayed search.
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(function () {
      db.owner.setStatus('begin');

      // Ajax GET request for autocompletion. We use Drupal.encodePath instead of
      // encodeURIComponent to allow autocomplete search terms to contain slashes.
      $.ajax({
        type: 'GET',
        url: db.uri + '/' + Drupal.encodePath(searchString),
        dataType: 'json',
        success: function (matches) {
          if (typeof matches.status == 'undefined' || matches.status != 0) {
            db.cache[searchString] = matches;
            // Verify if these are still the matches the user wants to see.
            if (db.searchString == searchString) {
              db.owner.found(matches);
            }
            db.owner.setStatus('found');
          }
        },
        error: function (xmlhttp) {
          if (xmlhttp.status) {
            //alert(Drupal.ajaxError(xmlhttp, db.uri));
          }
        }
      });
    }, this.delay);
  };
  }

  // Delay redirects via <a> clicks whilst Flag module AJAX
  // subscribes/unsubscribes users to a topic when flag link is clicked.
  // The supporter is redirected after the AJAX completes.
  Drupal.behaviors.crukcBootstrapFlag = {
    attach: function (context, settings) {
      var lastClickedLink;
      // Check that Flag's JS is in use.
      if (Drupal.behaviors.flagLink) {
        // Flag module only triggers an event once the AJAX has been handled
        // successfully, so we need to trigger an event ourselves for when
        // it is actually clicked.
        $('.flag-link-toggle').on('click', function() {
          $.event.trigger('crukcBootstrapFlagAJAXPending');
        });

        // When the flag link is clicked, prevent clicking on other links from
        // doing anything yet - store the URL for later use.
        $('a').on('crukcBootstrapFlagAJAXPending', function() {
          $(this).on('click.crukcBootstrapFlagAJAXPending', function(event) {
            event.preventDefault();
            event.stopPropagation();

            // Get the raw DOM element here, not the jQuery object, as
            // jQuery.click() does not seem to trigger properly when we later
            // handle this click event.
            lastClickedLink = this;
          });
        });

        // Once Flag's AJAX has been handled successfully, unbind the link
        // disabling handler and begin a redirect to the last clicked href.
        $('body').on('flagGlobalAfterLinkUpdate', function() {
          $('a').off('click.crukcBootstrapFlagAJAXPending');

          if (lastClickedLink) {
            lastClickedLink.click();
          }
        });
      }
    }
  };

  /**
   * @behavior
   * Equalises the heights of panes within panels. Comments in this behavior have a specific definition of the
   * words "Rows" and "Sets".
   *
   * A row is a group of panes all of the same grid size (e.g. a row can consist of either 3 33% width panes or
   * 2 50% width panes, but could not consist of a 66% width pane followed by a 33% pane.
   *
   * A set is a group of any number of rows containing the same number of panes.
   * For example, a set could have 3 rows of 50% width panes or 2 of 33% width panes,
   * but it could not have both 1 row of 50% width panes and 1 row of 33% width panes.
   *
   * A set must have an attribute `data-set-width` containing the number of panes in each row of the set.
   */
  Drupal.behaviors.panelHeights = {
    // The layouts supported by this behavior.
    layouts: [
      '.standard-page'
    ],

    /**
     * Initialisation logic for this behavior.
     */
    attach: function() {
      var PanelHeights = Drupal.behaviors.panelHeights;

      // If the page isn't using the Standard Page layout, bail out.
      if (!$('[data-layout="standard-page"]').length) {
        return;
      }

      var equaliseAllRows = function() {
        var rows = PanelHeights.getRowsInSets($('.set'));
        var width = $(window).width();
        var isMobile = false;

        if (width < 800) {
          isMobile = true;
        }
        $.each(rows, function(i, row) {

          PanelHeights.equaliseRow(row, isMobile);
        });
      };

      // Equalise rows and make sure they stay equalised.
      equaliseAllRows();
      $(window).on('resize', equaliseAllRows);

    },

    /**
     * Finds all rows in a set.
     *
     * Essentially, this converts the column-based structure of a set into a row-based structure.
     *
     * @param sets Array
     *   An array of sets. See behavior documentation for definition of a set.
     * @return Array
     *   An array of rows. The rows themselves are arrays of HTMLElements.
     */
    getRowsInSets: function(sets) {
      var rows = [];

      $(sets).each(function(i, set) {
        var currentRow = 0;
        var setWidth = $(set).data('setWidth');
        if (typeof setWidth !== 'number' || !setWidth) {
          rows.push([]);
          if (window.console) {
            console.warn('data-set-width not set - Skipping set.')
          }
          return;
        }

        var $setColumns = $(set).find('.col');

        // Loop through each row.
        for (; $($setColumns[0]).find('.panel-pane')[currentRow]; currentRow++) {
          var row = [];
          var count = 0;

          // Find each pane in the row.
          for (; count < setWidth; count++) {
            var rowPane = $($setColumns[count]).find('.panel-pane')[currentRow];

            if (rowPane) {
              row.push(rowPane);
            }
          }

          // Now that we have a complete row, equalise it.
          if (row.length) {
            rows.push(row);
          }
        }
      });

      return rows;
    },

    /**
     * Sets the panes of a row to the same height.
     *
     * Typically the panes will be heightened to match the height of the largest pane, but calling with a truthy value
     * for auto will reset panes to style="height: auto;".
     * @param row Array
     *   A row of panes to be equalised.
     * @param auto [boolean]
     *   An optional flag indicating whether the panes should be sized based on their own content rather than the height of the largest pane.
     */
    equaliseRow: function(row, auto) {
      var largestPaneHeight = 0;
      var count = 0;

      if (auto) {
        largestPaneHeight = 'auto';
      } else {
        // Find largest pane height.
        for (; count < row.length; count++) {
          if ($(row[count]).height() > largestPaneHeight) {
            largestPaneHeight = $(row[count]).height();
          }
        }
      }

      // Set all panes to the largest pane height.
      for (count = 0; count < row.length; count++) {
        $(row[count]).height(largestPaneHeight);
      }
    }
  };

  Drupal.behaviors.confirmComstackFriendsActions = {

    /**
     * Filters an array of actions to remove mutually exclusive action types.
     *
     * For example, when blocking a user, all previous 'unblock' messages affecting that user will be removed.
     * @param {Array} actions
     *   An array of actions that have been logged via .attach(). Each message is an object in with the properties:
     *      * {string} text - The log message.
     *      * {string} type - The type of action e.g. 'block'.
     *      * {string} requester - The uid of the user who requested the action being logged.
     *      * {string} requestee - The uid of the user the requested action will affect (e.g. person who is being blocked).
     * @param {object} latestEvent
     *   The jQuery event that the actions should be filtered around. Most important properties for this function:
     *     * {string} actionType - Type of action (exact same function as type in actions above)
     *     * {string} type - Type of the jQuery event - do not confuse with actionType!
     */
    filterConflictingActions: function (actions, latestEvent) {
      var mutuallyExclusiveTypes = {
        block: ['unblock'],
        unblock: ['block']
      };

      var typesToRemove = mutuallyExclusiveTypes[latestEvent.actionType];

      return $.grep(actions, function(currentAction) {
        var isLegalType = typesToRemove.indexOf(currentAction.type) === -1;
        var isDifferentUsers = currentAction.requestee !== latestEvent.requestee || currentAction.requester !== latestEvent.requester;

        return isLegalType || isDifferentUsers;
      });
    },
    /**
     * Adds a confirmation message to the DOM, mimicking the $messages element rendered by drupal_set_messages().
     * Structure of the DOM in this method should follow logic of theme_status_messages().
     *
     * @see https://api.drupal.org/api/drupal/includes%21theme.inc/function/theme_status_messages/7
     */
    attach: function (context, settings) {
      $(document).on('cs-f-ajax-success', function (event) {
        if (event.actionType !== 'block' && event.actionType !== 'unblock') {
          return;
        }

        var eventTypeAttr = 'data-crukc-event-type';
        var requesteeAttr = 'data-crukc-requestee';
        var requesterAttr = 'data-crukc-requester';

        var confirmationMessages = {
          block: '@username is now blocked. They can no longer send you a private message.',
          unblock: 'You have unblocked @username, you need to add them as a friend to message them again.'
        };

        var $pageHeader = $('#page-header');
        // Section container for the success messages.
        var $alertSuccesses = $pageHeader.find('.alert-block.alert-success');
        // List element containing the messages.
        var $alertSuccessesList;

        // List containing the success messages as strings.
        var alertSuccessMessages = [];
        var confirmationMessage = confirmationMessages[event.actionType];


        confirmationMessage = Drupal.t(confirmationMessage, {'@username': event.username});

        // If there is no section container for the success messages, create one.
        if ($alertSuccesses.length < 1) {
          $pageHeader.append('<div class="alert alert-block alert-success">'
            + '<a class="close" data-dismiss="alert" href="#">×</a>'
            + '<h4 class="element-invisible">Status message</h4>'
              // This empty <p> needs to be here so that we do not later treat the h4 as a message.
            + '<p></p>'
            + '</div>');
          $alertSuccesses = $pageHeader.find('.alert-block.alert-success');
        }

        // Store the existing messages and temporarily remove them from DOM.
        if ($alertSuccesses.find('li').length) {
          // Find messages when more than one exist (i.e. there is an <li>)
          alertSuccessMessages = $.map($alertSuccesses.find('li'), function (li) {
            return {
              text: $(li).text().replace(/\r?\n|\r/g, ''),
              type: $(li).attr(eventTypeAttr),
              requestee: $(li).attr(requesteeAttr),
              requester: $(li).attr(requesterAttr)
            }
          });
          $alertSuccesses.find('li').remove();
        }
        else if ($alertSuccesses.contents().last().text().length) {
          // Find messages when only one exists (i.e. it's the main text in the alert container)
          alertSuccessMessages.push({
            text: $alertSuccesses.contents().last().text().replace(/\r?\n|\r/g, ''),
            type: $alertSuccesses.attr(eventTypeAttr),
            requestee: $alertSuccesses.attr(requesteeAttr),
            requester: $alertSuccesses.attr(requesterAttr)
          });
          $alertSuccesses.contents().last().remove();
          $alertSuccesses.removeAttr(eventTypeAttr);

          // If there was only 1 message before, there might not be a <ul>
          if ($alertSuccesses.find('ul').length === 0) {
            $alertSuccesses.append('<ul></ul>');
          }
        }
        $alertSuccessesList = $alertSuccesses.find('ul');

        // Add our confirmation message to our stored messages.
        alertSuccessMessages.push({
          text: confirmationMessage,
          type: event.actionType,
          requestee: event.requestee,
          requester: event.requester
        });

        alertSuccessMessages = Drupal.behaviors.confirmComstackFriendsActions.filterConflictingActions(alertSuccessMessages, event);


        // Add the stored messages to the DOM, in our <ul> if there are multiple or straight in if just the one.
        if (alertSuccessMessages.length > 1) {
          $.each(alertSuccessMessages, function (i, message) {
            $('<li>' + message.text + '</li>').appendTo($alertSuccessesList)
              .attr(eventTypeAttr, message.type)
              .attr(requesteeAttr, message.requestee)
              .attr(requesterAttr, message.requester);
          });
        }
        else {
          $alertSuccesses.append(alertSuccessMessages[0].text)
            .attr(eventTypeAttr, alertSuccessMessages[0].type)
            .attr(requesteeAttr, alertSuccessMessages[0].requestee)
            .attr(requesterAttr, alertSuccessMessages[0].requester);
        }
      });
    }
  };

}(jQuery));
