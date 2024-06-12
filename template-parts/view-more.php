<article class="all_offert">
	<h3 class="text-center">Смотрите также:</h3>
	<br>
	<div class="offers">
		<?php
			global $post;

			$myposts = get_posts([ 
				'numberposts' => 4,
				'orderby'     => 'rand'
			]);

			if( $myposts ){
				foreach( $myposts as $post ){
					setup_postdata( $post );
					?>
					<a href="<?php the_permalink(); ?>" class="offer">
						<div class="container_image_offer">
							<?php the_post_thumbnail();?>
							<div id="viewMore_stat_topic" class="viewMore_stat_topic" name="<?php echo get_the_ID();?>">
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
						<div class="container_text_offer">
							<div class="title_text_offer"><span class="offer_text"><?php the_title();?></span></div>
							<div class="field_text_offer"><?php the_excerpt();?></div>
						</div>
					</a>
					<?php 
				} } wp_reset_postdata(); // Сбрасываем $post
		?>
	</div>
</article>
