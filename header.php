<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="HandheldFriendly" content="true">
    <meta name="yandex-verification" content="2e4726ba9df27319" />
    <meta name="google-site-verification" content="SmUwA3dIqRulRLNF9szTIo8x-H6wdWgsZuQEdBfac7s" />
    <link rel="icon" href="<?php echo bloginfo('template_url'); ?>/assets/img/title.png" type="image/x-icon">

    <!-- Yandex.Metrika counter -->
    <script type="text/javascript" >
      (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();
      for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

      ym(96757154, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true
      });
    </script>
    <noscript><div><img src="https://mc.yandex.ru/watch/96757154" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
    <!-- /Yandex.Metrika counter -->

    <?php wp_head(); ?>
  </head>

  <body class="body">
    <a id="toTop" title="Наверх" href="#">&#10148;</a>

    <header class="header">
        <div class="mob_nav">
          <div class="logo">
            <a class="navbar-brand" href="<?php echo get_home_url(); ?>"><i class="alfa"><?php the_field('alfa', 11); ?></i> <?php the_field('greek', 11); ?></a>
          </div>
          <div class="button_img">
          <img id="img_sight" onClick="clickBurger();" src="<?php echo bloginfo('template_url'); ?>/assets/img/button.png" alt="button">
          </div>
        </div>
        <hr class="hr_header">
          
          <form method="get" class="form_search" id="searchform" action="<?php bloginfo('home'); ?>/">
            <div class="cont_form">
              <input type="text" class="form_control" value="<?php echo wp_specialchars($s, 1); ?>" name="s" id="s" placeholder="Поиск по сайту" />
              <input class="my_btn" type="submit" value="Найти" id="searchsubmit" />
            </div>
          </form>
          
    </header>

    <div class="all_body">
      <div class="back_navbar" id="back_navbar">
        <nav class="navbar_menu">
          <?php
            wp_nav_menu( [
                'menu'            => 'SideMenu_up',
                'container'       => false,
                'menu_class'      => 'navbar_menu',
                'echo'            => true,
                'fallback_cb'     => 'wp_page_menu',
                'items_wrap'      => '<ul class="header__nav indentTop">%3$s</ul>',
                'depth'           => 1,
            ] );
          ?>
          <hr class="hr-menu">
          <?php
            wp_nav_menu( [
                'menu'            => 'SideMenu_2',
                'container'       => false,
                'menu_class'      => 'navbar_menu',
                'echo'            => true,
                'fallback_cb'     => 'wp_page_menu',
                'items_wrap'      => '<ul class="header__nav">%3$s</ul>',
                'depth'           => 1,
            ] );
          ?>
          <hr class="hr-menu">
          <?php
            wp_nav_menu( [
                'menu'            => 'SideMenu_3',
                'container'       => false,
                'menu_class'      => 'navbar_menu',
                'echo'            => true,
                'fallback_cb'     => 'wp_page_menu',
                'items_wrap'      => '<ul class="header__nav">%3$s</ul>',
                'depth'           => 1,
            ] );
          ?>
          <hr class="hr-menu">
          <?php
            wp_nav_menu( [
                'menu'            => 'SideMenu_down',
                'container'       => false,
                'echo'            => true,
                'fallback_cb'     => 'wp_page_menu',
                'items_wrap'      => '<ul class="header__nav, indentBottom">%3$s</ul>',
                'depth'           => 1,
            ] );
          ?>
        </nav>
      </div>

      <div class="main_container">
        <nav class="nav_breadcrumb">
        <?php echo true_breadcrumbs(); ?>
        </nav>