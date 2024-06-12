<?php 
/*
Template Name: Шаблон для географии
Template Post Type: post, geography
*/
?>

<?php get_header(); ?>

	<main id="main">
        <div id="twin_main">
            <hr class="hr_title_page" size="3">
            <h1 class="title_page"><?php the_title(); ?></h1>
            <hr class="hr_title_page" size="3">

            <?php if( in_category( 30 )) { ?>
                <div class="map_card">
                    <div class="container_maps">
                        <img class="image_map" id="image" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/map-greece.png" usemap="#map_greece" alt="Карта_Греции">
                        <img class="image_map <?php the_field('egejskie_ostrova_vis'); ?>" id="image_map" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/cut_aegean_islands.png" usemap="#map_greece" alt="Эгейские_острова">
                        <img class="image_map <?php the_field('amg_svyatoj_gory_vis'); ?>" id="image_map_2" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/cut_ams_of_the_holy_mountain.png" usemap="#map_greece" alt="АМГ_святой_горы">
                        <img class="image_map <?php the_field('attika_vis'); ?>" id="image_map_3" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/cut_attica.png" usemap="#map_greece" alt="Аттика">
                        <img class="image_map <?php the_field('krit_vis'); ?>" id="image_map_4" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/cut_crete.png" usemap="#map_greece" alt="Крит">
                        <img class="image_map <?php the_field('epir_vis'); ?>" id="image_map_5" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/cut_epirus_and_wm.png" usemap="#map_greece" alt="Эпир">
                        <img class="image_map <?php the_field('makedoniya_i_frakiya_vis'); ?>" id="image_map_6" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/cut_macedonia_and_thrace.png" usemap="#map_greece" alt="Македония_Фракия">
                        <img class="image_map <?php the_field('peloponnes_vis'); ?>" id="image_map_7" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/cut_peloponnese_wg_ii.png" usemap="#map_greece" alt="Пелопоннес">
                        <img class="image_map <?php the_field('fessaliya_vis'); ?>" id="image_map_8" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/cut_thessaly_and_cg.png" usemap="#map_greece" alt="Фессалия">
                    </div>
                    <map name="map_greece" id="map_greece">
                        <area alt="area" title="Крит" onmouseover="heraklion()" onmouseout="heraklion()" href="<?php echo get_permalink(431); ?>" coords="267,544,270,531,270,516,275,531,281,517,283,531,297,531,303,525,308,526,312,534,314,544,326,543,337,538,359,538,364,544,388,548,406,544,406,558,417,555,427,551,438,554,445,544,443,566,433,572,422,570,392,573,347,578,345,563,333,562,321,558,297,556,271,552,268,549,268,549,268,549" shape="poly">

                        <area alt="area" onmouseover="hania()" onmouseout="hania()" title="Автономное монашеское государство Святой Горы" href="<?php echo get_permalink(432); ?>" coords="296,125,300,133,308,134,312,137,316,142,320,146,322,152,316,154,310,148,304,141,296,139,296,134" shape="poly">

                        <area alt="area" onmouseover="rethymno()" onmouseout="rethymno()" title="Аттика" href="<?php echo get_permalink(412); ?>" coords="256,306,260,312,268,316,273,312,273,304,277,300,288,304,297,308,300,313,296,319,296,327,298,337,300,344,300,355,293,355,287,344,280,344,277,333,269,331,262,336,258,328,245,331,239,329,240,323,245,320,244,312,251,313" shape="poly">
                        <area alt="area" onmouseover="rethymno()" onmouseout="rethymno()" title="Аттика" href="<?php echo get_permalink(412); ?>" coords="260,345,268,346,265,352,264,366,269,380,260,383,251,384,243,391,236,386,244,385,260,376,261,373,252,370,244,366,248,361,253,360,252,352" shape="poly">
                        <area alt="area" onmouseover="rethymno()" onmouseout="rethymno()" title="Аттика" href="<?php echo get_permalink(412); ?>" coords="226,458,231,464,236,467,238,475,244,489,250,497,251,504,244,499,242,489,240,482,232,477,225,479,226,469" shape="poly">

                        <area alt="area" onmouseover="olympia()" onmouseout="olympia()" title="Македония и Фракия" href="<?php echo get_permalink(413); ?>" coords="436,20,450,25,457,31,462,32,465,48,462,55,458,54,449,59,445,60,445,69,444,77,447,79,447,86,438,91,437,95,431,99,427,104,425,99,414,93,420,93,404,94,396,93,387,90,381,87,373,88,367,86,367,81,361,84,353,90,345,93,345,104,345,111,390,124,398,121,403,124,406,129,395,130,387,124,375,119,349,112,338,116,330,113,327,111,332,101,339,99,337,94,330,88,320,89,316,97,304,103,287,100,276,106,282,114,288,116,290,120,285,127,295,127,296,137,289,138,281,135,279,143,295,153,297,160,295,169,284,162,276,149,268,145,258,141,255,150,261,157,272,166,280,169,276,173,266,169,254,168,254,160,252,151,249,145,237,138,225,132,220,123,230,118,227,112,221,118,216,122,208,125,209,134,206,143,202,151,207,163,214,167,203,168,192,161,188,151,181,156,182,151,174,150,179,143,174,134,170,129,164,126,160,119,160,110,154,108,153,102,150,94,156,92,154,85,161,77,159,74,170,69,175,71,187,68,193,72,208,68,212,68,216,62,215,55,233,54,245,55,244,49,252,48,251,50,263,47,270,49,281,46,289,42,295,44,299,36,307,38,310,35,315,39,326,35,333,44,340,47,347,52,351,48,360,52,368,52,375,58,379,63,398,54,404,57,413,52,418,56,425,54,436,52,436,37,434,31,430,25" shape="poly">

                        <area alt="area" onmouseover="athens()" onmouseout="athens()" title="Эгейские острова" href="<?php echo get_permalink(424); ?>" coords="307,348,317,353,322,356,320,362,315,366,324,370,327,377,326,387,335,387,331,397,342,408,346,414,341,418,339,430,332,427,331,434,323,437,316,436,317,430,310,427,311,424,322,427,336,422,337,413,335,403,332,400,324,400,323,383,332,388,328,385,320,384,320,376,316,370,312,367,313,359,313,351,303,355,304,352" shape="poly">
                        <area alt="area" onmouseover="athens()" onmouseout="athens()" title="Эгейские острова" href="<?php echo get_permalink(424); ?>" coords="351,435,350,440,356,443,373,470,392,464,413,463,414,467,418,464,450,449,457,448,457,440,450,439,442,442,433,444,439,446,441,452,432,457,424,460,414,457,404,463,392,458,396,461,387,452,380,455,382,462,384,468,377,466,370,464,362,452,359,445,366,440,372,436,376,433,382,437,387,437,385,431,378,426,372,433,367,440,358,439" shape="poly">
                        <area alt="area" onmouseover="athens()" onmouseout="athens()" title="Эгейские острова" href="<?php echo get_permalink(424); ?>" coords="348,329,353,337,358,339,360,347,365,356,374,359,377,362,393,374,415,401,445,411,454,406,460,411,452,414,444,414,438,409,425,404,412,406,430,418,420,426,408,428,410,426,416,415,425,415,414,410,406,400,410,395,399,380,382,376,374,380,373,372,381,368,371,368,366,363,357,356,354,368,358,370,357,376,352,379,352,372,356,360,354,351,349,344,344,360,339,361,341,355,345,352,348,342,340,336,340,332" shape="poly">
                        <area alt="area" onmouseover="athens()" onmouseout="athens()" title="Эгейские острова" href="<?php echo get_permalink(424); ?>" coords="357,413,364,406,375,397,384,401,395,393,399,401,405,401,404,405,400,405,396,411,404,420,389,424,386,421,393,414,388,415,385,408,379,405,373,411,368,410,364,417" shape="poly">
                        <area alt="area" onmouseover="athens()" onmouseout="athens()" title="Эгейские острова" href="<?php echo get_permalink(424); ?>" coords="480,544,488,541,499,539,506,531,500,523,504,512,506,500,477,501,454,501,441,500,452,485,472,463,469,457,466,465,463,474,456,480,449,484,448,491,436,498,438,503,446,502,457,505,464,500,472,501,477,506,484,500,492,500,501,501,498,510,496,517,492,523,495,528,494,536,485,537,477,535,476,541" shape="poly">
                        <area alt="area" onmouseover="athens()" onmouseout="athens()" title="Эгейские острова" href="<?php echo get_permalink(424); ?>" coords="539,503,546,500,552,488,560,488,563,478,569,463,657,489,661,481,653,484,640,484,617,477,589,469,577,465,568,456,559,459,545,462,543,470,535,469,545,450,547,442,542,439,537,448,540,459,537,463,531,469,530,473,525,473,518,459,514,453,503,443,500,437,497,430,512,424,508,417,501,412,507,409,497,404,499,385,494,388,495,394,496,404,491,409,481,397,477,385,475,381,491,375,490,369,487,374,478,379,465,378,461,367,463,364,465,357,471,354,477,359,483,360,487,354,495,353,494,346,485,349,480,343,469,342,462,351,457,358,449,356,438,358,428,356,424,369,433,365,443,361,453,364,456,372,460,376,459,388,465,391,469,384,474,390,473,396,481,403,482,412,485,418,493,416,493,423,485,429,483,434,488,439,492,435,496,443,489,445,486,455,492,457,492,450,502,447,508,450,507,457,520,465,521,472,532,478,535,483,537,494,534,499" shape="poly">
                        <area alt="area" onmouseover="athens()" onmouseout="athens()" title="Эгейские острова" href="<?php echo get_permalink(424); ?>" coords="426,314,432,310,437,299,434,289,443,287,435,281,423,279,415,281,398,277,391,283,399,285,404,278,411,281,416,290,422,292,424,300,416,307,419,312" shape="poly">
                        <area alt="area" onmouseover="athens()" onmouseout="athens()" title="Эгейские острова" href="<?php echo get_permalink(424); ?>" coords="450,252,464,244,460,232,450,222,452,218,448,214,440,214,433,218,424,222,419,221,416,222,415,230,420,235,428,239,433,244,444,246" shape="poly">
                        <area alt="area" onmouseover="athens()" onmouseout="athens()" title="Эгейские острова" href="<?php echo get_permalink(424); ?>" coords="384,180,386,167,388,162,383,163,378,167,372,163,364,165,362,175,369,180,359,201,358,208,364,203,362,195,365,187,369,182,376,180" shape="poly">

                        <area alt="area" onmouseover="dimitsana()" onmouseout="dimitsana()" title="Пелопоннес, Западная Греция и Ионические острова" href="<?php echo get_permalink(423); ?>" coords="240,323,240,327,244,331,241,334,234,338,240,340,244,345,241,350,244,353,246,359,245,365,251,369,262,372,260,376,251,378,244,384,236,378,240,374,232,370,222,366,217,365,219,378,226,389,227,399,234,409,235,418,240,427,238,434,238,443,242,450,246,455,240,456,234,447,233,453,227,453,227,443,221,435,219,426,209,426,202,435,200,442,201,452,199,459,194,453,191,448,192,438,183,419,179,419,176,409,165,415,165,424,165,432,160,433,155,435,149,435,150,428,147,418,142,414,144,407,142,401,152,393,151,384,143,371,134,363,125,360,109,386,105,391,101,389,103,393,104,390,110,381,120,368,126,355,122,347,113,342,104,352,94,356,86,350,80,341,80,336,85,333,89,339,97,343,104,346,111,336,111,332,118,331,127,318,129,308,137,312,145,314,153,303,160,299,170,302,175,306,181,312,188,312,194,316,200,316,211,322,219,330,230,329,224,325,229,321,230,321" shape="poly">
                        <area alt="area" onmouseover="dimitsana()" onmouseout="dimitsana()" title="Пелопоннес, Западная Греция и Ионические острова" href="<?php echo get_permalink(423); ?>" coords="153,300,155,297,160,295,161,291,169,286,169,280,166,278,170,269,169,265,164,268,159,268,155,272,154,270,143,267,141,260,145,257,137,254,136,248,129,244,133,238,131,232,125,234,113,236,112,243,113,250,107,256,101,250,94,249,88,253,82,261,76,274,73,279,83,286,75,289,74,297,64,298,62,310,67,315,76,320,86,322,93,319,88,310,83,304,89,301,85,292,80,278,88,277,90,289,97,286,102,278,104,285,109,291,102,298,104,299,110,297,110,304,118,305,125,305,125,299,132,302,137,304,144,300" shape="poly">
                        <area alt="area" onmouseover="dimitsana()" onmouseout="dimitsana()" title="Пелопоннес, Западная Греция и Ионические острова" href="<?php echo get_permalink(423); ?>" coords="30,178,38,181,37,188,29,190,35,195,36,205,44,207,48,215,47,225,49,224,53,230,58,234,52,235,46,229,46,218,32,209,30,207,26,198,19,188,9,183,0,177,4,174,7,180,16,183,18,181,12,174,12,171,23,179" shape="poly">

                        <area alt="area" onmouseover="agios_nikolaos()" onmouseout="agios_nikolaos()" title="Эпир и Западная Македония" href="<?php echo get_permalink(414); ?>" coords="155,88,156,92,149,94,150,99,155,102,156,108,161,111,160,116,163,123,166,126,170,130,174,134,177,137,180,143,176,149,173,152,172,157,166,164,161,169,163,175,163,177,155,177,146,176,136,173,132,173,129,177,122,179,119,181,120,188,112,190,117,195,117,202,120,210,124,216,129,218,130,223,127,229,127,233,119,236,110,239,107,245,98,245,90,239,89,246,89,250,84,251,87,243,80,238,73,229,69,224,60,221,54,214,55,210,54,206,48,203,50,195,42,191,43,188,48,192,55,187,59,179,62,182,67,180,64,174,59,166,68,158,76,157,83,154,85,146,88,135,91,127,95,124,100,124,106,116,107,108,103,103,102,94,115,93,118,91,121,93,129,88,139,90,141,92,147,88" shape="poly">

                        <area alt="area" onmouseover="sparta()" onmouseout="sparta()" title="Фессалия и Центральная Греция" href="<?php echo get_permalink(422); ?>" coords="190,152,192,153,191,161,200,163,202,167,210,163,213,166,216,173,222,181,226,194,235,202,244,211,250,220,254,228,261,228,271,229,280,234,288,229,292,221,300,216,304,215,306,212,306,203,309,202,310,209,310,215,316,215,318,217,307,217,298,222,297,229,298,233,305,236,303,241,301,244,317,258,333,266,341,265,339,258,334,251,327,243,324,253,309,247,312,253,293,235,284,237,273,240,267,234,255,234,243,239,234,243,234,234,244,230,237,221,229,221,221,224,224,230,232,238,230,251,223,253,216,256,206,254,210,259,222,264,228,263,236,266,239,276,244,271,252,274,255,278,250,282,261,286,267,285,272,286,264,280,259,272,248,263,242,257,235,258,219,260,236,250,240,244,250,242,256,245,261,250,262,258,273,264,282,269,292,273,300,270,306,272,304,279,311,285,311,296,316,310,325,314,334,314,335,322,328,332,324,327,323,330,317,327,315,330,311,327,315,321,309,323,307,316,303,310,301,303,293,296,282,296,275,296,276,305,273,312,266,316,262,311,257,311,255,307,250,312,240,314,234,313,224,309,216,307,212,300,203,305,195,292,193,299,183,300,174,299,165,296,159,297,160,290,168,285,166,278,170,269,165,265,160,268,153,272,142,269,141,261,144,257,134,252,136,250,129,244,132,238,129,232,128,226,133,221,128,217,122,215,118,208,117,199,113,191,116,190,121,189,119,180,123,175,127,180,131,175,138,172,143,175,152,175,163,176,161,169,166,162,172,155,177,152,183,152,186,153" shape="poly">
                    </map>
                </div>
            <?php } ?>

            <?php if( in_category( 31 )) { ?>
                <div class="map_card">
                    <div class="container_maps">
                        <img class="image_map" id="image" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/map_cities.png" usemap="#map_greece" alt="map_greece">
                        <img class="image_map <?php the_field('afiny'); ?>" id="image_map" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_athens.png" usemap="#map_greece" alt="map_cities">
                        <img class="image_map <?php the_field('hanya_vis'); ?>" id="image_map_2" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_hania.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map <?php the_field('retimno_vis'); ?>" id="image_map_3" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_rethymno.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map <?php the_field('iraklion'); ?>" id="image_map_4" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_heraklion.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map <?php the_field('agios-nikolaos'); ?>" id="image_map_5" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_agios_nikolaos.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map <?php the_field('olimpiya'); ?>" id="image_map_6" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_olympia.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map <?php the_field('dimiczana'); ?>" id="image_map_7" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_dimitsana.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map <?php the_field('sparta'); ?>" id="image_map_8" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_sparta.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map <?php the_field('monemvasiya'); ?>" id="image_map_9" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_monemvasia.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map <?php the_field('epidavr'); ?>" id="image_map_10" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_epidaurus.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map <?php the_field('pirej'); ?>" id="image_map_11" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_pireas.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map <?php the_field('preveza'); ?>" id="image_map_12" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_preveza.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map <?php the_field('aleksandrupolis'); ?>" id="image_map_13" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_alexandroupolis.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map <?php the_field('ksanti'); ?>" id="image_map_14" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_xanthi.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map <?php the_field('kavala'); ?>" id="image_map_15" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_kavala.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map <?php the_field('saloniki'); ?>" id="image_map_16" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_thessaloniki.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map <?php the_field('litohoron'); ?>" id="image_map_17" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_litohoro.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map <?php the_field('karistos'); ?>" id="image_map_18" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_karystos.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map <?php the_field('halkida'); ?>" id="image_map_19" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_halkida.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map <?php the_field('delfy'); ?>" id="image_map_20" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_delphi.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map <?php the_field('galaksidi'); ?>" id="image_map_21" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_galaxidi.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map <?php the_field('kalambaka'); ?>" id="image_map_22" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_kalambaka.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map <?php the_field('larisa'); ?>" id="image_map_23" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_larisa.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map <?php the_field('volos'); ?>" id="image_map_24" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_volos.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map <?php the_field('nimfeon'); ?>" id="image_map_25" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_nympheon.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map <?php the_field('kastoriya'); ?>" id="image_map_26" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_castoria.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map <?php the_field('meczovo'); ?>" id="image_map_27" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_metsovo.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map <?php the_field('yanina'); ?>" id="image_map_28" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_janina.png" usemap="#map_greece" alt="map_city">
                        <img class="image_map <?php the_field('parga'); ?>" id="image_map_29" src="<?php echo bloginfo('template_url'); ?>/assets/img/geography/city_parga.png" usemap="#map_greece" alt="map_city">
                    </div>
                    <map name="map_greece" id="map_greece">
                        <area onmouseover="hania()" onmouseout="hania()" alt="hania" title="Ханья" href="<?php echo get_permalink(455); ?>" coords="298,531,7" shape="circle">
                        <area onmouseover="rethymno()" onmouseout="rethymno()" alt="rethymno" title="Ретимно" href="<?php echo get_permalink(474); ?>" coords="328,543,7" shape="circle">
                        <area onmouseover="heraklion()" onmouseout="heraklion()" alt="heraklion" title="Ираклион" href="<?php echo get_permalink(440); ?>" coords="369,545,7" shape="circle">
                        <area onmouseover="agios_nikolaos()" onmouseout="agios_nikolaos()" alt="agios_nikolaos" title="Агиос-Николаос" href="<?php echo get_permalink(479); ?>" coords="407,557,7" shape="circle">

                        <area onmouseover="olympia()" onmouseout="olympia()" alt="olympia" title="Олимпия" href="<?php echo get_permalink(478); ?>" coords="145,358,7" shape="circle">
                        <area onmouseover="dimitsana()" onmouseout="dimitsana()" alt="dimitsana" title="Димицана" href="<?php echo get_permalink(511); ?>" coords="175,359,7" shape="circle">
                        <area onmouseover="sparta()" onmouseout="sparta()" alt="sparta" title="Спарта" href="<?php echo get_permalink(476); ?>" coords="199,404,7" shape="circle">
                        <area onmouseover="monemvasia()" onmouseout="monemvasia()" alt="monemvasia" title="Монемвасия" href="<?php echo get_permalink(513); ?>" coords="234,434,7" shape="circle">
                        <area onmouseover="epidaurus()" onmouseout="epidaurus()" alt="epidaurus" title="Эпидавр" href="<?php echo get_permalink(491); ?>" coords="245,358,7" shape="circle">

                        <area onmouseover="pireas()" onmouseout="pireas()" alt="pireas" title="Пирей" href="<?php echo get_permalink(439); ?>" coords="265,331,7" shape="circle">
                        <area onmouseover="athens()" onmouseout="athens()" alt="athens" title="Афины" href="<?php echo get_permalink(437); ?>" coords="279,326,7" shape="circle">

                        <area onmouseover="alexandroupolis()" onmouseout="alexandroupolis()" alt="alexandroupolis" title="Александруполис" href="<?php echo get_permalink(458); ?>" coords="415,89,7" shape="circle">
                        <area onmouseover="xanthi()" onmouseout="xanthi()" alt="xanthi" title="Ксанти" href="<?php echo get_permalink(459); ?>" coords="354,71,7" shape="circle">
                        <area onmouseover="kavala()" onmouseout="kavala()" alt="kavala" title="Кавала" href="<?php echo get_permalink(460); ?>" coords="323,84,7" shape="circle">
                        <area onmouseover="thessaloniki()" onmouseout="thessaloniki()" alt="thessaloniki" title="Салоники" href="<?php echo get_permalink(438); ?>" coords="231,113,7" shape="circle">
                        <area onmouseover="litohoro()" onmouseout="litohoro()" alt="litohoro" title="Литохорон" href="<?php echo get_permalink(493); ?>" coords="203,160,7" shape="circle">

                        <area onmouseover="karystos()" onmouseout="karystos()" alt="karystos" title="Каристос" href="<?php echo get_permalink(494); ?>" coords="324,326,7" shape="circle">
                        <area onmouseover="halkida()" onmouseout="halkida()" alt="halkida" title="Халкида" href="<?php echo get_permalink(457); ?>" coords="269,290,7" shape="circle">
                        <area onmouseover="delphi()" onmouseout="delphi()" alt="delphi" title="Дельфы" href="<?php echo get_permalink(509); ?>" coords="198,283,7" shape="circle">
                        <area onmouseover="galaxidi()" onmouseout="galaxidi()" alt="galaxidi" title="Галаксиди" href="<?php echo get_permalink(510); ?>" coords="190,298,7" shape="circle">
                        <area onmouseover="kalambaka()" onmouseout="kalambaka()" alt="kalambaka" title="Каламбака" href="<?php echo get_permalink(492); ?>" coords="146,186,7" shape="circle">
                        <area onmouseover="larisa()" onmouseout="larisa()" alt="larisa" title="Лариса" href="<?php echo get_permalink(441); ?>" coords="203,194,7" shape="circle">
                        <area onmouseover="volos()" onmouseout="volos()" alt="volos" title="Волос" href="<?php echo get_permalink(442); ?>" coords="231,217,7" shape="circle">

                        <area onmouseover="nympheon()" onmouseout="nympheon()" alt="nympheon" title="Нимфеон" href="<?php echo get_permalink(512); ?>" coords="135,104,7" shape="circle">
                        <area onmouseover="castoria()" onmouseout="castoria()" alt="castoria" title="Кастория" href="<?php echo get_permalink(477); ?>" coords="131,124,7" shape="circle">
                        <area onmouseover="metsovo()" onmouseout="metsovo()" alt="metsovo" title="Мецово" href="<?php echo get_permalink(495); ?>" coords="113,182,7" shape="circle">
                        <area onmouseover="janina()" onmouseout="janina()" alt="janina" title="Янина" href="<?php echo get_permalink(456); ?>" coords="84,193,7" shape="circle">
                        <area onmouseover="parga()" onmouseout="parga()" alt="parga" title="Парга" href="<?php echo get_permalink(496); ?>" coords="65,217,7" shape="circle">
                        <area onmouseover="preveza()" onmouseout="preveza()" alt="preveza" title="Превеза" href="<?php echo get_permalink(475); ?>" coords="87,246,7" shape="circle">
                    </map>
                </div>
            <?php } ?>

            <?php if( !in_category( array( 30, 31 ) )) { ?>
                <div class="adaptive_image_cont">
                    <?php the_post_thumbnail(); ?>
                </div>
            <?php } ?>
                

            
            <hr class="hr-text">
            <div class="bottons-book-text">
                <a id="readmode_btn" class="my_btn_ic" type="button" name="readmode"><img src="<?php echo bloginfo('template_url'); ?>/assets/img/book_icon_black.png" alt=""></a>
                <a id="darkmode_btn" class="my_btn_ic display_none" type="button" name="darkmode"><img src="<?php echo bloginfo('template_url'); ?>/assets/img/moon_icon.png" alt=""></a>
                <a id="smaller_text" class="my_btn_ic display_none" type="button" name="smaller_text"><img src="<?php echo bloginfo('template_url'); ?>/assets/img/a_smaller.png" alt=""></a>
                <a id="bigger_text" class="my_btn_ic display_none" type="button" name="bigger_text"><img src="<?php echo bloginfo('template_url'); ?>/assets/img/a_bigger.png" alt=""></a>
                <a id="translate_btn" class="my_btn_ic" type="button" name="translate"><img src="<?php echo bloginfo('template_url'); ?>/assets/img/abc_russian.png" alt=""></a>
            </div>
            <hr class="hr-text">

            <section id="scroll_field">
                <button id="read_scroll" class="my_btn" type="button" name="translate">Перевод</button>
                <blockquote>
                    <div class="flex-book-text" ID="flex-book-text">
                        <h2><?php the_field('zagolovok_originala'); ?></h2>
                        <br>
                        <b><?php the_field('titul_list'); ?></b>
                        <?php the_field('spisok_list'); ?>
                        <?php the_field('paragrafi_originala'); ?>

                        <p class="text-end target_link"><a target="_blank" href="<?php the_field('link_to_sourse'); ?>" class="text-success link-sites">Ссылка на источник</a></p>
                    </div>
                </blockquote>

                <div class="flex-book-text-translate hiden" ID="flex-book-text-translate">
                    <h2><?php the_field('zagolovok_perevoda'); ?></h2>
                    <br>
                    <b><?php the_field('titul_list_perevod'); ?></b>
                    <?php the_field('spisok_list_perevod'); ?>
                    <?php the_field('paragrafi_perevoda'); ?>

                    <p class="text-end mt_12 author_link">Автор перевода: <?php the_author_posts_link(); ?></p>
                </div>
            </section>

            <section class="geographySection">
                <?php the_content();?>
                <div id="stat_page" class="stat_topic" name="<?php global $post; echo $post->ID;?>">
                    <img src="<?php echo bloginfo('template_url'); ?>/assets/img/viewers.png" alt="просмотры"> <span class="views_counter"><?php echo $post->post_viewers; ?></span>
                </div>
            </section>
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