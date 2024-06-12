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
                    <h2 class="text-center">Административные единицы</h2>
                <div class="content-hr-text-big"><hr class="hr-text-big"></div>
            </div>

            <div class="accordion"><h4>Области</h4></div>
            <div class="panel">
            <?php
                global $post;

                $myposts = get_posts([ 
                    'numberposts' => -1,
                    'category'    => 30
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

            <div class="accordion"><h4>Города и Поселения</h4></div>
            <div class="panel">
                <?php
                    global $post;

                    $myposts = get_posts([ 
                        'numberposts' => -1,
                        'category'    => 31
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

            <div class="accordion"><h4>Мини-игры</h4></div>
            <div class="panel">
                <?php
                    global $post;

                    $myposts = get_posts([ 
                        'numberposts' => -1,
                        'category'    => 32
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
                    <h2 class="text-center">Природные объекты</h2>
                <div class="content-hr-text-big"><hr class="hr-text-big"></div>
            </div>

            <div class="card-all">
                <div class="accordion"><h4>Острова</h4></div>
                    <div class="panel">
                    <?php
                        global $post;

                        $myposts = get_posts([ 
                            'numberposts' => -1,
                            'category'    => 33
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

                    <div class="accordion"><h4>Горы</h4></div>
                    <div class="panel">
                    <?php
                        global $post;

                        $myposts = get_posts([ 
                            'numberposts' => -1,
                            'category'    => 34
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

                    <div class="accordion"><h4>Реки</h4></div>
                    <div class="panel">
                    <?php
                        global $post;

                        $myposts = get_posts([ 
                            'numberposts' => -1,
                            'category'    => 35
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

            <section>
                <div class="under_title">
                    <div class="content-hr-text-big"><hr class="hr-text-big"></div>
                        <h2 class="text-center">Достопримечательности</h2>
                    <div class="content-hr-text-big"><hr class="hr-text-big"></div>
                </div>

                <div class="card-all">
                    <div class="accordion"><h4>Здания и сооружения</h4></div>
                    <div class="panel">
                        <?php
                            global $post;

                            $myposts = get_posts([ 
                                'numberposts' => -1,
                                'category'    => 36
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

                        <div class="accordion"><h4>Природные объекты</h4></div>
                        <div class="panel">
                        <?php
                            global $post;

                            $myposts = get_posts([ 
                                'numberposts' => -1,
                                'category'    => 37
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