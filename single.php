<?php

get_header();

?>
    <main>

        <?php
        while ( have_posts() ) :
            the_post();

            get_template_part( 'template-parts/content', get_post_type() );

        endwhile; // End of the loop.
        ?>
        <div id="stat_page" class="stat_topic" name="<?php global $post; echo $post->ID;?>">
            <img src="<?php echo bloginfo('template_url'); ?>/assets/img/viewers.png" alt="просмотры"> <span class="views_counter"><?php echo $post->post_viewers; ?></span>
        </div>
    </main><!-- #main -->

    <?php get_template_part( 'template-parts/view-more', null );?> 

</div>
</div>

<?php if ( comments_open() || get_comments_number() ) :
	comments_template();
	endif; 
?>
<?php get_footer();?>