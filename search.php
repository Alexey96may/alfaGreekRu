<?php get_header(); ?>

    <main>

    <hr class="hr_title_page" size="3">
    <h1 class="title_page">
        <?php 
            if ( strlen(get_search_query()) !== 0 ) {
                printf( __( 'Результаты поиска: %s', 'twentyten' ), '' . get_search_query() . '' ); // Динамический заголовок поиска
            } else {
                echo 'Все записи сайта';
            }
        ?></h1>
    <hr class="hr_title_page" size="3">

        <section class="category-search">
            <?php if ( have_posts() ) while ( have_posts() ) : the_post(); // Начало цикла ?>
            <h2 class="search-header"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
            <div class="search-date"><?php the_time('F j, Y'); // Дата создания поста ?></div>
            <p class="author_link">Автор: <?php the_author_posts_link(); ?></p>

            <div class="search-img"><a href="<?php the_permalink(); ?>"><?php if ( has_post_thumbnail() ) { the_post_thumbnail(); } // Проверяем наличие миниатюры, если есть показываем ?></a>
                <div id="search_stat_topic" class="search_stat_topic" name="<?php echo get_the_ID();?>">
                    <img src="<?php echo bloginfo('template_url'); ?>/assets/img/viewers.png" alt="просмотры"> <span class="views_counter"><?php 
                        $vieweredPost = $post->post_viewers;
                        if ($vieweredPost >= 1000000) {
                            echo round($vieweredPost/1000000) . "М";
                        } else if ($vieweredPost >= 1000) {
                            echo round($vieweredPost/1000) . "К";
                        } else {
                            echo $vieweredPost;
                        }
                        ?></span>
                </div>
            </div>
            <div class="search-text"><?php the_excerpt(); // Содержимое страницы ?></div>
            <hr class="hr-text">
            <?php endwhile; // Конец цикла ?>
        </section>

        <div class="pagination">
            <?php // Пагинация
                global $wp_query;
                $big = 999999999;
                echo paginate_links( array(
                'base' => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
                'format' => '?paged=%#%',
                'current' => max( 1, get_query_var('paged') ),
                'type' => 'list',
                'prev_text'    => __('«'),
                'next_text'    => __('»'),
                'total' => $wp_query->max_num_pages
                ) );
            ?>
        </div> 

    </main>


</div>
</div>
<?php get_footer(); ?>