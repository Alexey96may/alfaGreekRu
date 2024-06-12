
    <footer>
      <div class="links_footer" >
        <a href="<?php the_field('ssylka_na_tg', 11); ?>">
          <img src="https://alfa-greek.ru/wp-content/themes/alfa-greek/assets/img/telegram.png" alt="logo_telegram">
        </a>
      </div>
      <div>
        <div><a href="<?php the_permalink(3); ?>">Политика конфиденциальности</a></div>
        <div><?php the_field('copyright', 11); ?></div>
      </div>
      <div id="cookie_block">
      <p>Для улучшения работы сайта и его взаимодействия с пользователями мы используем файлы cookie. Продолжая работу с сайтом, Вы разрешаете использование cookie-файлов, описанное в <a class="privat_policy" href="http://alfa-greek/privacy-policy/">Политике конфиденциальности</a> нашего сайта. Вы всегда можете отключить файлы cookie в настройках Вашего браузера.</p>
      <button class="my_btn cookie_accept">Принять</button>
    </div>
    </footer>
  
    <?php
      wp_footer();
    ?>
  </body>
</html>