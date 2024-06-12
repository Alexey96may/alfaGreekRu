<?php 
/*
Template Name: Шаблон для книг
Template Post Type: post, books
*/
?>

<?php get_header(); ?>

	<main>
        <hr class="hr_title_page" size="3">
        <h1 class="title_page"><?php the_title(); ?></h1>
        <hr class="hr_title_page" size="3">

        <div class="adaptive_image_cont">
            <?php the_post_thumbnail(); ?>
        </div>

        <hr class="hr-text">
        <div class="bottons-book-text">
            <a target="_blank" href="<?php the_field('link_to_sourse'); ?>" download="" class="my_btn my_link_btn" type="button" name="download">Скачать</a>
            <button id="translate_btn" class="my_btn" type="button" name="translate">Перевод</button>
        </div>
        <hr class="hr-text">

        <section id="scroll_field">
            <button id="read_scroll" class="my_btn" type="button" name="translate">Перевод</button>
            <div class="flex-book-text" ID="flex-book-text">
                <h2><?php the_field('zagolovok_originala'); ?></h2>
                <br>
                <?php the_field('paragrafi_originala'); ?>
            </div>

            <div class="flex-book-text-translate hiden" ID="flex-book-text-translate">
                <h2><?php the_field('zagolovok_perevoda'); ?></h2>
                <br>
                <?php the_field('paragrafi_perevoda'); ?>
            </div>
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