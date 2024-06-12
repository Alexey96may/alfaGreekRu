<?php get_header(); ?>

<?php if ( have_posts() ) : ?>

	<main>
          <hr class="hr_title_page" size="3">
          <h1 class="title_page"><?php the_archive_title(); ?></h1>
          <hr class="hr_title_page" size="3">

		  <div class="container-grammar-list">
            <div class="div_lines">
                <ul class="list-group list-group-flush grammar-list">
                    <li class="list-group-item"><h2>Активный Залог</h2></li>
                    <ul class="list-group-flush border-secondary">
                        <li class="list-group-item"><h3>Изъявительное Наклонение</h3></li>
                            <ul class="list-group-flush border-third">
                                <li class="list-group-item"><a class="list-group-item-action" href="<?php echo get_permalink(1207);?>"><h4><u>Настоящее Время (Ενεστώτας)</u></р></a></li>
                                <li class="list-group-item"><h4>Прошедшее Время</h4></li>
                                <ul class="list-group-flush border-fourth">
                                    <li class="list-group-item"><a class="list-group-item-action" href="<?php echo get_permalink(1218);?>"><u>Совершенное (простое) Прошедшее (Αόριστος)</u></a></li>
                                    <li class="list-group-item"><a class="list-group-item-action" href="<?php echo get_permalink(1211);?>"><u>Несовершенное Прошедшее (имперфект) (Παρατατικός)</u></a></li>
                                    <li class="list-group-item"><a class="list-group-item-action" href="<?php echo get_permalink(1222);?>"><u>Совершенное (сложное) Прошедшее (Παρακείμενος)</u></a></li>
                                    <li class="list-group-item"><a class="list-group-item-action" href="<?php echo get_permalink(1222);?>"><u>Предпрошедшее (плюсквамперфект) (Υπερσυντέλικος)</u></a></li>
                                </ul>
                                <li class="list-group-item"><h4>Будущее Время</h4></li>
                                <ul class="list-group-flush border-fourth">
                                    <li class="list-group-item"><a class="list-group-item-action" href="<?php echo get_permalink(1221);?>"><u>Совершенное (простое) Будущее (Μέλλοντας Στιγμιαίος)</u></a></li>
                                    <li class="list-group-item"><a class="list-group-item-action" href="<?php echo get_permalink(1221);?>"><u>Несовершенное Будущее (Μέλλοντας Εξακολουθητικός)</u></a></li>
                                    <li class="list-group-item"><a class="list-group-item-action" href="<?php echo get_permalink(1222);?>"><u>Совершенное (сложное) Будущее (Μέλλοντας Συντελεσμένος)</u></a></li>
                                </ul>
                            </ul>
                        <li class="list-group-item"><h3><a class="list-group-item-action" href="<?php echo get_permalink(1245);?>"><u>Зависимое Наклонение</u></a></h3></li>
                        <li class="list-group-item"><h3><a class="list-group-item-action" href="<?php echo get_permalink(1246);?>"><u>Повелительное Наклонение</u></a></h3></li>
                    </ul>
                    <li class="list-group-item"><strong><h2>Пассивный Залог</h2></strong></li>
                    <li class="list-group-item"><strong><h2>Особые Формы Глагола</h2></strong></li>
                    <ul class="list-group-flush border-secondary">
                        <li class="list-group-item "><h3>Инфинитив</h3></li>
                        <li class="list-group-item"><h3>Причастие</h3></li>
                        <ul class="list-group-flush border-third">
                            <li class="list-group-item list-dash"><h4>Совершенное Причастие</h4></li>
                            <li class="list-group-item"><h4>Несовершенное Причастие</h4></li>
                        </ul>
                        <li class="list-group-item"><h3>Деепричастие</h3></li>
                    </ul>
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

<?php get_footer(); ?>
