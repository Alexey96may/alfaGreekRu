<?php
/*
Template Name: Home
*/
?>

<?php
get_header();
?>

  <main>
    <hr class="hr_title_page" size="3">
    <h1 class="title_page"><?php the_title(); ?></h1>
    <hr class="hr_title_page" size="3">
    <section class="homeSection">
      <?php the_content(); ?>
    </section>

    <hr class="hr-text">
    <section class="wordDayField">
        <h4>Cлово дня:</h4>
        <div class="dailyWord">
            <p id="dWord"></p>
            <p id="dWordTransl"></p>
            <hr class="dWordNewHr">
            <p id="dWordMorfology"></p>
            <p id="dWordEtimology"></p>
        </div>
    </section>
    <hr class="hr-text">

    <div class="top_topics">
      <h4>Последние записи:</h4>
      <div id="top_topics_scroll" class="top_topics_scroll">
        <div id="to_left" class="fadeToNone"><img src="<?php echo bloginfo('template_url'); ?>/assets/img/arrow.svg" alt=""></div>
        <div id="to_right"><img src="<?php echo bloginfo('template_url'); ?>/assets/img/arrow.svg" alt=""></div>
        <ul class="last_post_list">
        <?php
                  global $post;

                  $myposts = get_posts([ 
                      'numberposts' => 15,
                      'orderby'     => 'date'
                  ]);

                  if( $myposts ){
                      foreach( $myposts as $post ){
                          setup_postdata( $post );
                          ?>
                          <li class="top-post-flex">
                            <div>
                              <a class="link_block" href="<?php the_permalink(); ?>">
                                <div class="container_image_offer">
                                  <?php the_post_thumbnail();?>
                                  <div id="slider_stat_topic" class="slider_stat_topic" name="<?php echo get_the_ID();?>">
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
                              </a>
                              <div class="title_text_offer"><a href="<?php the_permalink(); ?>"><span class="offer_text"><?php the_title();?></span></a></div>
                            </div>
                            <div class="div_height">
                              <div class="search-date text-center">
                                <?php the_time('F j, Y'); // Дата создания поста ?>
                              </div>
                              <div>
                                <p class="author_link"><img src="<?php echo bloginfo('template_url'); ?>/assets/img/post_author.png" alt="post_author"> <?php the_author_posts_link(); ?></p>
                              </div>
                              <div class="div_margin_auto">
                                <p class="category_link"><img src="<?php echo bloginfo('template_url'); ?>/assets/img/post_category.png" alt="post_category"> <?php the_category('&');?></p>
                              </div>
                            </div>
                          </li>
                          
                          <?php 
                      } } wp_reset_postdata(); // Сбрасываем $post
              ?>
          </ul>
        </div>
      </div>
      <hr class="hr-text">
      <br>
    <section>

      <div class="reply__body">
        <div class="reply__title">
            <h4>Оставьте ваш отзыв!</h4>
        </div>
        <?php echo do_shortcode( '[contact-form-7 id="1253" title="Отзывы на почту"]' ) ;?>
      </div>

    </section>


  </main>

</div>
</div>

<?php if ( comments_open() || get_comments_number() ) :
	    comments_template();
	endif; ?>

<?php
get_footer();
?>