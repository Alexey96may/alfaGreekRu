<?php
    get_header();
?>

<?php if ( have_posts() ) : ?>

    <main>
        <hr class="hr_title_page" size="3">
        <h1 class="title_page"><?php the_archive_title(); ?></h1>
        <hr class="hr_title_page" size="3">
        
        <section class="card-all">
            <div class="under_title">
                <div class="content-hr-text-big"><hr class="hr-text-big"></div>
                    <h2 class="text-center">Мифы</h2>
                <div class="content-hr-text-big"><hr class="hr-text-big"></div>
            </div>

            <div class="accordion"><h4>Подвиги Геракла</h4></div>
            <div class="panel">
            <?php
                global $post;

                $myposts = get_posts([ 
                    'numberposts' => -1,
                    'category'    => 43
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
                    <h2 class="text-center">Персонажи</h2>
                <div class="content-hr-text-big"><hr class="hr-text-big"></div>
            </div>

            <div class="card-all">

                <div class="accordion"><h4>Боги Олимпа</h4></div>
                <div class="panel">
                <?php
                    global $post;

                    $myposts = get_posts([ 
                        'numberposts' => -1,
                        'category'    => 46
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

                <div class="accordion"><h4>Титаны</h4></div>
                <div class="panel">
                <?php
                    global $post;

                    $myposts = get_posts([ 
                        'numberposts' => -1,
                        'category'    => 47
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

                <div class="accordion"><h4>Герои</h4></div>
                <div class="panel">
                <?php
                    global $post;

                    $myposts = get_posts([ 
                        'numberposts' => -1,
                        'category'    => 66
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

<?php else : ?>
    <?php get_template_part( 'template-parts/content/content-none' ); ?>
<?php endif; ?>

    </div>
    </div>

<?php
    get_footer();
?>