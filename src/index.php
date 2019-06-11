<?php

$pageTitle = 'Current page';


?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML+RDFa 1.0//EN"
  "http://www.w3.org/MarkUp/DTD/xhtml-rdfa-1.dtd">
<html lang="en" dir="ltr"
<head profile="http://www.w3.org/1999/xhtml/vocab">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--[if IE]><![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  <link rel="shortcut icon" href="http://communities.local/sites/all/themes/crukc_bootstrap/favicon.ico" type="image/vnd.microsoft.icon"/>
  <meta name="description" content="Chat to other people affected by cancer in our online forum. Our friendly team of moderators and nurses are also on hand to support you."/>
  <meta name="generator" content="Drupal 7 (http://drupal.org)"/>
  <link rel="canonical" href="http://communities.local/"/>
  <link rel="shortlink" href="http://communities.local/"/>
  <meta property="og:site_name" content="Cancer Chat"/>
  <meta property="og:type" content="article"/>
  <meta property="og:title" content="Cancer Chat"/>
  <meta property="og:image" content="http://communities.local/sites/all/themes/crukc_bootstrap/images/cruk-crop.png"/>
  <title><?php print $pageTitle; ?></title>
  <link type="text/css" rel="stylesheet" href="assets/css/styles.css">
  <script src="assets/js/jquery.min.js"></script>
  <script>
      if (typeof CRUK === 'undefined') {
        CRUK = {};
      }
      if (typeof Drupal === 'undefined') {
        Drupal = {};
      }
      if (typeof Drupal.behaviors === 'undefined') {
        Drupal.behaviors = {};
      }
  </script>
  <script src="assets/js/bootstrap/affix.js"></script>
  <script src="assets/js/bootstrap/alert.js"></script>
  <script src="assets/js/bootstrap/button.js"></script>
  <script src="assets/js/bootstrap/carousel.js"></script>
  <script src="assets/js/bootstrap/collapse.js"></script>
  <script src="assets/js/bootstrap/dropdown.js"></script>
  <script src="assets/js/bootstrap/modal.js"></script>
  <script src="assets/js/bootstrap/tooltip.js"></script>
  <script src="assets/js/bootstrap/popover.js"></script>
  <script src="assets/js/bootstrap/scrollspy.js"></script>
  <script src="assets/js/bootstrap/tab.js"></script>
  <script src="assets/js/bootstrap/transition.js"></script>
  <script src="assets/js/bootstrap/jquery.megamenu.js"></script>
  <script src="assets/js/bootstrap/jquery.mobile-rebrand.js"></script>

  <script src="assets/js/modernizr-2.6.2.js?prjr6t"></script>
  <script>jQuery.extend(Drupal.settings, {
      "basePath": "\/",
      "pathPrefix": "",
      "ajaxPageState": {
        "theme": "crukc_bootstrap",
        "theme_token": "rUDFT2FrMVqVYAggT3ynNyXUSQFaAYfwf-J4t5ISrZI",
        "jquery_version": "1.10",
        "css": {
          "modules\/system\/system.base.css": 1,
          "misc\/ui\/jquery.ui.core.css": 1,
          "misc\/ui\/jquery.ui.theme.css": 1,
          "misc\/ui\/jquery.ui.tabs.css": 1,
          "misc\/ui\/jquery.ui.button.css": 1,
          "misc\/ui\/jquery.ui.resizable.css": 1,
          "misc\/ui\/jquery.ui.dialog.css": 1,
          "sites\/all\/modules\/contrib\/media\/css\/media.css": 1,
          "sites\/all\/modules\/contrib\/entity_quote\/css\/entity_quote.css": 1,
          "sites\/all\/modules\/contrib\/codefilter\/codefilter.css": 1,
          "sites\/all\/modules\/contrib\/date\/date_api\/date.css": 1,
          "sites\/all\/modules\/contrib\/date\/date_popup\/themes\/datepicker.1.7.css": 1,
          "modules\/field\/theme\/field.css": 1,
          "sites\/all\/modules\/contrib\/logintoboggan\/logintoboggan.css": 1,
          "sites\/all\/modules\/contrib\/video_filter\/video_filter.css": 1,
          "sites\/all\/modules\/contrib\/views\/css\/views.css": 1,
          "sites\/all\/modules\/custom\/crukc_system\/css\/crukc_system.css": 1,
          "sites\/all\/modules\/contrib\/ctools\/css\/ctools.css": 1,
          "sites\/all\/modules\/contrib\/panels\/css\/panels.css": 1,
          "0": 1,
          "1": 1,
          "sites\/all\/modules\/patched\/harmony_core\/css\/harmony-core.css": 1,
          "sites\/all\/modules\/contrib\/username_check\/username_check.css": 1,
          "sites\/default\/files\/honeypot\/css\/honeypot.css": 1,
          "sites\/all\/themes\/crukc_bootstrap\/css\/styles.css": 1,
          "sites\/all\/themes\/crukc_bootstrap\/css\/mobile.menu.css": 1,
          "sites\/all\/themes\/crukc_bootstrap\/css\/harmony-core.css": 1,
          "sites\/all\/themes\/crukc_bootstrap\/css\/username_check.css": 1
        },
        "js": {
          "sites\/all\/themes\/bootstrap\/js\/bootstrap.js": 1,
          "sites\/all\/modules\/contrib\/jquery_update\/replace\/jquery\/1.10\/jquery.min.js": 1,
          "sites\/all\/libraries\/modernizr\/modernizr-2.6.2.js": 1,
          "misc\/jquery-extend-3.4.0.js": 1,
          "misc\/jquery.once.js": 1,
          "sites\/all\/modules\/contrib\/jquery_update\/replace\/ui\/ui\/minified\/jquery.ui.core.min.js": 1,
          "sites\/all\/modules\/contrib\/jquery_update\/replace\/ui\/ui\/minified\/jquery.ui.widget.min.js": 1,
          "sites\/all\/modules\/contrib\/media\/js\/media.core.js": 1,
          "misc\/drupal.js": 1,
          "sites\/all\/modules\/contrib\/jquery_update\/replace\/ui\/external\/jquery.cookie.js": 1,
          "sites\/all\/modules\/contrib\/jquery_update\/replace\/misc\/jquery.form.min.js": 1,
          "sites\/all\/modules\/contrib\/jquery_update\/replace\/ui\/ui\/minified\/jquery.ui.tabs.min.js": 1,
          "sites\/all\/modules\/contrib\/jquery_update\/replace\/ui\/ui\/minified\/jquery.ui.mouse.min.js": 1,
          "sites\/all\/modules\/contrib\/jquery_update\/replace\/ui\/ui\/minified\/jquery.ui.draggable.min.js": 1,
          "sites\/all\/modules\/contrib\/jquery_update\/replace\/ui\/ui\/minified\/jquery.ui.button.min.js": 1,
          "sites\/all\/modules\/contrib\/jquery_update\/replace\/ui\/ui\/minified\/jquery.ui.position.min.js": 1,
          "sites\/all\/modules\/contrib\/jquery_update\/replace\/ui\/ui\/minified\/jquery.ui.resizable.min.js": 1,
          "sites\/all\/modules\/contrib\/jquery_update\/replace\/ui\/ui\/minified\/jquery.ui.dialog.min.js": 1,
          "sites\/all\/modules\/contrib\/media\/js\/util\/json2.js": 1,
          "sites\/all\/modules\/contrib\/media\/js\/util\/ba-debug.min.js": 1,
          "misc\/ajax.js": 1,
          "sites\/all\/modules\/contrib\/jquery_update\/js\/jquery_update.js": 1,
          "sites\/all\/modules\/contrib\/comstack_pm_ui\/js\/comstack_pm_ui.js": 1,
          "sites\/all\/modules\/contrib\/codefilter\/codefilter.js": 1,
          "sites\/all\/themes\/bootstrap\/js\/misc\/_progress.js": 1,
          "sites\/all\/modules\/contrib\/media\/js\/media.browser.js": 1,
          "sites\/all\/modules\/custom\/crukc_system\/js\/crukc_system.js": 1,
          "sites\/all\/modules\/custom\/crukc_system\/js\/jquery.validate.min.js": 1,
          "sites\/all\/modules\/contrib\/ajax_error_suppress\/js\/ajax.js": 1,
          "sites\/all\/modules\/contrib\/entity_quote\/js\/entity_quote.js": 1,
          "sites\/all\/libraries\/timeago\/jquery.timeago.js": 1,
          "sites\/all\/modules\/contrib\/timeago\/timeago.js": 1,
          "sites\/all\/modules\/contrib\/tinynav\/tinynav-fork.js": 1,
          "sites\/all\/modules\/contrib\/tinynav\/tinynav-drupal.js": 1,
          "sites\/all\/libraries\/blankshield\/blankshield.js": 1,
          "misc\/autocomplete.js": 1,
          "sites\/all\/modules\/custom\/crukc_search_ui\/js\/search-preview.js": 1,
          "sites\/all\/modules\/contrib\/username_check\/username_check.js": 1,
          "sites\/all\/modules\/contrib\/username_check\/username_check_mail.js": 1,
          "sites\/all\/themes\/crukc_bootstrap\/js\/bootstrap\/affix.js": 1,
          "sites\/all\/themes\/crukc_bootstrap\/js\/bootstrap\/alert.js": 1,
          "sites\/all\/themes\/crukc_bootstrap\/js\/bootstrap\/button.js": 1,
          "sites\/all\/themes\/crukc_bootstrap\/js\/bootstrap\/carousel.js": 1,
          "sites\/all\/themes\/crukc_bootstrap\/js\/bootstrap\/collapse.js": 1,
          "sites\/all\/themes\/crukc_bootstrap\/js\/bootstrap\/dropdown.js": 1,
          "sites\/all\/themes\/crukc_bootstrap\/js\/bootstrap\/modal.js": 1,
          "sites\/all\/themes\/crukc_bootstrap\/js\/bootstrap\/tooltip.js": 1,
          "sites\/all\/themes\/crukc_bootstrap\/js\/bootstrap\/popover.js": 1,
          "sites\/all\/themes\/crukc_bootstrap\/js\/bootstrap\/scrollspy.js": 1,
          "sites\/all\/themes\/crukc_bootstrap\/js\/bootstrap\/tab.js": 1,
          "sites\/all\/themes\/crukc_bootstrap\/js\/bootstrap\/transition.js": 1,
          "sites\/all\/themes\/crukc_bootstrap\/js\/jquery.megamenu.js": 1,
          "sites\/all\/themes\/crukc_bootstrap\/js\/script.js": 1,
          "sites\/all\/themes\/crukc_bootstrap\/js\/jquery.mobile-rebrand.js": 1,
          "sites\/all\/themes\/bootstrap\/js\/misc\/autocomplete.js": 1,
          "sites\/all\/themes\/bootstrap\/js\/misc\/ajax.js": 1
        }
      },
      "tinynav": {"selector": "ul.menu.nav", "media_query": "all and (max-width:980px)", "header": false, "active": "active-trail"},
      "urlIsAjaxTrusted": {"\/posts": true, "\/home?destination=home": true, "\/": true},
      "usernameCheck": {"ajaxUrl": "http:\/\/communities.local\/username_check\/isunique", "delay": "1"},
      "mailCheck": {"ajaxUrl": "http:\/\/communities.local\/username_check\/isuniquemail", "delay": "1"},
      "bootstrap": {"anchorsFix": 0, "anchorsSmoothScrolling": 0, "popoverEnabled": 0, "popoverOptions": {"animation": 1, "html": 0, "placement": "right", "selector": "", "trigger": "click", "title": "", "content": "", "delay": 0, "container": "body"}, "tooltipEnabled": 0, "tooltipOptions": {"animation": 1, "html": 0, "placement": "auto left", "selector": "", "trigger": "hover focus", "delay": 0, "container": "body"}}
    });</script>
  <style>
    .home-image {
        background-image: url(assets/images/home.png);
        background-size: cover;
        cursor: default;
        height: 350px;
        width: 940px;
      margin-bottom:1em;
    }

    .pane-title {
      margin:0 !important;
    }


  </style>
</head>
<body class="html front not-logged-in one-sidebar sidebar-first page-home homepage">
<?php include "includes/header.php"; ?>

<div class="main-container container wrapper">
  <header role="title" id="page-header">
    <ol class="breadcrumb">
      <li class="first"><a href="http://www.cancerresearchuk.org">Home</a></li>
      <li class="last"><?php print $pageTitle; ?></li>
    </ol>
    <a id="main-content"></a>
    <h1 class="page-header"><?php print $pageTitle; ?></h1>
  </header>

  <div class="row">
    <div id="panel-0" class="col-md-12 col-sm-12 col-xs-12">
      <div class="home-image">&nbsp;</div>
    </div>

    <section class="col-lg-12">
      <div class="region region-content">
        <section id="block-system-main" class="block block-system clearfix">
          <div class="panel-display clearfix layout-homepage">
            <div class="row">
              <div class="col-lg-12">
                <div class="panel-pane pane-views-panes pane-crukc-thread-listing-panel-pane-2">
                  <h2 class="pane-title">Latest discussions about cancer </h2>
                  <div class="pane-content">
                    <!-- Start page content -->
                    <p>Hello world!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies integer quis auctor elit sed vulputate mi sit. Amet consectetur adipiscing elit ut. Vel fringilla est ullamcorper eget nulla facilisi etiam. Vel turpis nunc eget lorem dolor sed viverra ipsum. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Tristique senectus et netus et malesuada. Sed blandit libero volutpat sed cras. Orci sagittis eu volutpat odio. Nibh cras pulvinar mattis nunc. Eget velit aliquet sagittis id consectetur purus ut faucibus. Sed elementum tempus egestas sed sed risus. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor. Id faucibus nisl tincidunt eget nullam non nisi. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque.</p>
                    <p>Blandit volutpat maecenas volutpat blandit aliquam. Urna id volutpat lacus laoreet non. Neque ornare aenean euismod elementum nisi quis. Semper auctor neque vitae tempus quam pellentesque nec nam. Viverra accumsan in nisl nisi scelerisque. Egestas sed tempus urna et pharetra. A arcu cursus vitae congue. Curabitur vitae nunc sed velit dignissim sodales ut eu sem. Vulputate ut pharetra sit amet aliquam. Faucibus scelerisque eleifend donec pretium vulputate. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Elit ut aliquam purus sit amet luctus venenatis lectus. Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. In hendrerit gravida rutrum quisque non. At imperdiet dui accumsan sit amet nulla facilisi morbi. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Fames ac turpis egestas sed tempus. Lacus sed viverra tellus in hac habitasse platea dictumst vestibulum. Mauris vitae ultricies leo integer malesuada nunc vel risus. Adipiscing enim eu turpis egestas pretium aenean pharetra.</p>
                    <p>Dictumst quisque sagittis purus sit amet volutpat consequat. Vitae tortor condimentum lacinia quis vel. Vel orci porta non pulvinar neque. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. A lacus vestibulum sed arcu non odio euismod lacinia. Consequat id porta nibh venenatis cras sed. Habitasse platea dictumst quisque sagittis. In ornare quam viverra orci sagittis eu volutpat odio. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Neque convallis a cras semper. Purus in mollis nunc sed id semper risus in. Cras adipiscing enim eu turpis egestas pretium aenean pharetra magna. Vitae sapien pellentesque habitant morbi. Massa sed elementum tempus egestas sed sed risus. Quis auctor elit sed vulputate mi sit.</p>
                    <p>Risus quis varius quam quisque id diam. Sed sed risus pretium quam vulputate dignissim suspendisse in. Consectetur purus ut faucibus pulvinar elementum. Consectetur adipiscing elit ut aliquam purus sit amet. Luctus accumsan tortor posuere ac ut consequat semper viverra. Aenean sed adipiscing diam donec adipiscing tristique. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Congue quisque egestas diam in arcu cursus. Lectus quam id leo in. Id volutpat lacus laoreet non curabitur gravida. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis. Aliquam etiam erat velit scelerisque. Eu scelerisque felis imperdiet proin. Vitae proin sagittis nisl rhoncus mattis. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Senectus et netus et malesuada. Diam quam nulla porttitor massa id. Diam volutpat commodo sed egestas egestas fringilla. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Tincidunt id aliquet risus feugiat.</p>
                    <p>Et sollicitudin ac orci phasellus egestas tellus rutrum. Bibendum est ultricies integer quis. Dolor purus non enim praesent elementum facilisis leo. Ipsum nunc aliquet bibendum enim. Platea dictumst quisque sagittis purus sit amet. Massa sed elementum tempus egestas sed sed. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Commodo sed egestas egestas fringilla phasellus faucibus. Quis lectus nulla at volutpat diam. Egestas sed tempus urna et pharetra pharetra. Ut consequat semper viverra nam. Dignissim cras tincidunt lobortis feugiat vivamus at augue. Mattis ullamcorper velit sed ullamcorper. Libero volutpat sed cras ornare.</p>

                    <!-- End page content -->
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
      </div>
    </section>

  </div>
</div>

<?php include "includes/footer.php"; ?>
<script src="assets/js/script.js"></script>
</body>
</html>
