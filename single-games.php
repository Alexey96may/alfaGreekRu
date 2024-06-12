<?php 
/*
Template Name: Шаблон для игр (география)
Template Post Type: post, games-geography
*/
?>

<?php get_header(); ?>

	<main>
        <hr class="hr_title_page" size="3">
        <h1 class="title_page"><?php the_title(); ?></h1>
        <hr class="hr_title_page" size="3">
        <?php

        $gamer_name = trim($_POST["gamer_name"]);
        $gamer_score = trim($_POST["count_score"]);
        $gamer_time = trim($_POST["timescore"]);

        global $wpdb;
        $score_min;
        $score_max;
    
        if( is_single( 524 )) {
            $score_min_max = $wpdb->get_results( "SELECT MIN(score) as min_sc, MAX(time_score) as max_sc FROM (SELECT * FROM `wp_score_game_regions` ORDER BY `wp_score_game_regions`.`score` DESC, `wp_score_game_regions`.`time_score` ASC LIMIT 30) as dt" );
        } else {
            $score_min_max = $wpdb->get_results( "SELECT MIN(score), MAX(time_score) FROM `wp_score_game_regions` ORDER BY `wp_score_game_cities`.`score` DESC, `wp_score_game_regions`.`time_score` ASC LIMIT 30" );
        }
        foreach ($score_min_max as $key => $value) {
            $score_min = $value->min_sc;
            $score_max = $value->max_sc;
        }

        if ($gamer_name) {
            if ($gamer_score >= $score_min) {
                if( is_single( 524 )) {
                    $wpdb->insert( 'wp_score_game_regions', [ 'name' => "$gamer_name", 'score' => "$gamer_score", 'time_score' => "$gamer_time" ] );
                } else {
                    $wpdb->insert( 'wp_score_game_cities', [ 'name' => "$gamer_name", 'score' => "$gamer_score", 'time_score' => "$gamer_time" ] );
                }
                header('Location: https://alfa-greek.ru/geografiya/admin-ediniczy/geography-games/regiony-greczii');
            }
        }
        ?>
        
        <div class="content_game">
            <div id="game_cover_start" class="game_cover_start">
                <button id="start_game" onclick='start_game()' class="my_btn" type="button" name="start">Начать игру</button>
            </div>

            <div id="game_cover_end" class="game_cover_end">
                <form method="post" class="form_game score_form" action="" name=myScoreForm>
                    <input id="count_score" class="my_btn" type="hidden" name="count_score" value="">
                    <input id="time_score" class="my_btn" type="hidden" name="timescore" value="00:00:00">
                    <input id="name_score" type="text" name="gamer_name" placeholder="Введите Ваше имя">
                    <input id="send_score" class="my_btn" type="submit" name="send_score" size=20 value="Сохранить результат">
                    <input id="back" onclick='reload_game()' class="my_btn" type="button" name="back" size=20 value="Новая игра">
                </form>
            </div>
            <div class="stick_question">
                <h2 class="text-center" id="question_text"></h2>
            </div>
            <h4 class="text-center score_title">Ваш счёт: <span id="score"></span></h4>
            <form class="form_game" name=MyForm><input name=stopwatch size=10 value="00:00:00" disabled></form>

            <?php if( is_single( 524 )) { ?>
                <div class="map_card">
                <div class="container_maps">
                    <img class="image_map" id="image" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/map-greece.png" usemap="#map_greece" alt="map_greece">
                    <img class="image_map vis_0" id="image_map" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/cut_central_greece.png" usemap="#map_greece" alt="map_greece">
                    <img class="image_map vis_0" id="image_map_2" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/cut_thessaly.png" usemap="#map_greece" alt="map_greece">
                    <img class="image_map vis_0" id="image_map_3" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/cut_aegean_south_islands.png" usemap="#map_greece" alt="map_greece">
                    <img class="image_map vis_0" id="image_map_4" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/cut_west_greece.png" usemap="#map_greece" alt="map_greece">
                    <img class="image_map vis_0" id="image_map_5" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/cut_central_macedonia.png" usemap="#map_greece" alt="map_greece">
                    <img class="image_map vis_0" id="image_map_6" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/cut_peloponnese.png" usemap="#map_greece" alt="map_greece">
                    <img class="image_map vis_0" id="image_map_7" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/cut_ionian_islands.png" usemap="#map_greece" alt="map_greece">
                    <img class="image_map vis_0" id="image_map_8" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/cut_attica.png" usemap="#map_greece" alt="map_greece">
                    <img class="image_map vis_0" id="image_map_9" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/cut_east_macedonia_and_thrace.png" usemap="#map_greece" alt="map_greece">
                    <img class="image_map vis_0" id="image_map_10" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/cut_epirus.png" usemap="#map_greece" alt="map_greece">
                    <img class="image_map vis_0" id="image_map_11" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/cut_west_macedonia.png" usemap="#map_greece" alt="map_greece">
                    <img class="image_map vis_0" id="image_map_12" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/cut_aegean_nord_islands.png" usemap="#map_greece" alt="map_greece">
                    <img class="image_map vis_0" id="image_map_13" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/cut_crete.png" usemap="#map_greece" alt="map_greece">
                    <img class="image_map vis_0" id="image_map_14" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/cut_ams_of_the_holy_mountain.png" usemap="#map_greece" alt="map_greece">
                </div>
                </div>
                <map name="map_greece" id="map_greece">
                    <area onmouseover='game_on_move(0, "image_map_13")' onmouseout='game_on_move(0, "image_map_13")' onclick="game_on_click('image_map_13', question_crete, 0)" alt="crete" coords="404,572,435,573,445,558,444,548,411,544,361,538,337,538,313,543,311,534,305,523,300,523,298,529,284,529,280,516,277,516,277,531,270,521,266,548,270,554,333,564,345,566,343,578,363,578,384,574" shape="poly">

                    <area onmouseover='game_on_move(1, "image_map_8")' onmouseout='game_on_move(1, "image_map_8")' onclick="game_on_click('image_map_8', question_attica, 1)" alt="attica" coords="256,306,260,312,268,316,273,312,273,304,277,300,288,304,297,308,300,313,296,319,296,327,298,337,300,344,300,355,293,355,287,344,280,344,277,333,269,331,262,336,258,328,245,331,239,329,240,323,245,320,244,312,251,313" shape="poly">
                    <area onmouseover='game_on_move(1, "image_map_8")' onmouseout='game_on_move(1, "image_map_8")' onclick="game_on_click('image_map_8', question_attica, 1)" alt="attica" coords="260,345,268,346,265,352,264,366,269,380,260,383,251,384,243,391,236,386,244,385,260,376,261,373,252,370,244,366,248,361,253,360,252,352" shape="poly">
                    <area onmouseover='game_on_move(1, "image_map_8")' onmouseout='game_on_move(1, "image_map_8")' onclick="game_on_click('image_map_8', question_attica, 1)" alt="attica" coords="226,458,231,464,236,467,238,475,244,489,250,497,251,504,244,499,242,489,240,482,232,477,225,479,226,469" shape="poly">

                    <area alt="aegean_south_islands" onclick="game_on_click('image_map_3', question_aegean_south_islands, 2)" onmouseover='game_on_move(2, "image_map_3")' onmouseout='game_on_move(2, "image_map_3")' coords="307,348,317,353,322,356,320,362,315,366,324,370,327,377,326,387,335,387,331,397,342,408,346,414,341,418,339,430,332,427,331,434,323,437,316,436,317,430,310,427,311,424,322,427,336,422,337,413,335,403,332,400,324,400,323,383,332,388,328,385,320,384,320,376,316,370,312,367,313,359,313,351,303,355,304,352" shape="poly">
                    <area alt="aegean_south_islands" onclick="game_on_click('image_map_3', question_aegean_south_islands, 2)" onmouseover='game_on_move(2, "image_map_3")' onmouseout='game_on_move(2, "image_map_3")' coords="351,435,350,440,356,443,373,470,392,464,413,463,414,467,418,464,450,449,457,448,457,440,450,439,442,442,433,444,439,446,441,452,432,457,424,460,414,457,404,463,392,458,396,461,387,452,380,455,382,462,384,468,377,466,370,464,362,452,359,445,366,440,372,436,376,433,382,437,387,437,385,431,378,426,372,433,367,440,358,439" shape="poly">
                    <area alt="aegean_south_islands" onclick="game_on_click('image_map_3', question_aegean_south_islands, 2)" onmouseover='game_on_move(2, "image_map_3")' onmouseout='game_on_move(2, "image_map_3")' coords="348,329,353,337,358,339,360,347,365,356,374,359,377,362,393,374,415,401,445,411,454,406,460,411,452,414,444,414,438,409,425,404,412,406,430,418,420,426,408,428,410,426,416,415,425,415,414,410,406,400,410,395,399,380,382,376,374,380,373,372,381,368,371,368,366,363,357,356,354,368,358,370,357,376,352,379,352,372,356,360,354,351,349,344,344,360,339,361,341,355,345,352,348,342,340,336,340,332" shape="poly">
                    <area alt="aegean_south_islands" onclick="game_on_click('image_map_3', question_aegean_south_islands, 2)" onmouseover='game_on_move(2, "image_map_3")' onmouseout='game_on_move(2, "image_map_3")' coords="357,413,364,406,375,397,384,401,395,393,399,401,405,401,404,405,400,405,396,411,404,420,389,424,386,421,393,414,388,415,385,408,379,405,373,411,368,410,364,417" shape="poly">
                    <area alt="aegean_south_islands" onclick="game_on_click('image_map_3', question_aegean_south_islands, 2)" onmouseover='game_on_move(2, "image_map_3")' onmouseout='game_on_move(2, "image_map_3")' coords="480,544,488,541,499,539,506,531,500,523,504,512,506,500,477,501,454,501,441,500,452,485,472,463,469,457,466,465,463,474,456,480,449,484,448,491,436,498,438,503,446,502,457,505,464,500,472,501,477,506,484,500,492,500,501,501,498,510,496,517,492,523,495,528,494,536,485,537,477,535,476,541" shape="poly">
                    <area alt="aegean_south_islands" onclick="game_on_click('image_map_3', question_aegean_south_islands, 2)" onmouseover='game_on_move(2, "image_map_3")' onmouseout='game_on_move(2, "image_map_3")' coords="659,481,659,487,654,485,569,460,566,472,560,481,563,484,561,488,554,486,548,494,540,501,536,496,538,484,535,483,534,478,538,471,534,472,528,475,520,473,529,470,539,465,534,472,538,471,529,470,541,470,550,462,560,457,568,454,569,461,616,474,639,480,648,481" shape="poly">
                    <area alt="aegean_south_islands" onclick="game_on_click('image_map_3', question_aegean_south_islands, 2)" onmouseover='game_on_move(2, "image_map_3")' onmouseout='game_on_move(2, "image_map_3")' coords="536,445,542,445,544,450,547,448,546,437,539,436,534,444,518,458,513,461,511,458,513,461,507,457,506,452,501,445,487,457,487,450,494,447,489,444,493,438,501,436,503,441,504,448,508,452,519,455,527,450" shape="poly">
                    <area alt="aegean_south_islands" onclick="game_on_click('image_map_3', question_aegean_south_islands, 2)" onmouseover='game_on_move(2, "image_map_3")' onmouseout='game_on_move(2, "image_map_3")' coords="486,368,488,371,490,373,484,374,473,377,475,380,473,383,478,386,476,387,471,387,464,382,461,387,458,388,458,382,458,377,463,380,486,368" shape="poly">
                    <area alt="aegean_south_islands" onclick="game_on_click('image_map_3', question_aegean_south_islands, 2)" onmouseover='game_on_move(2, "image_map_3")' onmouseout='game_on_move(2, "image_map_3")' coords="487,436,488,429,495,429,510,422,508,415,500,417,490,412,500,413,492,409,486,403,480,400,480,398,476,391,472,393,476,399,480,406,483,413,486,416,490,412,495,412,491,423,484,429,484,432" shape="poly">
                    <area alt="aegean_south_islands" onclick="game_on_click('image_map_3', question_aegean_south_islands, 2)" onmouseover='game_on_move(2, "image_map_3")' onmouseout='game_on_move(2, "image_map_3")' coords="493,386,494,384,497,385,495,387,495,402,500,405,503,409,500,410,500,408,493,406,495,402,495,395,500,410" shape="poly">

                    <area alt="aegean_nord_islands" onclick="game_on_click('image_map_12', question_aegean_nord_islands, 3)" onmouseover='game_on_move(3, "image_map_12")' onmouseout='game_on_move(3, "image_map_12")' coords="456,370,463,368,457,363,462,358,463,353,471,353,473,357,482,357,484,353,493,351,493,346,486,343,483,347,480,342,470,342,461,348,460,353,455,357,448,353,441,354,438,357,428,357,423,367,430,367,438,364,443,361,450,363" shape="poly">
                    <area alt="aegean_nord_islands" onclick="game_on_click('image_map_12', question_aegean_nord_islands, 3)" onmouseover='game_on_move(3, "image_map_12")' onmouseout='game_on_move(3, "image_map_12")' coords="426,314,432,310,437,299,434,289,443,287,435,281,423,279,415,281,398,277,391,283,399,285,404,278,411,281,416,290,422,292,424,300,416,307,419,312" shape="poly">
                    <area alt="aegean_nord_islands" onclick="game_on_click('image_map_12', question_aegean_nord_islands, 3)" onmouseover='game_on_move(3, "image_map_12")' onmouseout='game_on_move(3, "image_map_12")' coords="450,252,464,244,460,232,450,222,452,218,448,214,440,214,433,218,424,222,419,221,416,222,415,230,420,235,428,239,433,244,444,246" shape="poly">
                    <area alt="aegean_nord_islands" onclick="game_on_click('image_map_12', question_aegean_nord_islands, 3)" onmouseover='game_on_move(3, "image_map_12")' onmouseout='game_on_move(3, "image_map_12")' coords="384,180,386,167,388,162,383,163,378,167,372,163,364,165,362,175,369,180,359,201,358,208,364,203,362,195,365,187,369,182,376,180" shape="poly">

                    <area alt="ams_of_the_holy_mountain" onclick="game_on_click('image_map_14', question_ams_of_the_holy_mountain, 4)" onmouseover='game_on_move(4, "image_map_14")' onmouseout='game_on_move(4, "image_map_14")' coords="296,125,300,133,308,134,312,137,316,142,320,146,322,152,316,154,310,148,304,141,296,139,296,134" shape="poly">

                    <area alt="epirus" onclick="game_on_click('image_map_10', question_epirus, 5)" onmouseover='game_on_move(5, "image_map_10")' onmouseout='game_on_move(5, "image_map_10")' coords="91,135,98,139,104,149,104,153,102,157,105,160,108,160,110,164,107,167,110,172,113,177,118,174,124,176,120,182,120,189,112,191,116,196,117,204,122,213,122,217,128,217,131,223,128,228,127,232,120,236,112,236,111,242,106,246,98,245,92,241,92,247,86,251,85,243,78,236,69,228,68,224,60,223,58,216,53,212,53,205,47,204,50,195,40,191,43,188,54,189,56,185,56,181,63,181,64,174,58,167,65,162,69,157,75,159,82,154,85,140" shape="poly">

                    <area alt="west_macedonia" onclick="game_on_click('image_map_11', question_west_macedonia, 6)" onmouseover='game_on_move(6, "image_map_11")' onmouseout='game_on_move(6, "image_map_11")' coords="104,93,115,94,118,91,125,92,131,89,138,90,140,92,149,87,155,87,157,92,150,95,151,101,155,107,161,109,160,116,164,125,171,130,176,131,178,136,180,142,176,149,174,155,164,166,160,169,164,171,163,177,155,177,140,174,133,173,131,177,126,177,119,173,113,175,106,165,109,159,103,160,101,154,104,152,96,135,91,136,90,130,95,125,100,124,106,113,103,101" shape="poly">
                    <area alt="central_macedonia" onclick="game_on_click('image_map_5', question_central_macedonia, 7)" onmouseover='game_on_move(7, "image_map_5")' onmouseout='game_on_move(7, "image_map_5")' coords="252,48,256,52,258,50,266,48,274,50,274,55,278,56,278,60,279,65,288,70,294,75,296,73,305,81,303,87,296,91,288,97,279,103,279,108,285,116,291,120,286,121,288,129,297,131,297,138,290,138,287,133,283,137,280,135,278,141,286,149,296,153,299,161,296,168,291,168,285,162,281,153,274,145,268,144,260,141,254,146,260,152,263,158,274,165,280,171,272,171,264,168,256,167,257,163,252,156,253,147,246,144,236,138,230,133,225,133,223,126,221,124,231,119,229,118,228,111,223,115,216,121,211,124,207,128,211,135,205,149,205,159,212,167,202,167,198,161,191,159,188,151,183,156,181,151,175,151,180,141,174,136,174,132,165,126,159,118,161,111,156,107,156,103,152,103,151,95,157,91,154,86,161,78,161,74,173,70,184,67,201,71,211,67,213,68,219,65,217,56,225,53,236,55,246,54,246,49" shape="poly">
                    <area alt="east_macedonia_and_thrace" onclick="game_on_click('image_map_9', question_east_macedonia_and_thrace, 8)" onmouseover='game_on_move(8, "image_map_9")' onmouseout='game_on_move(8, "image_map_9")' coords="428,23,439,21,453,26,462,33,465,48,465,55,458,54,452,61,446,62,448,81,449,87,438,97,433,104,427,105,424,98,417,95,406,95,398,95,396,121,405,125,406,131,398,132,389,124,394,121,397,101,392,93,383,88,370,86,371,83,365,83,360,87,353,90,349,95,342,96,347,103,347,109,347,115,339,118,332,114,330,107,333,101,339,100,339,95,333,88,321,90,317,97,303,105,288,100,297,94,303,87,306,83,300,80,298,74,293,76,290,72,280,66,277,62,281,60,280,57,275,57,274,50,284,47,292,43,301,45,299,39,314,35,318,40,331,36,338,49,344,47,350,50,356,48,365,52,374,57,382,62,389,59,398,55,406,56,414,52,421,56,427,52,436,48,436,41,433,35,429,29" shape="poly">

                    <area onclick="game_on_click('image_map_7', question_ionian_islands, 9)" onmouseover='game_on_move(9, "image_map_7")' onmouseout='game_on_move(9, "image_map_7")' alt="ionian_islands" coords="104,384,102,389,108,391,106,385,95,356,87,351,80,345,80,336,86,333,89,322,82,321,74,319,67,315,61,312,65,296,71,301,75,289,81,286,80,279,74,280,77,266,84,258,86,268,91,271,101,275,97,283,98,283,88,282,93,285,94,291,90,292,88,288,87,293,89,302,83,303,87,309,92,315,91,321,86,330,89,337,98,344,104,348,104,352,98,350,97,355,98,362" shape="poly">
                    <area onclick="game_on_click('image_map_7', question_ionian_islands, 9)" onmouseover='game_on_move(9, "image_map_7")' onmouseout='game_on_move(9, "image_map_7")' alt="ionian_islands" coords="48,224,45,228,55,235,58,233,49,224,47,216,32,210,26,198,20,191,17,184,10,185,6,182,0,179,3,172,8,174,11,171,15,171,14,175,11,177,14,181,23,179,30,177,38,181,34,185,31,191,35,195,35,205,44,208" shape="poly">

                    <area onclick="game_on_click('image_map_4', question_west_greece, 11)" onmouseover='game_on_move(11, "image_map_4")' onmouseout='game_on_move(11, "image_map_4")' alt="west_greece" coords="88,250,95,250,105,251,107,255,109,252,112,249,111,238,113,234,123,236,127,231,130,232,133,236,133,240,130,244,136,248,137,253,144,255,145,258,140,262,144,268,153,269,155,271,157,268,164,266,166,265,169,265,169,270,168,277,169,286,161,290,158,296,153,300,144,299,145,314,149,309,154,302,164,300,174,305,182,312,190,313,192,318,191,327,187,333,183,334,184,344,178,347,176,345,173,349,166,348,164,345,157,354,159,359,157,367,161,365,165,371,170,373,163,379,162,383,150,387,137,368,126,359,125,362,124,360,124,352,115,343,111,341,111,335,116,332,125,321,127,311,131,311,138,314,141,315,147,307,141,301,134,302,128,295,125,303,119,301,110,305,111,297,108,287,101,273,97,272,94,264,90,265,86,259" shape="poly">

                    <area onclick="game_on_click('image_map_6', question_peloponnese, 10)" onmouseover='game_on_move(10, "image_map_6")' onmouseout='game_on_move(10, "image_map_6")' alt="peloponnese" coords="193,315,200,316,209,321,216,326,221,332,230,328,223,324,229,321,240,322,238,326,244,330,241,334,233,334,235,340,239,339,243,343,244,350,240,347,244,350,244,358,246,362,249,368,254,370,261,371,260,374,252,376,248,381,244,385,240,384,235,379,238,373,236,372,232,376,229,375,232,372,229,368,228,368,225,371,218,362,216,367,220,381,226,393,226,400,230,400,233,408,236,421,239,428,236,434,235,441,242,446,242,451,246,455,238,456,233,448,231,453,225,452,227,445,223,441,219,436,218,427,205,427,204,432,204,437,198,443,200,450,199,459,196,455,191,452,190,449,191,437,182,420,177,420,179,411,171,411,165,414,164,425,166,429,161,435,156,430,154,438,150,435,148,429,145,418,140,414,142,404,147,397,151,393,149,386,157,384,163,382,162,380,169,374,165,370,162,366,157,367,158,358,156,351,162,345,166,347,173,349,176,346,182,344,181,341,184,333,189,329,192,321" shape="poly">

                    <area onclick="game_on_click('image_map_2', question_thessaly, 12)" onmouseover='game_on_move(12, "image_map_2")' onmouseout='game_on_move(12, "image_map_2")' alt="thessaly" coords="182,150,184,156,186,151,190,149,192,153,191,160,197,162,199,163,200,167,206,167,210,166,213,167,214,174,223,181,227,197,238,204,250,217,254,229,258,233,262,229,266,232,271,232,273,226,279,233,285,234,288,229,292,222,296,225,298,221,300,217,302,218,305,216,306,213,305,202,308,201,310,208,319,213,318,219,315,214,308,218,303,223,299,229,298,233,304,236,306,241,301,245,298,243,301,239,291,237,284,239,278,241,273,236,264,236,256,234,246,238,236,238,235,232,239,235,243,232,243,228,238,220,231,218,227,222,221,223,224,231,229,235,231,237,232,241,237,243,236,246,231,249,225,247,217,246,211,243,200,242,197,235,193,229,188,227,186,225,181,230,178,235,172,238,169,241,164,243,164,238,159,233,155,235,151,230,149,226,141,229,137,227,131,232,127,229,130,224,129,217,123,215,119,209,117,203,117,197,115,197,113,191,117,189,121,188,119,186,119,180,122,177,128,178,131,179,132,174,141,174,149,175,156,177,163,176,161,169,166,163,172,156,176,151" shape="poly">

                    <area onclick="game_on_click('image_map', question_central_greece, 13)" onmouseover='game_on_move(13, "image_map")' onmouseout='game_on_move(13, "image_map")' alt="central_greece" coords="150,226,153,229,156,236,160,234,165,236,166,237,166,242,171,240,174,237,177,233,186,225,188,227,195,227,197,231,201,235,201,242,209,241,217,244,225,246,226,248,232,248,227,250,222,255,214,254,207,254,206,259,214,259,222,264,227,264,235,266,239,272,240,276,244,273,250,275,253,276,255,278,256,283,262,287,267,287,272,288,270,281,266,281,263,274,255,269,249,264,242,257,238,259,222,258,234,252,239,248,244,244,254,241,257,246,261,250,265,260,273,265,278,266,289,272,295,271,306,273,319,259,319,257,327,254,325,251,325,243,328,244,329,249,335,251,336,256,342,263,337,265,332,263,330,259,324,261,314,264,310,269,306,277,312,283,309,289,311,296,314,304,317,311,323,313,335,315,336,324,331,330,327,329,325,326,322,329,318,327,315,330,311,331,314,322,307,322,307,317,303,310,302,303,295,301,296,296,283,295,275,295,276,299,273,304,274,311,268,315,262,313,262,309,258,311,256,307,252,310,244,313,236,312,226,311,219,309,213,302,208,299,205,305,195,292,193,301,184,299,178,301,165,295,158,297,161,290,167,287,169,279,165,278,169,268,166,264,152,274,153,270,144,269,141,260,146,257,136,254,137,248,129,244,132,239,131,233,139,226,145,226" shape="poly">
                    <area onclick="game_on_click('image_map', question_central_greece, 13)" onmouseover='game_on_move(13, "image_map")' onmouseout='game_on_move(13, "image_map")' alt="thessaly" coords="325,243,331,249,334,252,338,258,341,263,336,267,331,264,327,261,322,261,317,259,316,257,324,256,324,251" shape="poly">
                </map>
            <?php } ?>

            <?php if( is_single( 525 )) { ?>
                <div class="map_card">
                    <div class="container_maps">
                        <img class="image_map" id="image" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/game_map_cities.png" usemap="#map_greece" alt="Карта_городов_Греции">
                        <!--Восточная Македония и Фракия-->
                        <img class="image_map vis_0" id="image_map_1" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_alexandroupolis.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map vis_0" id="image_map_2" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_xanthi.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map vis_0" id="image_map_3" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_kavala.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map vis_0" id="image_map_4" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_orestiada.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map vis_0" id="image_map_5" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_komotini.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map vis_0" id="image_map_6" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_drama.png" usemap="#map_greece" alt="map_city">
                        <!--Центральная Македония-->
                        <img class="image_map vis_0" id="image_map_7" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_thessaloniki.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map vis_0" id="image_map_8" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_litohoro.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map vis_0" id="image_map_9" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_sere.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map vis_0" id="image_map_10" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_karie.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map vis_0" id="image_map_11" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_katerini.png" usemap="#map_greece" alt="map_city">
                        <!--Западная Македония-->
                        <img class="image_map vis_0" id="image_map_12" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_nympheon.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map vis_0" id="image_map_13" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_castoria.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map vis_0" id="image_map_14" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_kozani.png" usemap="#map_greece" alt="map_city">
                        <!--Эпир-->
                        <img class="image_map vis_0" id="image_map_15" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_metsovo.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map vis_0" id="image_map_16" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_janina.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map vis_0" id="image_map_17" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_parga.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map vis_0" id="image_map_18" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_preveza.png" usemap="#map_greece" alt="map_city">
                        <!--Фессалия-->
                        <img class="image_map vis_0" id="image_map_19" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_kalambaka.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map vis_0" id="image_map_20" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_larisa.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map vis_0" id="image_map_21" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_volos.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map vis_0" id="image_map_22" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_tricala.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map vis_0" id="image_map_23" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_karditsa.png" usemap="#map_greece" alt="map_city">
                        <!--Центральная Греция-->
                        <img class="image_map vis_0" id="image_map_24" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_karystos.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map vis_0" id="image_map_25" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_halkida.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map vis_0" id="image_map_26" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_delphi.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map vis_0" id="image_map_27" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_galaxidi.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map vis_0" id="image_map_28" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_lamia.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map vis_0" id="image_map_29" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_fivi.png" usemap="#map_greece" alt="map_city">
                        <!--Западная Греция-->
                        <img class="image_map vis_0" id="image_map_30" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_olympia.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map vis_0" id="image_map_31" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_agrinion.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map vis_0" id="image_map_32" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_patri.png" usemap="#map_greece" alt="map_city">
                        <!--Аттика-->
                        <img class="image_map vis_0" id="image_map_33" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_athens.png" usemap="#map_greece" alt="map_cities">
                        <img class="image_map vis_0" id="image_map_34" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_pireas.png" usemap="#map_greece" alt="map_city">
                        <!--Пелопонесс-->
                        <img class="image_map vis_0" id="image_map_35" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_dimitsana.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map vis_0" id="image_map_36" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_sparta.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map vis_0" id="image_map_37" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_monemvasia.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map vis_0" id="image_map_38" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_epidaurus.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map vis_0" id="image_map_39" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_korinf.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map vis_0" id="image_map_40" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_nafplion.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map vis_0" id="image_map_41" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_kalamata.png" usemap="#map_greece" alt="map_city">
                        <!--Адриатические Острова-->
                        <img class="image_map vis_0" id="image_map_42" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_kerkira.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map vis_0" id="image_map_43" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_argostoli.png" usemap="#map_greece" alt="map_city">
                        <!--Северные Эгейские Острова-->
                        <img class="image_map vis_0" id="image_map_44" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_mirina.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map vis_0" id="image_map_45" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_mitilini.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map vis_0" id="image_map_46" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_skiros.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map vis_0" id="image_map_47" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_hios.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map vis_0" id="image_map_48" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_ajos_kiritos.png" usemap="#map_greece" alt="map_city">
                        <!--Южные Эгейские Острова-->
                        <img class="image_map vis_0" id="image_map_49" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_mikonos.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map vis_0" id="image_map_50" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_ia.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map vis_0" id="image_map_51" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_kos.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map vis_0" id="image_map_52" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_rodos.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map vis_0" id="image_map_53" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_lindos.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map vis_0" id="image_map_54" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_karpatos.png" usemap="#map_greece" alt="map_city">
                        <!--Крит-->
                        <img class="image_map vis_0" id="image_map_55" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_hania.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map vis_0" id="image_map_56" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_rethymno.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map vis_0" id="image_map_57" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_heraklion.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map vis_0" id="image_map_58" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_agios_nikolaos.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map vis_0" id="image_map_59" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_hora_sfakion.png" usemap="#map_greece" alt="map_city">
                    </div>
                </div>
                <map name="map_greece" id="map_greece">
                    <!--Восточная Македония и Фракия-->
                    <area onclick="game_on_click('image_map_1', question_alexandroupolis, 0)" onmouseover='game_on_move(0, "image_map_1")' onmouseout='game_on_move(0, "image_map_1")' alt="alexandroupolis" coords="415,89,7" shape="circle">
                    <area onclick="game_on_click('image_map_2', question_xanthi, 1)" onmouseover='game_on_move(1, "image_map_2")' onmouseout='game_on_move(1, "image_map_2")' alt="xanthi" coords="354,71,7" shape="circle">
                    <area onclick="game_on_click('image_map_3', question_kavala, 2)" onmouseover='game_on_move(2, "image_map_3")' onmouseout='game_on_move(2, "image_map_3")' alt="kavala" coords="323,84,7" shape="circle">

                    <area onclick="game_on_click('image_map_4', question_orestiada, 3)" alt="orestiada" onmouseover='game_on_move(3, "image_map_4")' onmouseout='game_on_move(3, "image_map_4")' coords="458,43,7" shape="circle">
                    <area onclick="game_on_click('image_map_5', question_komotini, 4)" alt="komotini" onmouseover='game_on_move(4, "image_map_5")' onmouseout='game_on_move(4, "image_map_5")' coords="385,70,7" shape="circle">
                    <area onclick="game_on_click('image_map_6', question_drama, 5)" alt="drama" onmouseover='game_on_move(5, "image_map_6")' onmouseout='game_on_move(5, "image_map_6")' coords="306,68,7" shape="circle">
                    <!--Центральная Македония-->
                    <area onclick="game_on_click('image_map_7', question_thessaloniki, 6)" alt="thessaloniki" onmouseover='game_on_move(6, "image_map_7")' onmouseout='game_on_move(6, "image_map_7")' coords="231,113,7" shape="circle">
                    <area onclick="game_on_click('image_map_8', question_litohoro, 7)" alt="litohoro" onmouseover='game_on_move(7, "image_map_8")' onmouseout='game_on_move(7, "image_map_8")' coords="203,160,7" shape="circle">

                    <area onclick="game_on_click('image_map_9', question_sere, 8)" alt="sere" onmouseover='game_on_move(8, "image_map_9")' onmouseout='game_on_move(8, "image_map_9")' coords="264,75,7" shape="circle">
                    <area onclick="game_on_click('image_map_10', question_karie, 9)" alt="karie" onmouseover='game_on_move(9, "image_map_10")' onmouseout='game_on_move(9, "image_map_10")' coords="312,142,7" shape="circle">
                    <area onclick="game_on_click('image_map_11', question_katerini, 10)" alt="katerini" onmouseover='game_on_move(10, "image_map_11")' onmouseout='game_on_move(10, "image_map_11")' coords="202,139,7" shape="circle">
                    <!--Западная Македония-->
                    <area onclick="game_on_click('image_map_12', question_nympheon, 11)" onmouseover='game_on_move(11, "image_map_12")' onmouseout='game_on_move(11, "image_map_12")' alt="nympheon" coords="135,104,7" shape="circle">
                    <area onclick="game_on_click('image_map_13', question_castoria, 12)" onmouseover='game_on_move(12, "image_map_13")' onmouseout='game_on_move(12, "image_map_13")' alt="castoria" coords="131,124,7" shape="circle">

                    <area onclick="game_on_click('image_map_14', question_kozani, 13)" alt="kozani" onmouseover='game_on_move(13, "image_map_14")' onmouseout='game_on_move(13, "image_map_14")' coords="158,139,7" shape="circle">
                    <!--Эпир-->
                    <area onclick="game_on_click('image_map_15', question_metsovo, 14)" onmouseover='game_on_move(14, "image_map_15")' onmouseout='game_on_move(14, "image_map_15")' alt="metsovo" coords="113,182,7" shape="circle">
                    <area onclick="game_on_click('image_map_16', question_janina, 15)" onmouseover='game_on_move(15, "image_map_16")' onmouseout='game_on_move(15, "image_map_16")' alt="janina" coords="84,193,7" shape="circle">
                    <area onclick="game_on_click('image_map_17', question_parga, 16)" onmouseover='game_on_move(16, "image_map_17")' onmouseout='game_on_move(16, "image_map_17")' alt="parga" coords="65,217,7" shape="circle">
                    <area onclick="game_on_click('image_map_18', question_preveza, 17)" onmouseover='game_on_move(17, "image_map_18")' onmouseout='game_on_move(17, "image_map_18")' alt="preveza" coords="87,246,7" shape="circle">
                    <!--Фессалия-->
                    <area onclick="game_on_click('image_map_19', question_kalambaka, 18)" onmouseover='game_on_move(18, "image_map_19")' onmouseout='game_on_move(18, "image_map_19")' alt="kalambaka" coords="146,186,7" shape="circle">
                    <area onclick="game_on_click('image_map_20', question_larisa, 19)" onmouseover='game_on_move(19, "image_map_20")' onmouseout='game_on_move(19, "image_map_20")' alt="larisa" coords="203,194,7" shape="circle">
                    <area onclick="game_on_click('image_map_21', question_volos, 20)" onmouseover='game_on_move(20, "image_map_21")' onmouseout='game_on_move(20, "image_map_21")' alt="volos" coords="231,217,7" shape="circle">

                    <area onclick="game_on_click('image_map_22', question_tricala, 21)" onmouseover='game_on_move(21, "image_map_22")' onmouseout='game_on_move(21, "image_map_22")' alt="tricala" coords="157,202,7" shape="circle">
                    <area onclick="game_on_click('image_map_23', question_karditsa, 22)" onmouseover='game_on_move(22, "image_map_23")' onmouseout='game_on_move(22, "image_map_23")' alt="karditsa" coords="170,218,7" shape="circle">
                    <!--Центральная Греция-->
                    <area onclick="game_on_click('image_map_24', question_karystos, 23)" onmouseover='game_on_move(23, "image_map_24")' onmouseout='game_on_move(23, "image_map_24")' alt="karystos" coords="324,326,7" shape="circle">
                    <area onclick="game_on_click('image_map_25', question_halkida, 24)" onmouseover='game_on_move(24, "image_map_25")' onmouseout='game_on_move(24, "image_map_25")' alt="halkida" coords="269,290,7" shape="circle">
                    <area onclick="game_on_click('image_map_26', question_delphi, 25)" onmouseover='game_on_move(25, "image_map_26")' onmouseout='game_on_move(25, "image_map_26")' alt="delphi" coords="198,283,7" shape="circle">
                    <area onclick="game_on_click('image_map_27', question_galaxidi, 26)" onmouseover='game_on_move(26, "image_map_27")' onmouseout='game_on_move(26, "image_map_27")' alt="galaxidi" coords="190,298,7" shape="circle">

                    <area onclick="game_on_click('image_map_28', question_lamia, 27)" alt="lamia" onmouseover='game_on_move(27, "image_map_28")' onmouseout='game_on_move(27, "image_map_28")' coords="197,254,7" shape="circle">
                    <area onclick="game_on_click('image_map_29', question_fivi, 28)" alt="fivi" onmouseover='game_on_move(28, "image_map_29")' onmouseout='game_on_move(28, "image_map_29")' coords="250,299,7" shape="circle">
                    <!--Западная Греция-->
                    <area onclick="game_on_click('image_map_30', question_olympia, 29)" onmouseover='game_on_move(29, "image_map_30")' onmouseout='game_on_move(29, "image_map_30")' alt="olympia" coords="145,358,7" shape="circle">

                    <area onclick="game_on_click('image_map_31', question_agrinion, 30)" alt="agrinion" onmouseover='game_on_move(30, "image_map_31")' onmouseout='game_on_move(30, "image_map_31")' coords="132,276,7" shape="circle">
                    <area onclick="game_on_click('image_map_32', question_patri, 31)" alt="patri" onmouseover='game_on_move(31, "image_map_32")' onmouseout='game_on_move(31, "image_map_32")' coords="151,308,7" shape="circle">
                    <!--Аттика-->
                    <area onclick="game_on_click('image_map_33', question_athens, 32)" onmouseover='game_on_move(32, "image_map_33")' onmouseout='game_on_move(32, "image_map_33")' alt="athens" coords="279,326,7" shape="circle">
                    <area onclick="game_on_click('image_map_34', question_pireas, 33)" onmouseover='game_on_move(33, "image_map_34")' onmouseout='game_on_move(33, "image_map_34")' alt="pireas" coords="265,331,7" shape="circle">
                    <!--Пелопонесс-->
                    <area onclick="game_on_click('image_map_35', question_dimitsana, 34)" onmouseover='game_on_move(34, "image_map_35")' onmouseout='game_on_move(34, "image_map_35")' alt="dimitsana" coords="175,359,7" shape="circle">
                    <area onclick="game_on_click('image_map_36', question_sparta, 35)" onmouseover='game_on_move(35, "image_map_36")' onmouseout='game_on_move(35, "image_map_36")' alt="sparta" coords="199,404,7" shape="circle">
                    <area onclick="game_on_click('image_map_37', question_monemvasia, 36)" onmouseover='game_on_move(36, "image_map_37")' onmouseout='game_on_move(36, "image_map_37")' alt="monemvasia" coords="234,434,7" shape="circle">
                    <area onclick="game_on_click('image_map_38', question_epidaurus, 37)" onmouseover='game_on_move(37, "image_map_38")' onmouseout='game_on_move(37, "image_map_38")' alt="epidaurus" coords="245,358,7" shape="circle">

                    <area onclick="game_on_click('image_map_39', question_korinf, 38)" alt="korinf" onmouseover='game_on_move(38, "image_map_39")' onmouseout='game_on_move(38, "image_map_39")' coords="226,333,7" shape="circle">
                    <area onclick="game_on_click('image_map_40', question_nafplion, 39)" alt="nafplion" onmouseover='game_on_move(39, "image_map_40")' onmouseout='game_on_move(39, "image_map_40")' coords="221,363,7" shape="circle">
                    <area onclick="game_on_click('image_map_41', question_kalamata, 40)" alt="kalamata" onmouseover='game_on_move(40, "image_map_41")' onmouseout='game_on_move(40, "image_map_41")' coords="174,408,7" shape="circle">
                    <!--Адриатические Острова-->
                    <area onclick="game_on_click('image_map_42', question_kerkira, 41)" alt="kerkira" onmouseover='game_on_move(41, "image_map_42")' onmouseout='game_on_move(41, "image_map_42")' coords="33,198,7" shape="circle">
                    <area onclick="game_on_click('image_map_43', question_argostoli, 42)" alt="argostoli" onmouseover='game_on_move(42, "image_map_43")' onmouseout='game_on_move(42, "image_map_43")' coords="72,312,7" shape="circle">
                    <!--Северные Эгейские Острова-->
                    <area onclick="game_on_click('image_map_44', question_mirina, 43)" alt="mirina" onmouseover='game_on_move(43, "image_map_44")' onmouseout='game_on_move(43, "image_map_44")' coords="364,174,7" shape="circle">
                    <area onclick="game_on_click('image_map_45', question_mitilini, 44)" alt="mitilini" onmouseover='game_on_move(44, "image_map_45")' onmouseout='game_on_move(44, "image_map_45")' coords="461,237,7" shape="circle">
                    <area onclick="game_on_click('image_map_46', question_skiros, 45)" alt="skiros" onmouseover='game_on_move(45, "image_map_46")' onmouseout='game_on_move(45, "image_map_46")' coords="333,252,7" shape="circle">
                    <area onclick="game_on_click('image_map_47', question_hios, 46)" alt="hios" onmouseover='game_on_move(46, "image_map_47")' onmouseout='game_on_move(46, "image_map_47")' coords="434,297,7" shape="circle">
                    <area onclick="game_on_click('image_map_48', question_ajos_kiritos, 47)" alt="ajos_kiritos" onmouseover='game_on_move(47, "image_map_48")' onmouseout='game_on_move(47, "image_map_48")' coords="444,358,7" shape="circle">
                    <!--Южные Эгейские Острова-->
                    <area onclick="game_on_click('image_map_49', question_mikonos, 48)" alt="mikonos" onmouseover='game_on_move(48, "image_map_49")' onmouseout='game_on_move(48, "image_map_49")' coords="382,374,7" shape="circle">
                    <area onclick="game_on_click('image_map_50', question_ia, 49)" alt="ia" onmouseover='game_on_move(49, "image_map_50")' onmouseout='game_on_move(49, "image_map_50")' coords="386,454,7" shape="circle">
                    <area onclick="game_on_click('image_map_51', question_kos, 50)" alt="kos" onmouseover='game_on_move(50, "image_map_51")' onmouseout='game_on_move(50, "image_map_51")' coords="505,417,7" shape="circle">
                    <area onclick="game_on_click('image_map_52', question_rodos, 51)" alt="rodos" onmouseover='game_on_move(51, "image_map_52")' onmouseout='game_on_move(51, "image_map_52")' coords="567,458,7" shape="circle">
                    <area onclick="game_on_click('image_map_53', question_lindos, 52)" alt="lindos" onmouseover='game_on_move(52, "image_map_53")' onmouseout='game_on_move(52, "image_map_53")' coords="555,484,7" shape="circle">
                    <area onclick="game_on_click('image_map_54', question_karpatos, 53)" alt="karpatos" onmouseover='game_on_move(53, "image_map_54")' onmouseout='game_on_move(53, "image_map_54")' coords="503,532,7" shape="circle">
                    <!--Крит-->
                    <area onclick="game_on_click('image_map_55', question_hania, 54)" onmouseover='game_on_move(54, "image_map_55")' onmouseout='game_on_move(54, "image_map_55")' alt="hania" coords="298,531,7" shape="circle">
                    <area onclick="game_on_click('image_map_56', question_rethymno, 55)" onmouseover='game_on_move(55, "image_map_56")' onmouseout='game_on_move(55, "image_map_56")' alt="rethymno" coords="328,543,7" shape="circle">
                    <area onclick="game_on_click('image_map_57', question_heraklion, 56)" onmouseover='game_on_move(56, "image_map_57")' onmouseout='game_on_move(56, "image_map_57")' alt="heraklion" coords="369,545,7" shape="circle">
                    <area onclick="game_on_click('image_map_58', question_agios_nikolaos, 57)" onmouseover='game_on_move(57, "image_map_58")' onmouseout='game_on_move(57, "image_map_58")' alt="agios_nikolaos" coords="407,557,7" shape="circle">

                    <area onclick="game_on_click('image_map_59', question_hora_sfakion, 58)" alt="hora_sfakion" onmouseover='game_on_move(58, "image_map_59")' onmouseout='game_on_move(58, "image_map_59")' coords="306,557,7" shape="circle">
                </map>
            <?php } ?>
        
            <hr class="hr-text mt-0">
            <div class="bottons-book-text">
                <button id="reload_game" onclick='reload_game()' class="my_btn button_game" type="button" name="read">Заново!</button>
                <button id="hint_botton" onclick='game_hint()' title="-50 очков!" class="my_btn button_game" type="button" name="read">Подсказка</button>
            </div>
            <hr class="hr-text mb-0 mb_4minus">
            <div class="container_hint">
                <h4 class="text-center hint_vis_0" id="hint_text"></h4>
            </div>
        </div>
        <div class="recor_field">
            <h2 class="text-center rec">Рекорды (Топ-30)</h2>
            <br>
            <div class="score_flex">
                <div class="score_flex_num"><strong>№</strong></div>
                <div><strong>Имя</strong></div>
                <div><strong>Счёт</strong></div>
                <div><strong>Время</strong></div>
                <div><strong>Дата</strong></div>
            </div>
            <hr class="hr-text">
            <?php 
                global $wpdb;
                $numb = 0;
                if( is_single( 524 )) {
                    $object_row = $wpdb->get_results( "SELECT * FROM `wp_score_game_regions` ORDER BY `wp_score_game_regions`.`score` DESC, `wp_score_game_regions`.`time_score` ASC LIMIT 30" );
                } else {
                    $object_row = $wpdb->get_results( "SELECT * FROM `wp_score_game_cities` ORDER BY `wp_score_game_cities`.`score` DESC, `wp_score_game_cities`.`time_score` ASC LIMIT 30" );
                }
                foreach ($object_row as $key => $value): ?>
                <div class="score_flex">
                    <div class="score_flex_num"><?php echo $numb += 1; ?></div>
                    <div><?php echo $value->name; ?></div>
                    <div><?php echo $value->score; ?></div>
                    <div><?php echo $value->time_score; ?></div>
                    <div><?php echo $value->data_score; ?></div>
                </div>
                <hr class="hr-text hr-text-last">
            <?php endforeach; ?>
        </div>
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