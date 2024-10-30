<?php
/**
 * MSSTheme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package MSSTheme
 */

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.1' );
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function msstheme_setup() {
	/*
		* Make theme available for translation.
		* Translations can be filed in the /languages/ directory.
		* If you're building a theme based on MSSTheme, use a find and replace
		* to change 'msstheme' to the name of your theme in all the template files.
		*/
	load_theme_textdomain( 'msstheme', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
		* Let WordPress manage the document title.
		* By adding theme support, we declare that this theme does not use a
		* hard-coded <title> tag in the document head, and expect WordPress to
		* provide it for us.
		*/
	add_theme_support( 'title-tag' );

	/*
		* Enable support for Post Thumbnails on posts and pages.
		*
		* @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		*/
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus(
		array(
			'menu-1' => esc_html__( 'Primary', 'msstheme' ),
		)
	);

	/*
		* Switch default core markup for search form, comment form, and comments
		* to output valid HTML5.
		*/
	add_theme_support(
		'html5',
		array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'style',
			'script',
		)
	);

	// Set up the WordPress core custom background feature.
	add_theme_support(
		'custom-background',
		apply_filters(
			'msstheme_custom_background_args',
			array(
				'default-color' => 'ffffff',
				'default-image' => '',
			)
		)
	);

	// Add theme support for selective refresh for widgets.
	add_theme_support( 'customize-selective-refresh-widgets' );

	/**
	 * Add support for core custom logo.
	 *
	 * @link https://codex.wordpress.org/Theme_Logo
	 */
	add_theme_support(
		'custom-logo',
		array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		)
	);
}
add_action( 'after_setup_theme', 'msstheme_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function msstheme_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'msstheme_content_width', 640 );
}
add_action( 'after_setup_theme', 'msstheme_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function msstheme_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'msstheme' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'msstheme' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);

	register_sidebar(
		array(
			/* translators: Widget area title */
			'name'          => __( 'WSContact', 'msstheme' ),
			'id'            => 'wscontact',
			'description'   => __( 'WS Contact widget area', 'msstheme' ),
			'before_widget' => '<aside id="%1$s" class="widget %2$s">',
			'after_widget'  => '</aside>',
			'before_title'  => '<h3 class="widget-title">',
			'after_title'   => '</h3>',
		)
	);

	/* register_sidebar(
		array(
			/* translators: Widget area title * /
			'name'          => __( 'Left Sidebar', 'msstheme' ),
			'id'            => 'left-sidebar',
			'description'   => __( 'Left sidebar widget area', 'msstheme' ),
			'before_widget' => '<aside id="%1$s" class="widget %2$s">',
			'after_widget'  => '</aside>',
			'before_title'  => '<h3 class="widget-title">',
			'after_title'   => '</h3>',
		)
	);

	register_sidebar(
		array(
			/* translators: Widget area title * /
			'name'          => __( 'Hero Slider', 'msstheme' ),
			'id'            => 'hero',
			'description'   => __( 'Hero slider area. Place two or more widgets here and they will slide!', 'msstheme' ),
			'before_widget' => '<div class="carousel-item">',
			'after_widget'  => '</div>',
			'before_title'  => '',
			'after_title'   => '',
		)
	);

	register_sidebar(
		array(
			/* translators: Widget area title * /
			'name'          => __( 'Hero Canvas', 'msstheme' ),
			'id'            => 'herocanvas',
			'description'   => __( 'Full size canvas hero area for Bootstrap and other custom HTML markup', 'msstheme' ),
			'before_widget' => '',
			'after_widget'  => '',
			'before_title'  => '',
			'after_title'   => '',
		)
	);

	register_sidebar(
		array(
			/* translators: Widget area title * /
			'name'          => __( 'Top Full', 'msstheme' ),
			'id'            => 'statichero',
			'description'   => __( 'Full top widget with dynamic grid', 'msstheme' ),
			'before_widget' => '<div id="%1$s" class="static-hero-widget %2$s dynamic-classes">',
			'after_widget'  => '</div><!-- .static-hero-widget -->',
			'before_title'  => '<h3 class="widget-title">',
			'after_title'   => '</h3>',
		)
	);

	register_sidebar(
		array(
			/* translators: Widget area title * /
			'name'          => __( 'Footer Full', 'msstheme' ),
			'id'            => 'footerfull',
			'description'   => __( 'Full sized footer widget with dynamic grid', 'msstheme' ),
			'before_widget' => '<div id="%1$s" class="footer-widget %2$s dynamic-classes">',
			'after_widget'  => '</div><!-- .footer-widget -->',
			'before_title'  => '<h3 class="widget-title">',
			'after_title'   => '</h3>',
		)
	); */
}
add_action( 'widgets_init', 'msstheme_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function msstheme_scripts() {
	wp_enqueue_style( 'msstheme-style', get_stylesheet_uri()							 		   			, array(), _S_VERSION );
	wp_enqueue_style( 'theme'		  , get_stylesheet_directory_uri() . '/css/theme.css'		   			, array(), _S_VERSION );
	wp_enqueue_style( 'fontawesome'	  , get_stylesheet_directory_uri() . '/css/fontawesome-all.css'			, array(), _S_VERSION );
	wp_enqueue_style( 'animate'		  , get_stylesheet_directory_uri() . '/vendor/animate.css'	   			, array(), _S_VERSION );
	wp_enqueue_style( 'hamburgers'	  , get_stylesheet_directory_uri() . '/vendor/hamburgers/hamburgers.css', array(), _S_VERSION );
	// wp_enqueue_style( 'fancybox'	  , get_stylesheet_directory_uri() . '/vendor/fancybox/jquery.fancybox.css', array(), _S_VERSION );
	wp_enqueue_style( 'icons'		  , get_stylesheet_directory_uri() . '/vendor/icon-hs/style.css'		, array(), _S_VERSION );
	wp_enqueue_style( 'fontawesome'	  , get_stylesheet_directory_uri() . '/css/fontawesome-all.css'			, array(), _S_VERSION );

	wp_style_add_data( 'msstheme-style', 'rtl', 'replace' );

	wp_enqueue_script( 'msstheme-navigation', get_template_directory_uri() . '/js/navigation.js'				 , array()		  , _S_VERSION, true );
	wp_enqueue_script( 'popper'				, get_template_directory_uri() . '/vendor/popper.js/index.js'		 , array('jquery'), _S_VERSION, true );
	wp_enqueue_script( 'bootstrap'			, get_template_directory_uri() . '/vendor/bootstrap/bootstrap.min.js', array('jquery'), _S_VERSION, true );
	// wp_enqueue_script( 'fancybox'			, get_template_directory_uri() . '/vendor/fancybox/jquery.fancybox.js', array()		  , _S_VERSION, true );
	wp_enqueue_script( 'appear'				, get_template_directory_uri() . '/vendor/appear.js'				 , array()		  , _S_VERSION, true );
	wp_enqueue_script( 'core'				, get_template_directory_uri() . '/js/hs.core.js'					 , array()		  , _S_VERSION, true );
	wp_enqueue_script( 'onscroll-animation'	, get_template_directory_uri() . '/js/hs.onscroll-animation.js'		 , array()		  , _S_VERSION, true );
	wp_enqueue_script( 'header'				, get_template_directory_uri() . '/js/hs.header.js'		 			 , array()		  , _S_VERSION, true );
	wp_enqueue_script( 'hamburgers'			, get_template_directory_uri() . '/js/hs.hamburgers.js'				 , array()		  , _S_VERSION, true );
	wp_enqueue_script( 'app'				, get_template_directory_uri() . '/js/app.js'					 	 , array()		  , _S_VERSION, true );
	
}
add_action( 'wp_enqueue_scripts', 'msstheme_scripts' );
//add_action( 'wp_enqueue_scripts', 'jquery' );
/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

/**
 * Add Image Sizes
 * When images are uploaded to Wordpress these custom crops are created as well.
 */
function add_image_sizes()
{
    /* add_image_size('small',      640, 9999, false);
    add_image_size('medium',     720, 9999, false);
    add_image_size('large',      960, 9999, false);
    add_image_size('16x9-small', 300, 169, true);
    add_image_size('16x9',       960, 540, true);
    add_image_size('square',     500, 500, true); */
	add_image_size('cover',     	160, 190, true);
	add_image_size('carousel',     	920, 390, true);
	add_image_size('brands',     	195, 94, true);
}

add_action('after_setup_theme', 'add_image_sizes');
/**
 * Add Shortcode
 * To be used in body text
 * [subscribe].
 */

add_shortcode( 'textBoxContent', 'text_box_content' );
function text_box_content( $atts, $content = "" ) {
	$atts = shortcode_atts( array(
		'column' => '',
		'class' => '',
		'link' => '',
	), $atts, 'textBoxContent' );
	//echo "<pre>";print_r($atts);echo "</pre>";
	return '<div class="col-md-4 '.$atts['column'].'">
				<div class="card bg-light">
					<div class="card-body '.$atts['class'].'">
						<p class="text-center">'.$content.'</p>
					</div>
				</div>
			</div>';
}


add_shortcode( 'titleBoxContent', 'title_box_content' );
function title_box_content( $atts, $content = "" ) {
	$atts = shortcode_atts( array(
		'class' => '',
		'link' => '',
		'target' => '',
	), $atts, 'titleBoxContent' );
	//echo "<pre>";print_r($atts);echo "</pre>";
	return '<div class="col-md-6">
				<a href="'.$atts['link'].'" target="'.$atts['target'].'" class="card bg-light g-my-10 g-my-0--md">
					<div class="card-body '.$atts['class'].'">
						<h5 class="card-title text-center mb-0 text-uppercase">'.$content.'</h5>
					</div>
				</a>
			</div>';
}

add_shortcode( 'addShareIcons', 'add_share_icons' );
function add_share_icons( $atts ) {
	$atts = shortcode_atts( array(
		'facebook' => '',
		'instagram' => '',
		'x' => '',
	), $atts, 'addShareIcons' );
	//echo "<pre>";print_r($atts);echo "</pre>";
	$facebooicon = '<span class="fa-stack fa-lg">
						<i class="fas fa-circle fa-stack-2x"></i>
						<i class="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
					</span>';
	$xicon =		'<span class="fa-stack fa-lg">
						<i class="fas fa-circle fa-stack-2x"></i>
						<i class="fab fa-stack-1x fa-inverse">
						<svg width="34" height="34" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg" style="border: 3px solid #35354a; border-radius: 50%;">;
						<path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="white"/>
						</svg></i>
					</span>';
	$instagramicon ='<span class="fa-stack fa-lg">
					<i class="fas fa-circle fa-stack-2x"></i>
					<i class="fab fa-instagram fa-stack-1x fa-inverse"></i>
				</span>';
	return '<ul class="u-list-inline">' .
			(($atts['facebook'] != '') ? '<li class="list-inline-item mr-0"><a href="'.$atts['facebook'].'" target="_blank">'.$facebooicon.'</a></li>' : '') .
			(($atts['x'] != '') ? '<li class="list-inline-item mr-0"><a href="'.$atts['x'].'" target="_blank">'.$xicon.'</a></li>' : '') .
			(($atts['instagram'] != '') ? '<li class="list-inline-item mr-0"><a href="'.$atts['instagram'].'" target="_blank">'.$instagramicon.'</a></li>' : '') .
			'
			</ul>';
}

/**
 * Custom walker class.
 */
class WPDocs_Walker_Nav_Menu extends Walker_Nav_Menu {

	/**
	 * Start the element output.
	 *
	 * Adds main/sub-classes to the list items and links.
	 *
	 * @param string $output Passed by reference. Used to append additional content.
	 * @param object $item   Menu item data object.
	 * @param int    $depth  Depth of menu item. Used for padding.
	 * @param array  $args   An array of arguments. @see wp_nav_menu()
	 * @param int    $id     Current item ID.
	 */
	function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {
		global $wp_query;
		$indent = ( $depth > 0 ? str_repeat( "\t", $depth ) : '' ); // code indent

		// Passed classes.
		$classes = empty( $item->classes ) ? array() : (array) $item->classes;
		// $class_names = esc_attr( implode( ' ', apply_filters( 'nav_menu_css_class', array_filter( $classes ), $item ) ) );
		$class_names = 'nav-item g-mx-10 g-mx-20--lg';
		if( in_array('current-menu-item', $classes) ){
			$class_names .= ' active g-brd-white';
		}

		// Build HTML.
		$output .= $indent . '<li id="nav-menu-item-'. $item->ID . '" class="' . $class_names . '">';

		// Link attributes.
		$attributes  = ! empty( $item->attr_title ) ? ' title="'  . esc_attr( $item->attr_title ) .'"' : '';
		$attributes .= ! empty( $item->target )     ? ' target="' . esc_attr( $item->target     ) .'"' : '';
		$attributes .= ! empty( $item->xfn )        ? ' rel="'    . esc_attr( $item->xfn        ) .'"' : '';
		$attributes .= ! empty( $item->url )        ? ' href="'   . esc_attr( $item->url        ) .'"' : '';
		$attributes .= in_array('current-menu-item', $classes) ? ' class="text-capitalize nav-link px-0 g-brd-white"' : ' class="text-capitalize nav-link px-0"';

		// Build HTML output and pass through the proper filter.
		$item_output = sprintf( '%1$s<a%2$s>%3$s%4$s%5$s</a>%6$s',
			$args->before,
			$attributes,
			$args->link_before,
			apply_filters( 'the_title', $item->title, $item->ID ),
			$args->link_after,
			$args->after
		);
		$output .= apply_filters( 'walker_nav_menu_start_el', $item_output, $item, $depth, $args );
	}
	
}

	// Creating the widget
	class wpb_widget extends WP_Widget {
		function __construct() {
			parent::__construct(
			// Base ID of your widget
				'wpb_widget',

				// Widget name will appear in UI
				__( 'WPBeginner Widget', 'textdomain' ),

				// Widget description
				[
					'description' => __( 'Sample widget based on WPBeginner Tutorial', 'textdomain' ),
				]
			);
		}

		// Creating widget front-end
		public function widget( $args, $instance ) {
			$title = apply_filters( 'widget_title', $instance['title'] );

			// before and after widget arguments are defined by themes
			echo $args['before_widget'];
			if ( ! empty( $title ) ) {
				echo $args['before_title'] . $title . $args['after_title'];
			}

			// This is where you run the code and display the output
			echo __( 'Hello, World!', 'textdomain' );
			echo $args['after_widget'];
		}

		// Widget Settings Form
		public function form( $instance ) {
			if ( isset( $instance['title'] ) ) {
				$title = $instance['title'];
			} else {
				$title = __( 'New title', 'textdomain' );
			}

			// Widget admin form
			?>
			<p>
				<label for="<?php echo $this->get_field_id( 'title' ); ?>">
					<?php _e( 'Title:', 'textdomain' ); ?>
				</label>
				<input
						class="widefat" id="<?php echo $this->get_field_id( 'title' ); ?>"
						name="<?php echo $this->get_field_name( 'title' ); ?>"
						type="text"
						value="<?php echo esc_attr( $title ); ?>"
				/>
			</p>
			<?php
		}

		// Updating widget replacing old instances with new
		public function update( $new_instance, $old_instance ) {
			$instance          = array();
			$instance['title'] = ( ! empty( $new_instance['title'] ) ) ? strip_tags( $new_instance['title'] ) : '';

			return $instance;
		}

		// Class wpb_widget ends here
	}

	// Register and load the widget
	function wpb_load_widget() {
		register_widget( 'wpb_widget' );
	}

	add_action( 'widgets_init', 'wpb_load_widget' );
	function hstngr_register_widget() {
		register_widget( 'hstngr_widget' );
	}
	add_action( 'widgets_init', 'hstngr_register_widget' );
	class hstngr_widget extends WP_Widget {
		function __construct() {
			parent::__construct(
				// widget ID
				'hstngr_widget',
				// widget name
				__('Hostinger Sample Widget', ' hstngr_widget_domain'),
				// widget description
				array( 'description' => __( 'Hostinger Widget Tutorial', 'hstngr_widget_domain' ), )
			);
		}
		public function widget( $args, $instance ) {
			$title = apply_filters( 'widget_title', $instance['title'] );
			echo $args['before_widget'];
			//if title is present
			if ( ! empty( $title ) )
				echo $args['before_title'] . $title . $args['after_title'];
			//output
			echo __( 'Greetings from Hostinger.com!', 'hstngr_widget_domain' );
			echo $args['after_widget'];
		}
		public function form( $instance ) {
			if ( isset( $instance[ 'title' ] ) )
				$title = $instance[ 'title' ];
			else
				$title = __( 'Default Title', 'hstngr_widget_domain' );
			?>
				<p>
				<label for="<?php echo $this->get_field_id( 'title' ); ?>"><?php _e( 'Title:' ); ?></label>
				<input class="widefat" id="<?php echo $this->get_field_id( 'title' ); ?>" name="<?php echo $this->get_field_name( 'title' ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>" />
				</p>
			<?php
		}
		public function update( $new_instance, $old_instance ) {
			$instance = array();
			$instance['title'] = ( ! empty( $new_instance['title'] ) ) ? strip_tags( $new_instance['title'] ) : '';
			return $instance;
		}
	}