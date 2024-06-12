<?php 
/*
Template Name: Шаблон для тренажёров
Template Post Type: post, trainings
*/
?>

<?php get_header(); ?>

	<main>
        <hr class="hr_title_page" size="3">
        <h1 class="title_page"><?php the_title(); ?></h1>
        <hr class="hr_title_page" size="3">

        <section>
            <div class="content_game content_training" style="padding:24px;">
                <div class="fix_two_rows">
                    <span id="errorField">Подумайте ещё!</span>
                    <div><h2 class="text-center" id="question_text"></div>
                    </h2>
                </div>
                <div id="select_container">
                    <div id="select_game"></div>
                    <div id="arrowCont">
                        <div class="arrowSel" id="arrowSelTwo"> </div>
                        <div class="arrowSel" id="arrowSelThree"> </div>
                    </div>
                </div>
                <div id="soundCheckDiv" class="dispNone">
                    <div id="reload_Game">
                        <img src="<?php echo bloginfo('template_url'); ?>/assets/img/reload.svg" alt="reloadIcon">
                    </div>
                    <div id="refresh_Game">
                        <img src="<?php echo bloginfo('template_url'); ?>/assets/img/refresh.svg" alt="refreshIcon">
                    </div>
                    <div id="soundCheck">
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <style>.cls-1{fill:#101820;}</style>
                            </defs>
                            <title/>
                            <g data-name="Layer 34" id="Layer_34">
                                <path class="cls-1" d="M18,29a1,1,0,0,1-.57-.18l-10-7A1,1,0,0,1,7,21V11a1,1,0,0,1,.43-.82l10-7a1,1,0,0,1,1-.07A1,1,0,0,1,19,4V28a1,1,0,0,1-.54.89A1,1,0,0,1,18,29ZM9,20.48l8,5.6V5.92l-8,5.6Z"/>
                                <path class="cls-1" d="M8,22H4a3,3,0,0,1-3-3V13a3,3,0,0,1,3-3H8a1,1,0,0,1,1,1V21A1,1,0,0,1,8,22ZM4,12a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H7V12Z"/>
                                <path class="cls-1" id="sLevel1" d="M18,21V19a3,3,0,0,0,2.12-5.12l1.42-1.42A5,5,0,0,1,18,21Z"/>
                                <path class="cls-1" id="sLevel2" d="M26.48,25.48a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42,11,11,0,0,0,0-15.54,1,1,0,1,1,1.42-1.42,13,13,0,0,1,0,18.38A1,1,0,0,1,26.48,25.48Z"/>
                                <path class="cls-1" id="sLevel3" d="M23.65,22.65a1,1,0,0,1-.7-.29A1,1,0,0,1,23,21a7,7,0,0,0,0-9.9,1,1,0,0,1,1.41-1.41,9,9,0,0,1,0,12.72A1,1,0,0,1,23.65,22.65Z"/>
                            </g>
                        </svg>
                    </div>
	            </div>
                <form class="form_game form_train" id="form_game" style="padding-bottom:24px;"><input autocomplete="off" size="30" type="text" name="verb" id="input_verb"><button id="hint_botton" onclick="game_hint()" class="my_btn fw-bold button_game" type="button" name="read" style="margin-right:12px;">Ответ</button><button onclick="game_on_click()" id="input_button" class="my_btn fw-bold button_game" type="button">Ввод</button></form>
                <h4 class="text-center score_title">Осталось вопросов: <span id="score"></span></h4>
            </div>

            <div class="table-content" id="table-content">
            </div>
        </section>
        <section class="train_content">
            <?php the_content();?>
        </section>
        <div id="stat_page" class="stat_topic" name="<?php global $post; echo $post->ID;?>">
            <img src="<?php echo bloginfo('template_url'); ?>/assets/img/viewers.png" alt="просмотры"> <span class="views_counter"><?php echo $post->post_viewers; ?></span>
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