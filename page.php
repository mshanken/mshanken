<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package MSSTheme
 */

	get_header();
?>
	<style>
		.col-8.col-sm-4.g-mb-40.g-mb-0--sm.align-self-end p {
			margin-right: 80px;
		}
		@media (min-width: 576px) {
			.col-8.col-sm-4.g-mb-40.g-mb-0--sm.align-self-end p {
				margin-right: 0;
			}
		}
		@media (min-width: 992px) {
			.col-8.col-sm-4.g-mb-40.g-mb-0--sm.align-self-end p {
				margin-right: 40px;
			}
		}
	</style>
	<?php if ( is_front_page() || is_home() ) : ?>
		<section id="carousel">
			<h1 class="text-center g-pt-40 g-pb-40"><?php $msstheme_description = get_bloginfo( 'description', 'display' ); echo $msstheme_description; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></h1>
			<div id="carouselExampleControls" class="carousel slide carousel-fade" data-ride="carousel" data-interval="2000">
				<div class="carousel-inner">
				<?php
				$images = get_field('image_carousel');
				$count = 0;
				if( $images ): ?>
					<?php foreach( $images as $image ): ?>
						<?php $count++; ?>
						<div class="carousel-item <?php echo ($count == 1) ? 'active' : $count; ?>">
							<img class="d-block img-fluid mx-auto" src="<?php echo esc_url($image['sizes']['carousel']); ?>" alt="<?php echo esc_attr($image['alt']); ?>">
						</div>
					<?php endforeach; ?>
				<?php endif;?>
				</div>
			</div>
		</section>
		<section id="brands" class="bg-primary">
			<div class="container g-py-40">
				<div class="row">
					<div class="col-12 text-white text-center">
						<h2>OUR BRANDS</h2><h5>Get access to our media kits, digital and social platforms, <br>event offerings, and more.</h5>
					</div>
				</div>
				<div class="row">
			<?php
			$images = get_field('our_brand');
			if( $images ): ?>
				<?php foreach( $images as $image ): ?>
					<div class="col-6 col-md-4 text-center">
						<a href="<?php echo esc_attr($image['title']); ?>" class="btn g-brd-around g-brd-primary"><img src="<?php echo esc_url($image['sizes']['brands']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" class="img-fluid"></a>
					</div>
				<?php endforeach; ?>
			<?php endif;?>
				</div>
			</div>
		</section>
		<section id="whatwedeliver" class="bg-light">
			<div class="container g-py-40">
				<div class="row">
					<div class="col-12 text-center">
						<h2>WHAT WE DELIVER</h2><!-- UNIQUE OFFERINGS AND CAPABILITIES -->
					</div>
				</div>
				<div class="row justify-content-center">
					<div class="col-10 col-lg-8">
						<div class="row g-my-40 g-my-50--md">
					<?php
					$images = get_field('what_we_deliver');
					$count = 0;
					if( $images ): ?>
						<?php foreach( $images as $image ): ?>
							<?php $count++; ?>
							<div class="col-4 col-sm-2 g-mb-40 g-mb-0--sm align-self-center">
								<img src="<?php echo esc_url($image['sizes']['carousel']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" class="img-fluid">
							</div>
							<div class="col-8 col-sm-4 g-mb-40 g-mb-0--sm align-self-end">
								<p><?php echo esc_attr($image['description']); ?></p>
							</div>
							<?php if( ($count % 2) == 0	): ?>
								</div><div class="row g-my-40 g-my-50--md">
							<?php endif;?>
						<?php endforeach; ?>
					<?php endif;?>
						</div>

						
					</div>
				</div>
			</div>
		</section>
		<section id="others" class="g-my-20 g-my-40--md">
			<div class="container">
				<div class="row">
					<?php the_field('text_boxes'); ?>
				</div>
			</div>
		</section>

	<?php else : ?>
		<main class="container g-py-40 g-mt-60 g-mt-140--md">
			<div class="row justify-content-center fadeIn u-in-viewport" data-animation="fadeIn" data-animation-delay="0" data-animation-duration="1000" style="animation-duration: 1000ms;">
				<article id="article" class="article col-md-8 g-pb-40 g-pb-0--md text-left g-font-size-20" role="main-article">
					<div class="g-ml-40--md">
			<?php
				while ( have_posts() ) :
					the_post();

					the_title( '<h2>', '</h2>' );
					$the_content = get_the_content();
			?>
			
			<?php
				endwhile; // End of the loop.
			?>
			<?php
				echo $the_content;
			?>
					</div>
				</article>
			</div>
		</main>

		

	<?php endif; ?>
<?php

	get_footer();
