<?php 
/*
Template Name: Лексика
*/
?>

<?php
    get_header();
?>

    <main>
        <hr class="hr_title_page" size="3">
        <h1 class="title_page"><?php the_archive_title(); ?></h1>
        <hr class="hr_title_page" size="3">

        <section class="card-all">
            <div class="under_title">
                <div class="content-hr-text-big"><hr class="hr-text-big"></div>
                    <h2 class="text-center">Слова по частям речи</h2>
                <div class="content-hr-text-big"><hr class="hr-text-big"></div>
            </div>

            <div class="accordion"><h4>Существительные</h4></div>
            <div class="panel">
            <?php
                global $post;

                $myposts = get_posts([ 
                    'numberposts' => -1,
                    'category'    => 9
                ]);

                if( $myposts ){
                    foreach( $myposts as $post ){
                        setup_postdata( $post );
                        ?>
                    
                            <div class="flex-card-image">
                                <a href="<?php the_permalink(); ?>"><?php the_post_thumbnail(); ?></a>
                                <a href="<?php the_permalink(); ?>"><h5 class="flex-card-text"><?php the_title(); ?></h5></a>
                            </div>

                        <?php 
                    } } wp_reset_postdata(); // Сбрасываем $post
                ?>

            </div>

            <div class="accordion"><h4>Прилагательные</h4></div>
            <div class="panel">
            <?php
                global $post;

                $myposts = get_posts([ 
                    'numberposts' => -1,
                    'category'    => 10
                ]);

                if( $myposts ){
                    foreach( $myposts as $post ){
                        setup_postdata( $post );
                        ?>
                    
                            <div class="flex-card-image">
                                <a href="<?php the_permalink(); ?>"><?php the_post_thumbnail(); ?></a>
                                <a href="<?php the_permalink(); ?>"><h5 class="flex-card-text"><?php the_title(); ?></h5></a>
                            </div>

                        <?php 
                    } } wp_reset_postdata(); // Сбрасываем $post
                ?>

            </div>

            <div class="accordion"><h4>Глаголы</h4></div>
            <div class="panel">
            <?php
                global $post;

                $myposts = get_posts([ 
                    'numberposts' => -1,
                    'category'    => 11
                ]);

                if( $myposts ){
                    foreach( $myposts as $post ){
                        setup_postdata( $post );
                        ?>
                    
                            <div class="flex-card-image">
                                <a href="<?php the_permalink(); ?>"><?php the_post_thumbnail(); ?></a>
                                <a href="<?php the_permalink(); ?>"><h5 class="flex-card-text"><?php the_title(); ?></h5></a>
                            </div>

                        <?php 
                    } } wp_reset_postdata(); // Сбрасываем $post
                ?>

            </div>

            <div class="accordion"><h4>Наречия</h4></div>
            <div class="panel">
            <?php
                global $post;

                $myposts = get_posts([ 
                    'numberposts' => -1,
                    'category'    => 12
                ]);

                if( $myposts ){
                    foreach( $myposts as $post ){
                        setup_postdata( $post );
                        ?>
                    
                            <div class="flex-card-image">
                                <a href="<?php the_permalink(); ?>"><?php the_post_thumbnail(); ?></a>
                                <a href="<?php the_permalink(); ?>"><h5 class="flex-card-text"><?php the_title(); ?></h5></a>
                            </div>

                        <?php 
                    } } wp_reset_postdata(); // Сбрасываем $post
                ?>

            </div>
        </section>

        <section>
            <div class="under_title">
                <div class="content-hr-text-big"><hr class="hr-text-big"></div>
                    <h2 class="text-center">Разговорник</h2>
                <div class="content-hr-text-big"><hr class="hr-text-big"></div>
            </div>

            <div class="card-all">
            <div class="accordion"><h4>Фразы</h4></div>
            <div class="panel">
            <?php
                global $post;

                $myposts = get_posts([ 
                    'numberposts' => -1,
                    'category'    => 13
                ]);

                if( $myposts ){
                    foreach( $myposts as $post ){
                        setup_postdata( $post );
                        ?>
                    
                            <div class="flex-card-image">
                                <a href="<?php the_permalink(); ?>"><?php the_post_thumbnail(); ?></a>
                                <a href="<?php the_permalink(); ?>"><h5 class="flex-card-text"><?php the_title(); ?></h5></a>
                            </div>

                        <?php 
                    } } wp_reset_postdata(); // Сбрасываем $post
                ?>

            </div>
            </div>
        </section>
    </main>

    <?php get_template_part( 'template-parts/view-more', null );?> 

    </div>
    </div>

    <?php if ( comments_open() || get_comments_number() ) :
	    comments_template();
	endif; ?>

<?php
    get_footer();
?>