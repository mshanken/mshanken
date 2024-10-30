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
	
		
    <section class="height-is-based-on-content g-mt-60 g-mt-100--md">
        <?php
            while ( have_posts() ) :
                the_post();

                // the_title( '<h1 class="entry-title">', '</h1>' );
                $url = wp_get_attachment_url( get_post_thumbnail_id($post->ID), 'thumbnail' );
                $the_content = get_the_content();
        ?>
        <div class="text-center u-bg-overlay g-bg-black-opacity-0_3--after g-bg-img-hero g-py-200--md g-py-80" style="background-image: url('<?php echo $url; ?>');">
            
        </div>
        <?php
            endwhile; // End of the loop.
        ?>
    </section>
    <section id="others" class="g-my-20 g-my-40--md">
        <div class="container fadeIn u-in-viewport" data-animation="fadeIn" data-animation-delay="0" data-animation-duration="2000" style="animation-duration: 2000ms;">
            <div class="row">
                <?php the_field('text_boxes'); ?>
            </div>
        </div>
    </section>
    <main class="container g-py-40 fadeIn u-in-viewport" data-animation="fadeIn" data-animation-delay="0" data-animation-duration="1000" style="animation-duration: 1000ms;">
        <div class="row">
            <article id="article" class="article col-12 g-pb-40 g-pb-0--md text-center g-font-size-20" role="main-article">
                <?php
                    echo $the_content;
                ?>
            </article>
        </div>
    </main>

    <section id="carousel-2" class="">
        <div class="container text-white g-py-40 fadeIn u-in-viewport" data-animation="fadeIn" data-animation-delay="0" data-animation-duration="2000" style="animation-duration: 2000ms;">
            <div class="row justify-content-center">
                <div class="col-10">
                    <div id="carouselExampleControls" class="carousel slide carousel-fade" data-ride="carousel">
                        <div class="carousel-inner">
                <?php
                    $images = get_field('image_carousel');
                    $count = 0;
                    if( $images ): ?>
                        <?php foreach( $images as $image ): ?>
                            <?php $count++; ?>
                            <div class="carousel-item <?php echo ($count == 3) ? 'active' : $count; ?>">
                                <a class="js-fancybox" href="javascript:void();" data-fancybox="lightbox-gallery" data-src="<?php echo esc_url($image['sizes']['carousel']); ?>" data-caption="<h5><?php echo esc_html($image['title']); ?></h5><p><?php echo esc_html($image['description']); ?></p>" data-is-infinite="true" data-slideshow-speed="5000"><img class="d-block img-fluid" src="<?php echo esc_url($image['sizes']['carousel']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" /></a>
                                <div class="carousel-caption d-none d-md-block g-bg-black-opacity-0_5">
                                    <h5><?php echo esc_html($image['title']); ?></h5>
                                    <p><?php echo esc_html($image['description']); ?></p>
                                </div>
                            </div>
                        <?php endforeach; ?>
                <?php endif;?>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
<?php

	get_footer();
