<?php
/**
 * The template for displaying Comments.
 * The area of the page that contains comments and the comment form.
 */
 
/*
 * If the current post is protected by a password and the visitor has not yet
 * entered the password we will return early without loading the comments.
 */
if ( post_password_required() )
  return;
?>
 
<?php
function mytheme_comment($comment, $args, $depth) {
  $GLOBALS['comment'] = $comment; ?>
  <div <?php comment_class(); ?> id="li-comment-<?php comment_ID() ?>">
    <div id="comment-<?php comment_ID(); ?>">
		<div class="container_comment_flex">
			<div class="comment-author vcard container_persona_flex">
				<div class="avatar_container">
					<?php echo get_avatar( $comment ); ?>
				</div>
				<div class="reply">
					<?php comment_reply_link(array_merge( $args, array('depth' => $depth, 'max_depth' => $args['max_depth']))) ?>
				</div>
				<span class="comment-raiting"></span>
			</div>

			<?php if ($comment->comment_approved == '0') : ?>
				<p class="awaiting">Спасибо! Ваш комментарий отправлен на модерацию.</p>
			<?php endif; ?>
			<div class="text-comment-field">
				<div class="cont_user_name"><span class="author"><?php echo get_comment_author_link( $comment_ID ) ?></span></div>
				<div class="cont_user_data"><span class="comment-meta commentmetadata">
					<p><?php printf( '%1$s в %2$s', get_comment_date(), get_comment_time()) ?></p>
					<?php edit_comment_link('(Исправить)', '  ', '') ?>
					</span>
				</div>
				<div class="comment-text comment_container">
					<p><?php comment_text() ?></p>
				</div>
			</div>
		</div>
 
    </div>
    <?php } 
    ?>
 
 
<?php
// Reorder Comment text area after Fields
add_filter('comment_form_fields', 'kama_reorder_comment_fields' );
function kama_reorder_comment_fields( $fields ){
 
  $new_fields = array(); // new order of the field
 
  $myorder = array('author','email','comment'); // my order
 
  foreach( $myorder as $key ){
    $new_fields[ $key ] = $fields[ $key ];
    unset( $fields[ $key ] );
  }
 
// other fields to the end of form
  if( $fields )
    foreach( $fields as $key => $val )
      $new_fields[ $key ] = $val;
 
    return $new_fields;
  }
  ?>
 
 
<div id="comments" class="comment_body">

			<div class="number_of_comments">
				<h3 class="comments-title"><?php printf( _nx( 'Всего комментариев: 1', 'Всего комментариев: %1$s', get_comments_number(), 'comments title', '' ), number_format_i18n( get_comments_number() ), '<span>' . get_the_title() . '</span>' ); ?></h3>
			</div>

		<?php
			// change fields in the comments form
			$commenter = wp_get_current_commenter();
			$req = get_option( 'require_name_email', 0 );
			$aria_req = ( $req ? " aria-required='true'" : '' );
			
			$comments_args = array(
			
				// reply link
				'cancel_reply_link' => __( '(отменить ответ)' ),
			
				// change the title of send button
				'label_submit'=>'Отправить',
			
				// change the title of the reply section
				'title_reply'=>'',
			
				// remove "Text or HTML to be displayed after the set of comment fields"
				'comment_notes_before' => '',
				'comment_notes_after'  => '',
			
				//fields
				'fields' => array(
				'author' =>
				'<p class="comment-form-author"><label class="text-field__label" class="text-field__label" for="author">' . __( 'Ваше имя', '' ) . '</label> ' .
				( $req ? '<span class="required red_star">*</span>' : '' ) .
				'<div><input class="user_name" id="author" name="author" type="text" value="' . esc_attr( $commenter['comment_author'] ) .
				'" size="30"' . $aria_req . ' /></div></p>',
			
				'email' =>
				'<p class="comment-form-email"><label class="text-field__label" for="email">' . __( 'Email', '' ) . '</label> ' .
				( $req ? '<span class="required red_star">*</span>' : '' ) .
				'<div><input class="user_name" id="email" name="email" type="text" value="' . esc_attr(  $commenter['comment_author_email'] ) .
				'" size="30"' . $aria_req . ' /></div></p>',
			
				'url' =>
				'',
				),
			
				// redefine your own textarea (the comment body)
				'comment_field' =>
				'<p class="comment-form-comment"><label class="text-field__label" for="comment">' . _x( 'Comment', '' ) . '</label> <span class="required red_star">*</span><br /><textarea class="comment_text" id="comment" name="comment" cols="30" rows="10" aria-required="true"></textarea></p><div class="text_80 text_marg">Нажимая кнопку "Отправить", Вы даёте своё согласие на обработку Ваших персональной данных, описанную на странице <a href="https://alfa-greek.ru/privacy-policy/">Политики конфиденциальности</a> нашего сайта.
				</div>',
				);
			
			comment_form($comments_args);
		?>

		<?php
		// Are there comments to navigate through?
		if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) :
			?>
			<nav class="navigation comment-navigation" role="navigation">
			<h2 class="screen-reader-text section-heading"><?php _e( 'Comment navigation', '' ); ?></h2>
			<div class="nav-previous alignleft"><?php previous_comments_link( __( '&larr; Older Comments', '' ) ); ?></div>
			<div class="nav-next alignright"><?php next_comments_link( __( 'Newer Comments &rarr;', '' ) ); ?></div>
			</nav><!-- .comment-navigation -->
		<?php
			endif; // Check for comment navigation
		?>
	
		<?php if ( ! comments_open() && get_comments_number() ) : ?>
			<p class="no-comments"><?php _e( 'Comments are closed.' , '' ); ?></p>
		<?php endif; ?>


	<?php if ( have_comments() ) : ?>
	
		<div class="created_comment">
			<hr class="hr_comment">
			<?php
			wp_list_comments( array(
				'style'       => 'div',
				'type'        => 'comment',
				'short_ping'  => true,
				'avatar_size' => 32,
				'callback'    => 'mytheme_comment',
				)
			);
			?>
		</div><!-- .comment-list -->
 
  	<?php endif; // have_comments() ?>
 
 
 
</div><!-- #comments -->