<?php 
/*
Template Name: Шаблон для песен
Template Post Type: post, songs
*/
?>

<?php get_header(); ?>

	<main>
        <hr class="hr_title_page" size="3">
        <h1 class="title_page"><?php the_title(); ?></h1>
        <hr class="hr_title_page" size="3">

        <div class="text-center music-video">
            <iframe width="100%" height="100%" src="<?php the_field('video_for_song'); ?>" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
        </div>

        <hr class="hr-text">
        <section class="mp_0">
            <div class="icon_music"><strong>Χρονιά:</strong> <?php the_field('year_song'); ?></div>
            <div class="icon_music"><strong>Άλμπουμ:</strong> <?php the_field('albom_song'); ?></div>
            <div class="icon_music"><strong>Στίχοι:</strong> <?php the_field('stihi_song'); ?></div>
            <div class="icon_music"><strong>Μουσική:</strong> <?php the_field('muzyka_song'); ?></div>
            <div class="icon_music"><strong>Τραγουδιστής:</strong> <?php the_field('vokalist_song'); ?></div>
            <div class="icon_music"><strong>Διερμηνέας:</strong> <?php the_author_posts_link(); ?></div>
        </section>
        <hr class="hr-text">

        <section class="mp_0">
            <div class="table-content music_field">
                <?php the_content(); global $post;?>
            </div>
            <div id="stat_page" class="stat_topic" name="<?php echo $post->ID;?>">
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