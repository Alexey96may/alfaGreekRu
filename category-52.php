<?php
    get_header();
?>

<?php if ( have_posts() ) : ?>

    <main>
        <hr class="hr_title_page" size="3">
        <h1 class="title_page"><?php the_archive_title(); ?></h1>
        <hr class="hr_title_page" size="3">

        <div class="container-grammar-list">
            <div class="div_lines">
                <ul class="list-group list-group-flush grammar-list">
                    <li class="list-group-item"><h2>Части речи</h2></li>
                    <ul class="list-group-flush border-secondary">
                        <li class="list-group-item"><h3>Самостоятельные Части Речи</h3></li>
                            <ul class="list-group-flush border-third">
                                <li class="list-group-item"><h4>Местоимения</h4></li>
                                <li class="list-group-item"><h4><a class="list-group-item-action" href="<?php echo get_category_link(39);?>"><u>Имена Существительные</u></a></h4></li>
                                <ul class="list-group-flush border-fourth">
                                    <li class="list-group-item"><a class="list-group-item-action" href="<?php echo get_permalink(1146);?>"><u>Склонение: Мужской Род</u></a></li>
                                    <li class="list-group-item"><a class="list-group-item-action" href="<?php echo get_permalink(1126);?>"><u>Склонение: Женский Род</u></a></li>
                                    <li class="list-group-item"><a class="list-group-item-action" href="<?php echo get_permalink(1147);?>"><u>Склонение: Средний Род</u></a></li>
                                </ul>
                                <li class="list-group-item"><h4><a class="list-group-item-action" href="<?php echo get_category_link(42);?>"><u>Имена Прилагательные</u></a></h4></li>
                                <ul class="list-group-flush border-fourth">
                                    <li class="list-group-item"><a class="list-group-item-action" href="<?php echo get_permalink(1197);?>"><u>Склонение: Мужской Род</u></a></li>
                                    <li class="list-group-item"><a class="list-group-item-action" href="<?php echo get_permalink(1197);?>"><u>Склонение: Женский Род</u></a></li>
                                    <li class="list-group-item"><a class="list-group-item-action" href="<?php echo get_permalink(1197);?>"><u>Склонение: Средний Род</u></a></li>
                                </ul>
                                <li class="list-group-item"><h4>Имена Числительные</h4></li>
                                <ul class="list-group-flush border-fourth">
                                    <li class="list-group-item">Склонение: Мужской Род</li>
                                    <li class="list-group-item">Склонение: Женский Род</li>
                                    <li class="list-group-item">Склонение: Средний Род</li>
                                </ul>
                                <li class="list-group-item"><h4><a class="list-group-item-action" href="<?php echo get_category_link(41);?>"><u>Глаголы</u></h4></a></li>
                                <li class="list-group-item"><h4>Наречия</h4></li>
                            </ul>
                            <li class="list-group-item"><h3>Служебные Части Речи</h3></li>
                                <ul class="list-group-flush border-third">
                                    <li class="list-group-item"><h4>Артикли</h4></li>
                                    <li class="list-group-item"><h4>Предлоги</h4></li>
                                    <li class="list-group-item"><h4>Союзы</h4></li>
                                    <li class="list-group-item"><h4>Частицы</h4></li>
                                </ul>
                            <li class="list-group-item"><h3>Междометия</h3></li>
                    </ul>
                    <li class="list-group-item"><h2>Согласование времён</h2></li>
                    <li class="list-group-item"><h2>Косвенная и прямая речь</h2></li>
                    <li class="list-group-item"><h2>Синтаксис</h2></li>
                    <li class="list-group-item"><h2>Пунктуация</h2></li>
                </ul>
            </div>
        </div>
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