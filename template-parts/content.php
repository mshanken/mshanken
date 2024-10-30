<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package MSSTheme
 */

?>
<div class="row" data-animation="fadeIn" data-animation-delay="0" data-animation-duration="1000">
	<article id="article" class="article col-md-8 g-pb-40 g-pb-0--md text-center text-md-left g-font-size-20" role="main-article">
		
		<header class="entry-header">
			<?php
			if ( is_singular() ) :
				the_title( '<h1 class="entry-title">', '</h1>' );
			else :
				the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
			endif;

			if ( 'post' === get_post_type() ) :
				?>
			<?php endif; ?>
		</header><!-- .entry-header -->

		<?php msstheme_post_thumbnail(); ?>

		<div class="g-ml-40--md">
			<?php
				the_content();
			?>
		</div><!-- .entry-content -->

	</article>
</div>
