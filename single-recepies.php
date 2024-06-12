<?php 
/*
Template Name: Шаблон для рецептов
Template Post Type: post, recepies
*/
?>

<?php get_header(); ?>

	<main id="main">
        <div id="twin_main">
            <hr class="hr_title_page" size="3">
            <h1 class="title_page"><?php the_title(); ?></h1>
            <hr class="hr_title_page" size="3">

            <div class="adaptive_image_cont">
                <?php the_post_thumbnail(); ?>
            </div>
            <section><p><?php the_field('text_below_the_photo'); ?></p></section>

            <hr class="hr-text"> 
            <div class="bottons-book-text">
                <a id="readmode_btn" class="my_btn_ic" type="button" name="readmode"><img src="<?php echo bloginfo('template_url'); ?>/assets/img/book_icon_black.png" alt=""></a>
                <a id="darkmode_btn" class="my_btn_ic display_none" type="button" name="darkmode"><img src="<?php echo bloginfo('template_url'); ?>/assets/img/moon_icon.png" alt=""></a>
                <a id="smaller_text" class="my_btn_ic display_none" type="button" name="smaller_text"><img src="<?php echo bloginfo('template_url'); ?>/assets/img/a_smaller.png" alt=""></a>
                <a id="bigger_text" class="my_btn_ic display_none" type="button" name="bigger_text"><img src="<?php echo bloginfo('template_url'); ?>/assets/img/a_bigger.png" alt=""></a>
                <a id="translate_btn" class="my_btn_ic" type="button" name="translate"><img src="<?php echo bloginfo('template_url'); ?>/assets/img/abc_russian.png" alt=""></a>
            </div>
            <hr class="hr-text">

            <section id="scroll_field">
                <button id="read_scroll" class="my_btn" type="button" name="translate">Перевод</button>
                <blockquote>
                    <div class="flex-book-text" ID="flex-book-text">
                        <h2><?php the_field('zagolovok_originala'); ?></h2>
                        <br>
                        <b><?php the_field('titul_ingredientov'); ?></b>
                        <?php the_field('spisok_ingridientov'); ?>
                        <?php the_field('paragrafi_originala'); ?>

                        <?php if( !in_category( array(20, 21) )) { ?>
                            <p class="text-end target_link"><a target="_blank" href="<?php the_field('link_to_sourse'); ?>" class="text-success link-sites">Ссылка на источник</a></p>
                        <?php } ?>
                    </div>
                </blockquote>

                <div class="flex-book-text-translate hiden" ID="flex-book-text-translate">
                    <h2><?php the_field('zagolovok_perevoda'); ?></h2>
                    <br>
                    <b><?php the_field('titul_ingredientov_perevod'); ?></b>
                    <?php the_field('spisok_ingredientov_perevod'); ?>
                    <?php the_field('paragrafi_perevoda'); ?>

                    <?php if( !in_category( array(20, 21) )) { ?>
                        <p class="text-end mt_12 author_link">Автор перевода: <?php the_author_posts_link(); ?></p>
                    <?php } ?>
                </div>
                <div id="stat_page" class="stat_topic" name="<?php global $post; echo $post->ID;?>">
                    <img src="<?php echo bloginfo('template_url'); ?>/assets/img/viewers.png" alt="просмотры"> <span class="views_counter"><?php echo $post->post_viewers; ?></span>
                </div>
            </section>
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