<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package MSSTheme
 */

get_header();
?>

<main class="container g-py-40">

		<section class="row" data-animation="fadeIn" data-animation-delay="0" data-animation-duration="1000">
			<header class="article col-md-12 g-pb-40 g-pb-0--md text-center text-md-left g-font-size-20"">
				<h1 class="page-title"><?php esc_html_e( 'Oops! That page can&rsquo;t be found.', 'msstheme' ); ?></h1>
			</header><!-- .page-header -->

			<div class="article col-md-8 g-pb-40 g-pb-0--md text-center text-md-left g-font-size-20">
				<p><?php esc_html_e( 'It looks like nothing was found at this location. Maybe try one of the links below?', 'msstheme' ); ?></p>

				<?php

					the_widget( 'WP_Widget_Recent_Posts' );
				?>

			</div><!-- .page-content -->
		</section><!-- .error-404 -->

	</main><!-- #main -->

<?php
get_footer();
