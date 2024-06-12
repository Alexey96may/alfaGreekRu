<?php get_header(); 

require_once(__DIR__.'/upload.php'); ?>



<main id="content" class="narrowcolumn">



    <?php

        if(isset($_GET['author_name'])) :



            $curauth = get_user_by($author_name);



        else :

            $curauth = get_userdata(intval($author));

        endif;

    ?>

    <div class="author_all_information">

        

        <h2 class="text-center author_name author_name__mobile"><?php echo $curauth->display_name; ?></h2>

        <section>

            <div class="author_photo_div">

                <div>

                    <?php echo get_avatar($curauth->ID, 240, 'mystery'); ?>

                    <ul class="author_another_links">

                        <?php if ($curauth->vklink): ?>

                            <li><a href="<?php echo $curauth->vklink; ?>"><img src="<?php echo bloginfo('template_url'); ?>/assets/img/vk.svg" alt="logo_vk"></a></li>

                        <?php endif; ?>

                        <?php if ($curauth->teleglink): ?>

                            <li><a href="<?php echo $curauth->teleglink; ?>"><img src="<?php echo bloginfo('template_url'); ?>/assets/img/telegram.png" alt="logo_telegram"></a></li>

                        <?php endif; ?>

                        <?php if ($curauth->instagram): ?>

                            <li><a href="<?php echo $curauth->instagram; ?>"><img src="<?php echo bloginfo('template_url'); ?>/assets/img/instagram.png" alt="logo_instagram"></a></li>

                        <?php endif; ?>

                        <?php if ($curauth->facebook): ?>

                            <li><a href="<?php echo $curauth->facebook; ?>"><img src="<?php echo bloginfo('template_url'); ?>/assets/img/facebook.svg" alt="logo_facebook"></a></li>

                        <?php endif; ?>

                        <?php if ($curauth->twitter): ?>

                            <li><a href="<?php echo $curauth->twitter; ?>"><img src="<?php echo bloginfo('template_url'); ?>/assets/img/twitter.svg" alt="logo_twitter"></a></li>

                        <?php endif; ?>

                        <?php if ($curauth->youtube): ?>

                            <li><a href="<?php echo $curauth->youtube; ?>"><img src="<?php echo bloginfo('template_url'); ?>/assets/img/youtube.png" alt="logo_youtube"></a></li>

                        <?php endif; ?>

                        <?php if ($curauth->wikipedia): ?>

                            <li><a href="<?php echo $curauth->wikipedia; ?>"><img src="<?php echo bloginfo('template_url'); ?>/assets/img/wikipedia.svg" alt="logo_wikipedia"></a></li>

                        <?php endif; ?>

                    </ul>

                </div>

                <ul class="author_main_links">

                    <?php if ($curauth->user_age): ?>

                        <li><strong>Год рождения:</strong> <i><?php echo $curauth->user_age; ?></i></li>

                    <?php endif; ?>

                    <?php if ($curauth->city): ?>

                        <li><strong>Город:</strong> <?php echo $curauth->city; ?></li>

                    <?php endif; ?>

                        <li><strong>Email:</strong> <a href="mailto:<?php echo $curauth->user_email; ?>"><?php echo $curauth->user_email; ?></a></li>

                    <?php if ($curauth->user_url): ?>

                        <li><strong>Сайт:</strong> <a href="<?php echo $curauth->user_url; ?>"><?php echo $curauth->user_url; ?></a></li>

                    <?php endif; ?>

                    <?php if ($curauth->level): ?>

                        <li><strong>Уровень греческого:</strong> <?php echo $curauth->level; ?></li>

                    <?php endif; ?>

                </ul>

            </div>

            <div class="author_inf_div">

                <h2 class="text-center author_name author_name__pc"><?php echo $curauth->display_name; ?></h2>

                <hr class="hr-text hr-null">

                <h3 class="text-center author_name">Обо мне:</h3>

                <?php if ($curauth->user_description): ?>

                    <div class="author_describe"><p><?php echo $curauth->user_description; ?></p></div>

                <?php else: ?>

                    <div class="author_describe"><p>Информация отсутствует</p></div>

                <?php endif; ?>

            </div>

        </section>

    </div>



    <hr class="hr-text">





    <div class="top_topics">

        <h3 class="text-center">Последние записи автора</h3>

        <hr class="hr-text">

        <div id="top_topics_scroll" class="top_topics_scroll">

            <div id="to_left" class="fadeToNone"><img src="<?php echo bloginfo('template_url'); ?>/assets/img/arrow.svg" alt=""></div>

            <div id="to_right"><img src="<?php echo bloginfo('template_url'); ?>/assets/img/arrow.svg" alt=""></div>

            <ul class="last_post_list">



                <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

                    <li class="top-post-flex">

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

                        <div class="div_height">

                            <div class="search-date text-center">

                            <?php the_time('F j, Y'); // Дата создания поста ?>

                            </div>

                            <div class="div_margin_auto">

                            <p class="category_link"><img src="<?php echo bloginfo('template_url'); ?>/assets/img/post_category.png" alt="post_category"> <?php the_category('&');?></p>

                            </div>

                        </div>

                    </li>

                    <?php endwhile; else: ?>

                    <p><?php _e('У автора ещё нет записей на этом сайте'); ?></p>

                <?php endif; ?> 

                <!-- Конец цикла -->



            </ul>

        </div>

    </div>



    <hr class="hr-text">



            <h3 class="text-center">Личные записи автора</h3>

            <hr class="hr-text">

            <div>



<?php if ( get_current_user_id() === $curauth->ID ): ?>

    <div>

        <p class="error_topic">

            <b>

                <?php 

                    if(isset($_GET['theError'])) {

                        echo '<b class="error_topic_err">' . $_GET['theError'] . '</b>';

                    };

                    if(isset($_GET['theSuccess'])) {

                        echo '<b class="error_topic_suc">' . $_GET['theSuccess'] . '</b>';

                    };

                ?>

            </b>

        </p>

        <form class="topic_form" action="<?php echo bloginfo('template_url'); ?>/upload.php" method="POST" enctype="multipart/form-data">

            <textarea class="topic_content" name="topic-content" placeholder="Ваша запись" rows="10"></textarea>

            <input class="my_btn topic_submit" type="submit" value="Добавить запись">

            <label class="input-file">

                <span class="input-file-text">Фото</span>

                <input class="topic_photo" type="file" name="topic-photo" onchange="let file = this.files[0]; $(this).closest('.input-file').find('.input-file-text').html(file.name);">

            </label>

            <input type="hidden" name="topic-author" value="<?php echo get_current_user_id(); ?>">

        </form>

    </div>

    <hr class="hr-text">

<?php endif; ?>

<div>

        </div>

        

        <div class="all_the_wall">

            <?php 

                global $wpdb;

                $curauthID = $curauth->ID;

                $sql = $wpdb->prepare(

                    "

                    SELECT * FROM wp_mytable_authors_topics

                    WHERE author_id='%d' ORDER BY `wp_mytable_authors_topics`.`topic_date` DESC

                    ",

                    $curauthID

                );

                $object_row = $wpdb->get_results($sql);

                foreach ($object_row as $key => $value): ?>

                <div class="all_topics" name="<?php echo $value->topic_id; ?>">

                    <div class="wall_topic_date"><span><?php echo mb_substr($value->topic_date, 0, -3); ?></span>

                    <?php if ( (get_current_user_id() === $curauth->ID) || (get_current_user_id() === 1) ): ?>

                        <form action="<?php echo bloginfo('template_url'); ?>/upload.php" method="POST">

                            <input type="hidden" name="topic_id" value="<?php echo $value->topic_id; ?>">

                            <input type="hidden" name="topic_ph" value="<?php echo $value->topic_photo; ?>">

                            <input title="Удалить запись" type="submit" value="x">

                        </form>

                    <?php endif; ?>

                </div>

                    <?php if ( $value->topic_content ): ?>

                        <div class="wall_topic_text"><pre class="topic__pre_text"><?php echo $value->topic_content; ?></pre></div>

                    <?php endif; ?>

                    <?php if ( $value->topic_photo ): ?>

                        <div class="wall_topic_photo"><img src="<?php echo bloginfo('template_url'); ?>/assets/img/uploads/<?php echo $value->topic_photo; ?>" alt="topic_photo"></div>

                    <?php endif; ?>

                    <div id="stat_topic" class="stat_topic">

                            <img src="<?php echo bloginfo('template_url'); ?>/assets/img/viewers.png" alt="просмотры"> <span class="views_counter"><?php echo $value->topic_view; ?></span>

                    </div>

                </div>

                <hr class="hr-text hr-text-last">

            <?php endforeach; ?>

            <?php if (!$object_row): ?>

                <p><?php _e('У автора ещё нет личных записей'); ?></p>

            <?php endif; ?> 

        </div>

    </div>



</main>



</div>

</div>

<?php get_footer(); ?>

