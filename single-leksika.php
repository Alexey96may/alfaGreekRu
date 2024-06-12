<?php 
/*
Template Name: Шаблон для лексики
Template Post Type: post, lexika
*/
?>

<?php get_header(); ?>

	<main>
        <hr class="hr_title_page" size="3">
        <h1 class="title_page"><?php the_title(); ?></h1>
        <hr class="hr_title_page" size="3">

        <section class="padding_bottom_0">
            <div class="table-content table-hover">
                <?php the_content(); ?>
            </div>
        </section>

        <section>
            <hr class="hr-text">
            <h2 class="text-center">Проверьте свои знания!</h2>
            <p class="text-center"><em>(Если Quizlet не загружается, используйте vpn!)</em></p>
            <hr class="hr-text">

            <iframe src="<?php the_field('ssylka_na_quizlet'); ?>" height="650px" width="100%" style="border: 2px solid black"></iframe>
        </section>
        <div id="stat_page" class="stat_topic" name="<?php global $post; echo $post->ID;?>">
            <img src="<?php echo bloginfo('template_url'); ?>/assets/img/viewers.png" alt="просмотры"> <span class="views_counter"><?php echo $post->post_viewers; ?></span>
        </div>
    
	</main>

    <?php get_template_part( 'template-parts/view-more', null );?> 

</div>
</div>

<?php if ( comments_open() || get_comments_number() ) :
	comments_template();
	endif; 
?>
<?php get_footer();?>