<?php 
/*
Template Name: Шаблон для грамматики
Template Post Type: post, grammar
*/
?>

<?php get_header(); ?>

	<main>
        <hr class="hr_title_page" size="3">
        <h1 class="title_page"><?php the_title(); ?></h1>
        <hr class="hr_title_page" size="3">

        <section class="section_content">
            <?php the_content(); ?>
            <div id="stat_page" class="stat_topic" name="<?php global $post; echo $post->ID;?>">
                <img src="<?php echo bloginfo('template_url'); ?>/assets/img/viewers.png" alt="просмотры"> <span class="views_counter"><?php echo $post->post_viewers; ?></span>
            </div>
        </section>

	</main>

    <?php get_template_part( 'template-parts/view-more', null );?> 

</div>
</div>

<?php if ( comments_open() || get_comments_number() ) :
	comments_template();
	endif; 
?>
<?php get_footer();?>