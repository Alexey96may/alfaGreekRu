<?php
    get_header();
?>

<?php if ( have_posts() ) : ?>

    <main>
        <hr class="hr_title_page" size="3">
        <h1 class="title_page"><?php the_archive_title(); ?></h1>
        <hr class="hr_title_page" size="3">

        <section>
            <div class="under_title">
                <div class="content-hr-text-big"><hr class="hr-text-big"></div>
                    <h2 class="text-center">Проза</h2>
                <div class="content-hr-text-big"><hr class="hr-text-big"></div>
            </div>

            <div class="card-all">
                <div class="accordion"><h4>Классика</h4></div>
                <div class="panel">
                <?php
                    global $post;

                    $myposts = get_posts([ 
                        'numberposts' => -1,
                        'category'    => 17
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

                    <div class="accordion"><h4>Сказки</h4></div>
                    <div class="panel">
                    <?php
                        global $post;

                        $myposts = get_posts([ 
                            'numberposts' => -1,
                            'category'    => 19
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
                    <h2 class="text-center">Поэзия</h2>
                <div class="content-hr-text-big"><hr class="hr-text-big"></div>
            </div>

            <div class="card-all">
                <div class="accordion"><h4>XIX-XX век</h4></div>
                <div class="panel">
                <?php
                    global $post;

                    $myposts = get_posts([ 
                        'numberposts' => -1,
                        'category'    => 20
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

                    <div class="accordion"><h4>XX-XXI век</h4></div>
                    <div class="panel">
                    <?php
                        global $post;

                        $myposts = get_posts([ 
                            'numberposts' => -1,
                            'category'    => 21
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
                    <h2 class="text-center">Рецепты</h2>
                <div class="content-hr-text-big"><hr class="hr-text-big"></div>
            </div>

            <div class="card-all">
                <div class="accordion"><h4>Первые блюда</h4></div>
                <div class="panel">
                <?php
                    global $post;

                    $myposts = get_posts([ 
                        'numberposts' => -1,
                        'category'    => 22
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

                    <div class="accordion"><h4>Вторые блюда</h4></div>
                    <div class="panel">
                    <?php
                        global $post;

                        $myposts = get_posts([ 
                            'numberposts' => -1,
                            'category'    => 23
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

                    <div class="accordion"><h4>Салаты</h4></div>
                    <div class="panel">
                    <?php
                        global $post;

                        $myposts = get_posts([ 
                            'numberposts' => -1,
                            'category'    => 24
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

                        <div class="accordion"><h4>Десерты</h4></div>
                        <div class="panel">
                        <?php
                            global $post;

                            $myposts = get_posts([ 
                                'numberposts' => -1,
                                'category'    => 25
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