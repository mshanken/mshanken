<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package MSSTheme
 */

get_header();
?>
	<main>
		<section class="height-is-based-on-content g-mt-60 g-mt-100--md">
			<?php
				while ( have_posts() ) :
					the_post();

					// the_title( '<h1 class="entry-title">', '</h1>' );
					$url = wp_get_attachment_url( get_post_thumbnail_id($post->ID), 'thumbnail' );
					$the_content = get_the_content();
			?>
			<div class="text-center u-bg-overlay g-bg-black-opacity-0_3--after g-bg-img-hero g-py-200--md g-py-80" style="background-image: url('<?php echo $url; ?>');">
			<?php 
				
				$image = get_field('page_title');
				if( !empty( $image ) ): ?>
					<img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" class="img-fluid g-mx-auto" style="max-width: 50%;">
				<?php endif; ?>
			
			</div>
			<?php
				endwhile; // End of the loop.
			?>
		</section>
		<section id="magazines" class="bg-light">
			<div class="container g-py-40">
		<?php 
			$images = get_field('cover_gallery');
			if( $images ): ?>
				<div class="row justify-content-center">
					<?php foreach( $images as $image ): ?>
						<div class="col-6 col-sm-4 col-md-2 g-mb-40 g-mb-0--md">
							<img src="<?php echo esc_url($image['sizes']['cover']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" class="img-fluid">
						</div>
						</li>
					<?php endforeach; ?>
				</div>
		<?php endif; ?>
			</div>
		</section>
		<section id="content" class="container g-py-40">
			<div class="row" data-animation="fadeIn" data-animation-delay="0" data-animation-duration="1000">
				<article id="article" class="article col-md-8 g-pb-40 g-pb-0--md text-center text-md-left g-font-size-20" role="main-article">
					<div class="g-ml-40--md">
					<?php
						echo $the_content;
					?>
					</div>
				</article>
				<aside id="aside" class="aside col-md-4 order-md-first text-center text-md-left" role="sidebar">
					<?php the_field('get_acess'); ?>
				</aside>
			</div>
		</section>
		<section id="contact" class="bg-primary py-3"><a name="contact"></a>
			<div class="container text-white g-py-40">
				<h2 class="text-center g-pb-40">CONTACT</h2>
				<div class="row">
					<div class="col-sm-12 col-md-6 text-center text-md-right">
						<?php the_field('contact_advertiser'); ?>
					</div>
					<div class="col-sm-12 col-md-6 text-center text-md-left g-brd-left--md g-brd-white g-mt-40 g-mt-0--md">
						<?php the_field('contact_production'); ?>
					</div>
				</div>
			</div>
		</section>
	</main>
<?php
// get_sidebar();
get_footer();
