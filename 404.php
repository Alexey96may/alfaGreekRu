<?php
/*
Template Name: Home
*/
?>

<?php
get_header();
?>

  <main>
    <hr class="hr_title_page" size="3">
    <h1 class="title_page">Ошибка 404</h1>
    <hr class="hr_title_page" size="3">

    <h3 class="text-center">Пожалуйста, вернитесь<a href="<?php echo get_home_url(); ?>"> на главную</a>!</h3>
  </main>

</div>
</div>

<?php if ( comments_open() || get_comments_number() ) :
	    comments_template();
	endif; ?>

<?php
get_footer();
?>