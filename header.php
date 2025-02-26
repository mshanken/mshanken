<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package MSSTheme
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<div class="loading">Loading&#8230;</div>
	<?php wp_body_open(); ?>
	<header id="js-header" class="u-header u-header--sticky-top u-header--toggle-section u-header--change-appearance" data-header-fix-moment="300">
		<div class="u-header__section u-header__section--dark g-bg-primary g-transition-0_3 g-pt-10 text-md-center" data-header-fix-moment-exclude="g-pt-10" data-header-fix-moment-classes="g-py-0">
			<?php
				the_custom_logo(); 
			?>
			<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="navbar-brand d-none d-md-block">
				<h1 class="text-hide"><?php bloginfo( 'name' ); ?></h1>
				<img src="https://mscwordpresscontent.s3.amazonaws.com/mshanken/wp-content/uploads/2025/05/MSC-logo.png" alt="<?php bloginfo( 'name' ); ?>" class="img-fluid g-width-400">
			</a>
			<nav class="navbar navbar-expand-md g-pb-0--md">
				<div class="container">
					<a href="/" class="navbar-brand d-md-none">
						<img src="https://mscwordpresscontent.s3.amazonaws.com/mshanken/wp-content/uploads/2025/05/MSC-logo.png" alt="<?php bloginfo( 'name' ); ?>" class="img-fluid g-width-80x">
					</a>
					<!-- Responsive Toggle Button -->
					<button class="navbar-toggler navbar-toggler-right btn g-line-height-1 g-brd-none g-pa-0 g-pos-abs g-top-0 g-right-0" type="button" aria-label="Toggle navigation" aria-expanded="false" aria-controls="navBar" data-toggle="collapse" data-target="#navBar">
						<span class="hamburger hamburger--slider g-pt-5">
							<span class="hamburger-box">
								<span class="hamburger-inner"></span>
							</span>
						</span>
					</button>
					<!-- End Responsive Toggle Button -->
					<!-- Logo -->
						<!-- <a href="/" class="navbar-brand">
							M. Shanken Communications
						</a> -->
					<!-- End Logo -->
					<!-- Navigation -->
					<?php
						wp_nav_menu(
							array(
								'theme_location' => 'menu-1',
								'menu_id'        => 'primary-menu',
								'menu_class'	 => 'navbar-nav text-uppercase g-font-weight-600 mx-auto u-main-nav-v3',
								'container_class'=> 'collapse navbar-collapse align-items-center flex-sm-row g-pt-10 g-pt-5--md',
								'container_id'	 => 'navBar',
								'depth'          => 0,
								'walker' => new WPDocs_Walker_Nav_Menu(),
							)
						);
					?>
					<!-- End Navigation -->
				</div>
			</nav>
		</div>
	</header><!-- End Header -->
<!-- #header -->
