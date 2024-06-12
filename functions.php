<?php

add_action( 'wp_enqueue_scripts', function () {
	wp_enqueue_style( 'style-name', get_stylesheet_uri() );

    wp_deregister_script('jquery');
    wp_register_script('jquery', 'https://code.jquery.com/jquery-3.6.0.min.js' );
    wp_enqueue_script( 'jquery');

    wp_enqueue_script( 'script-menu', get_template_directory_uri() . '/assets/js/menu.js', array(), 'null', true );

    add_action( 'admin_enqueue_scripts', 'true_include_in_admin', 25 );
    function true_include_in_admin() {
        wp_enqueue_script( 'main_plug.js', plugins_url() . '/my_trainer-plagin/js/main.js', array(), 'null', true );
    }
    wp_enqueue_script( 'script-top', get_template_directory_uri() . '/assets/js/top.js', array('jquery'), 'null', false );
    wp_enqueue_script( 'script-cookies', get_template_directory_uri() . '/assets/js/cookies.js', array(), 'null', true );

    if( is_category( [ 50, 51, 53, 54, 55 ] )) {
        wp_enqueue_script( 'script-cards', get_template_directory_uri() . '/assets/js/cards.js', array(), 'null', true );
    }

    if( in_category( [ 30, 31 ] )) {
        wp_enqueue_script( 'map_cities', get_template_directory_uri() . '/assets/js/map_cities.js', array(), 'null', true );
    }

    if ( is_page_template( [ 'single-geography.php', 'single-recepies.php' ] ) ) {
        wp_enqueue_script( 'script-reader', get_template_directory_uri() . '/assets/js/reader.js', array('jquery'), 'null', true );
    }

    if( is_single( 524 )) {
        wp_enqueue_script( 'script-game_states', get_template_directory_uri() . '/assets/js/game_states.js', array(), 'null', true );
    }
    if( is_single( 525 )) {
        wp_enqueue_script( 'script-game_cities', get_template_directory_uri() . '/assets/js/game_cities.js', array(), 'null', true );
    }
    if( is_single( 1388 )) {
        wp_enqueue_script( 'script-training_irregular_aorist', get_template_directory_uri() . '/assets/js/train_irregular_aorist.js', array(), 'null', false );
    }
    if( is_single( 1398 )) {
        wp_enqueue_script( 'script-training_past_simple', get_template_directory_uri() . '/assets/js/train_past_simple.js', array(), 'null', false );
    }
    if( is_single( 1396 )) {
        wp_enqueue_script( 'script-training_past_imperfect', get_template_directory_uri() . '/assets/js/train_past_imperfect.js', array(), 'null', false );
    }
    if( is_single( 1394 )) {
        wp_enqueue_script( 'script-training_indicative', get_template_directory_uri() . '/assets/js/train_indicative.js', array(), 'null', false );
    }
    if( is_single( 1392 )) {
        wp_enqueue_script( 'script-training_imperative', get_template_directory_uri() . '/assets/js/train_imperative.js', array(), 'null', false );
    }
    if( is_single( 1505 )) {
        wp_enqueue_script( 'script-training_genitive_case', get_template_directory_uri() . '/assets/js/train_gen_case.js', array(), 'null', false );
    }
    if( is_single( 1509 )) {
        wp_enqueue_script( 'script-training_accusative_case', get_template_directory_uri() . '/assets/js/train_accus_case.js', array(), 'null', false );
    }
    if( is_single( 1538 )) {
        wp_enqueue_script( 'script-training_verb_all_the_times', get_template_directory_uri() . '/assets/js/train_verb_all_the_times.js', array(), 'null', false );
    }
    if( is_single( 1560 )) {
        wp_enqueue_script( 'script-training_adjectives', get_template_directory_uri() . '/assets/js/train_adjectives.js', array(), 'null', false );
    }
    if( is_single( 1572 )) {
        wp_enqueue_script( 'script-train_word_formation', get_template_directory_uri() . '/assets/js/train_word_formation.js', array(), 'null', false );
    }
    if( is_single( 1551 )) {
        wp_enqueue_script( 'script-train_pron', get_template_directory_uri() . '/assets/js/train_pron.js', array(), 'null', false );
    }
    if( is_front_page() || is_author() ) {
        wp_enqueue_script( 'script-scroll_by_arrows', get_template_directory_uri() . '/assets/js/scroll_by_arrows.js', array(), 'null', true );
    }    
    if( is_author() ) {
        wp_enqueue_script( 'author_script', get_template_directory_uri() . '/assets/js/author_script.js', array(), 'null', true );
    }
    if( is_single() || is_page()) {
        wp_enqueue_script( 'pageViewer_script', get_template_directory_uri() . '/assets/js/pageViewer_script.js', array(), 'null', true );
    }     
    if (is_page_template( 'single-training.php' )) {
        wp_enqueue_script( 'main_trainer', get_template_directory_uri() . '/assets/js/main_trainer.js', array(), 'null', true );
    }
    if (is_front_page()) {
        wp_enqueue_script( 'main_DaylyWord', get_template_directory_uri() . '/assets/js/main_DaylyWord.js', array(), 'null', true );
    }
});

add_theme_support('custom-logo');
add_theme_support('post-thumbnails');
add_theme_support('title-tag');
add_theme_support('menus');

add_action( 'after_setup_theme', 'lexadmin_theme_setup' );
function lexadmin_theme_setup() {
	// включаем поддержку
	add_theme_support( 'editor-styles' );
	add_editor_style( 'assets/styles/style-editor.css' );
}

add_filter( 'avatar_defaults', 'add_default_avatar_option' );
function add_default_avatar_option( $avatars ){
	$url = get_stylesheet_directory_uri() . '/assets/img/user.png';
	$avatars[ $url ] = 'Аватар сайта';
	return $avatars;
}

add_filter('nav_menu_link_attributes', 'filter_nav_menu_link_attributes', 10, 3);

function filter_nav_menu_link_attributes($atts, $item, $args) {
    if ($args->menu === 'SideMenu_up') {
        $atts['class'] = 'nav-link';

        if ($item->current) {
            $atts['class'] .= ' nav-link-active';
        }

        if ($item->ID === 201 && ( in_category( 'soft_toys' ) || in_category( 'edu_toys' ))) {
            $atts['class'] .= ' nav-link-active';
        }
    };

    if ($args->menu === 'SideMenu_2') {
        $atts['class'] = 'nav-link';

        if ($item->current) {
            $atts['class'] .= ' nav-link-active';
        }

        if ($item->ID === 201 && ( in_category( 'soft_toys' ) || in_category( 'edu_toys' ))) {
            $atts['class'] .= ' nav-link-active';
        }
    };

    if ($args->menu === 'SideMenu_3') {
        $atts['class'] = 'nav-link';

        if ($item->current) {
            $atts['class'] .= ' nav-link-active';
        }

        if ($item->ID === 201 && ( in_category( 'soft_toys' ) || in_category( 'edu_toys' ))) {
            $atts['class'] .= ' nav-link-active';
        }
    };

    if ($args->menu === 'SideMenu_down') {
        $atts['class'] = 'nav-link';

        if ($item->current) {
            $atts['class'] .= ' nav-link-active';
        }

        if ($item->ID === 201 && ( in_category( 'soft_toys' ) || in_category( 'edu_toys' ))) {
            $atts['class'] .= ' nav-link-active';
        }
    };

    return $atts;
};

add_filter( 'get_the_archive_title', 'remove_name_cat' );
function remove_name_cat( $title ){
	if ( is_category() ) {
		$title = single_cat_title( '', false );
	} elseif ( is_tag() ) {
		$title = single_tag_title( '', false );
	}
	return $title;
}

add_action( 'init', 'alfagreek_register_pattern_category', 25 );
 
function alfagreek_register_pattern_category() {
	if ( class_exists( 'WP_Block_Patterns_Registry' ) ) {
 
		register_block_pattern_category(
			'alfagreek',
			array( 'label' => 'Alfa-Greek паттерны' )
		);
 
	}
}

add_action( 'init', 'alfagreek_register_block_pattern', 25 );
 
function alfagreek_register_block_pattern() {
 
	if ( class_exists( 'WP_Block_Patterns_Registry' ) ) {

        register_block_pattern(
            'alfagreek/subtitle-pattern',
            array(
                'title'       => 'Подзаголовок Alfa-Greek',
                'description' => 'Этот паттерн позволяет вам вставить заготовку "Примеры:".',
                'content'     => '<!-- wp:group --><div class="wp-block-group content-hr-text-big"><!-- wp:separator --><hr class="wp-block-separator has-alpha-channel-opacity hr-text-big"/><!-- /wp:separator --><!-- wp:heading --><h2 class="text-center">Подзаголовок</h2><!-- /wp:heading --><!-- wp:separator --><hr class="wp-block-separator has-alpha-channel-opacity hr-text-big"/><!-- /wp:separator --></div><!-- /wp:group -->',
                'categories'  => array( 'alfagreek' ),
            ));

		register_block_pattern(
			'alfagreek/table-pattern',
			array(
				'title'       => 'Таблица Alfa-Greek',
				'description' => 'Этот паттерн позволяет вам вставить таблицу.',
				'content'     => '<!-- wp:group --><div class="wp-block-group table-content"><!-- wp:table {"className":"is-style-regular"} --><figure class="wp-block-table is-style-regular"><table><thead><tr><th scope="col">Заголовок</th><th scope="col">Заголовок</th><th scope="col">Заголовок</th></tr></thead><tbody><tr><td>Текст</td><td>Текст</td><td>Текст</td></tr></tbody></table></figure><!-- /wp:table --></div><!-- /wp:group -->',
				'categories'  => array( 'alfagreek' ),
			));

        register_block_pattern(
            'alfagreek/examples-pattern',
            array(
                'title'       => 'Синее поле "Примеры" Alfa-Greek',
                'description' => 'Этот паттерн позволяет вам вставить заготовку "Примеры:".',
                'content'     => '<!-- wp:group --><div class="wp-block-group p_0"><!-- wp:paragraph --><span class="badge bg-main">Примеры</span><!-- /wp:paragraph --><!-- wp:list {"ordered":true} --><ol class="ol-text ol-text-blue"><li>Текст</li><li>Текст</li><li>Текст</li></ol><!-- /wp:list --></div><!-- /wp:group -->',
                'categories'  => array( 'alfagreek' ),
            ));

        register_block_pattern(
            'alfagreek/in_addition-pattern',
            array(
                'title'       => 'Серое поле "Кроме того" Alfa-Greek',
                'description' => 'Этот паттерн позволяет вам вставить заготовку "Кроме того:".',
                'content'     => '<!-- wp:group --><div class="wp-block-group p_0"><!-- wp:paragraph --><span class="badge bg-secondary">Кроме того</span><!-- /wp:paragraph --><!-- wp:list {"ordered":true} --><ol class="ol-text ol-text-star"><li>Текст</li><li>Текст</li><li>Текст</li></ol><!-- /wp:list --></div><!-- /wp:group -->',
                'categories'  => array( 'alfagreek' ),
            ));

        register_block_pattern(
            'alfagreek/danger-pattern',
            array(
                'title'       => 'Красное поле "Ударение" Alfa-Greek',
                'description' => 'Этот паттерн позволяет вам вставить заготовку "Ударение:".',
                'content'     => '<!-- wp:group --><div class="wp-block-group p_0"><!-- wp:paragraph --><span class="badge bg-danger">Ударение</span><!-- /wp:paragraph --><!-- wp:list {"ordered":true} --><ol class="ol-text ol-text-red ol-text-tick"><li>Текст</li><li>Текст</li><li>Текст</li></ol><!-- /wp:list --></div><!-- /wp:group -->',
                'categories'  => array( 'alfagreek' ),
            ));

        register_block_pattern(
            'alfagreek/complement-pattern',
            array(
                'title'       => 'Зеленое поле "Дополнительно" Alfa-Greek',
                'description' => 'Этот паттерн позволяет вам вставить заготовку "Дополнительно:".',
                'content'     => '<!-- wp:group --><div class="wp-block-group p_0"><!-- wp:paragraph --><span class="badge bg-success">Дополнительно</span><!-- /wp:paragraph --><!-- wp:list {"ordered":true} --><ol class="ol-text ol-text-green ol-text-plus"><li>Текст</li><li>Текст</li><li>Текст</li></ol><!-- /wp:list --></div><!-- /wp:group -->',
                'categories'  => array( 'alfagreek' ),
            ));

        register_block_pattern(
            'alfagreek/laurel-pattern',
            array(
                'title'       => '"Лавровый лист" Alfa-Greek',
                'description' => 'Этот паттерн позволяет вам вставить заготовку разъдинителя лаврового листа.',
                'content'     => '<!-- wp:group --><div class="wp-block-group p_0 content-hr-text-laurel"></div><!-- /wp:group -->',
                'categories'  => array( 'alfagreek' ),
            ));

        register_block_pattern(
            'alfagreek/hr-pattern',
            array(
                'title'       => ' HR в Alfa-Greek',
                'description' => 'Этот паттерн позволяет вам вставить заготовку разъдинителя.',
                'content'     => '<!-- wp:separator --><hr class="wp-block-separator hr-text"/><!-- /wp:separator -->',
                'categories'  => array( 'alfagreek' ),
            ));
    }
}

function true_breadcrumbs(){
 
	// получаем номер текущей страницы
	$page_num = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
	$separator = ' » ';
 
	// если главная страница сайта
	if( is_front_page() ){
 
		if( $page_num > 1 ) {
			echo '<a href="' . site_url() . '">Главная</a>' . $separator . $page_num . '-я страница';
		} else {
			echo 'Главная';
		}
 
	} else { // не главная
 
		echo '<a href="' . site_url() . '">Главная</a>' . $separator;
        
		if( is_single() ){ // записи

            $post_categories = get_the_category();
 
            // это и будет наша единственная рубрика, присвоенная к посту
            if( ! empty( $post_categories[0]->cat_ID ) ) {
                echo get_category_parents( $post_categories[0]->cat_ID, true, $separator );
            }
            the_title();
 
		} elseif ( is_page() ){ // страницы WordPress 

            global $post;
            // если у текущей страницы существует родительская
            if ( $post->post_parent ) {
            
                $parent_id  = $post->post_parent; // присвоим в переменную
                $breadcrumbs = array(); 
            
                while ( $parent_id ) {
                    $page = get_page( $parent_id );
                    $breadcrumbs[] = '<a href="' . get_permalink( $page->ID ) . '">' . get_the_title( $page->ID ) . '</a>';
                    $parent_id = $page->post_parent;
                }
            
                echo join( $separator, array_reverse( $breadcrumbs ) );
            
            }
 
			the_title();
 
		} elseif ( is_category() ) {

            $current_cat = get_queried_object();
            // если родительская рубрика существует
            if( $current_cat->parent ) {
                echo get_category_parents( $current_cat->parent, true, $separator );
            }
 
			single_cat_title();
 
		} elseif( is_tag() ) {
 
			single_tag_title();
 
		} elseif ( is_day() ) { // архивы (по дням)
 
			echo '<a href="' . get_year_link( get_the_time( 'Y' ) ) . '">' . get_the_time( 'Y' ) . '</a>' . $separator;
			echo '<a href="' . get_month_link( get_the_time( 'Y' ), get_the_time( 'm' ) ) . '">' . get_the_time( 'F' ) . '</a>' . $separator;
			echo get_the_time('d');
 
		} elseif ( is_month() ) { // архивы (по месяцам)
 
			echo '<a href="' . get_year_link( get_the_time( 'Y' ) ) . '">' . get_the_time( 'Y' ) . '</a>' . $separator;
			echo get_the_time('F');
 
		} elseif ( is_year() ) { // архивы (по годам)
 
			echo get_the_time( 'Y' );
 
		} elseif ( is_author() ) { // архивы по авторам
 
			global $author;
			$userdata = get_userdata( $author );
			echo $userdata->display_name;
 
		} elseif ( is_404() ) { // если страницы не существует
 
			echo 'Ошибка 404';

        } elseif ( is_search() ) { // если страницы не существует
    
            if ( strlen(get_search_query()) == 0 ) {
                echo 'Все записи';
            } else {
            echo get_search_query();
            }
        }
 
		if ( $page_num > 1 ) { // номер текущей страницы
			echo ' (' . $page_num . '-я страница)';
		}
	}
}

// когда пользователь сам редактирует свой профиль
add_action( 'show_user_profile', 'true_show_profile_fields' );
// когда чей-то профиль редактируется админом например
add_action( 'edit_user_profile', 'true_show_profile_fields' );
 
function true_show_profile_fields( $user ) {
 
	// выводим заголовок для наших полей
 	echo '<h3>Дополнительная информация</h3>';
 
	// поля в профиле находятся в рамметке таблиц <table>
 	echo '<table class="form-table">';

    // добавляем ВК
	$user_vklink = get_the_author_meta( 'vklink', $user->ID );
    echo '<tr><th><label for="vklink">Ссылка на профиль в VK</label></th>
    <td><input type="text" name="vklink" id="vklink" value="' . esc_attr( $user_vklink ) . '" class="regular-text" /></td>
   </tr>';

    // добавляем telegram
	$user_teleglink = get_the_author_meta( 'teleglink', $user->ID );
    echo '<tr><th><label for="teleglink">Ссылка на профиль в Telegram</label></th>
    <td><input type="text" name="teleglink" id="teleglink" value="' . esc_attr( $user_teleglink ) . '" class="regular-text" /></td>
   </tr>';
 
    // добавляем поле возраст
	$user_age = get_the_author_meta( 'user_age', $user->ID );
    echo '<tr><th><label for="user_age">Год рождения</label></th>
    <td><input type="text" name="user_age" id="user_age" value="' . esc_attr( $user_age ) . '" class="regular-text" /></td>
   </tr>';

    // добавляем поле город
	$user_city = get_the_author_meta( 'city', $user->ID );
    echo '<tr><th><label for="city">Город</label></th>
    <td><input type="text" name="city" id="city" value="' . esc_attr( $user_city ) . '" class="regular-text" /></td>
   </tr>';
 
	// добавляем поле пол
	// также можно и установить значение по умолчанию
	$level = ( $level = get_the_author_meta( 'level', $user->ID ) ) ? $level : 'А1';
 	echo '<tr><th><label for="gender">Уровень владения греческим</label></th>
 		<td><ul>
 			<li><label><input value="А1" name="level"' . checked( $level, 'А1', false ) . ' type="radio" /> А1</label></li>
 			<li><label><input value="А2" name="level"' . checked( $level, 'А2', false ) . ' type="radio" /> А2</label></li>
			<li><label><input value="В1" name="level"' . checked( $level, 'В1', false ) . ' type="radio" /> В1</label></li>
            <li><label><input value="В2" name="level"' . checked( $level, 'В2', false ) . ' type="radio" /> В2</label></li>
 			<li><label><input value="Г1" name="level"' . checked( $level, 'Г1', false ) . ' type="radio" /> Г1</label></li>
			<li><label><input value="Г2" name="level"' . checked( $level, 'Г2', false ) . ' type="radio" /> Г2</label></li>
            <li><label><input value="Native" name="level"' . checked( $level, 'Native', false ) . ' type="radio" /> Родной</label></li>
 		</ul></td>
 	</tr>';
 
 	echo '</table>';
 
}

// когда пользователь сам редактирует свой профиль
add_action( 'personal_options_update', 'true_save_profile_fields' );
// когда чей-то профиль редактируется админом например
add_action( 'edit_user_profile_update', 'true_save_profile_fields' );
 
function true_save_profile_fields( $user_id ) {
    update_user_meta( $user_id, 'vklink', sanitize_text_field( $_POST[ 'vklink' ] ) );
    update_user_meta( $user_id, 'teleglink', sanitize_text_field( $_POST[ 'teleglink' ] ) );
	update_user_meta( $user_id, 'city', sanitize_text_field( $_POST[ 'city' ] ) );
    update_user_meta( $user_id, 'user_age', sanitize_text_field( $_POST[ 'user_age' ] ) );
	update_user_meta( $user_id, 'level', sanitize_text_field( $_POST[ 'level' ] ) );
}

// Картинка по умолчанию
add_action( 'save_post', 'thumbByDefault' );
function thumbByDefault($post_id) {
    if(has_post_thumbnail($post_id)) {
    } else {
        $thumbnail_id = attachment_url_to_postid( "https://alfa-greek.ru/wp-content/uploads/2024/03/thumbdefault.png" );
        set_post_thumbnail( $post_id, $thumbnail_id );
    }
}

?>