<?php

get_header();?>

		<main>
          <hr class="hr_title_page" size="3">
          <h1 class="title_page"><?php the_title(); ?></h1>
          <hr class="hr_title_page" size="3">
          <section>
            <p class="text_paragraph"><?php the_field('main_text_main_page'); ?></p>
            <p class="text_paragraph"><?php the_field('main_text_main_page_2'); ?></p>
            <div class="img_text_container"><img src="<?php the_field('kartinka_main_page'); ?>" class="img-fluid img-thumbnail img-text" alt="alfabet"></div>
          </section>
          <div id="stat_page" class="stat_topic" name="<?php global $post; echo $post->ID;?>">
            <img src="<?php echo bloginfo('template_url'); ?>/assets/img/viewers.png" alt="просмотры"> <span class="views_counter"><?php echo $post->post_viewers; ?></span>
          </div>
		</main>


</div>
</div>
<?php if ( comments_open() || get_comments_number() ) :
	comments_template();
	endif; 
?>


<?php
get_footer();?>
