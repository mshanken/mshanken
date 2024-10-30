<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package MSSTheme
 */

?>
	
	<footer id="footer" role="footer" class="g-brd-top g-brd-primary">
		<div class="container g-py-40">
			<div class="row">
				<div class="col-12">
					<?php get_sidebar(); ?>
					<p class="text-center small">&copy; <?php echo date("Y"); ?> M. Shanken Communications, Inc.</p>
				</div>
			</div>
		</div>
	</footer>

	<?php wp_footer(); ?>

</body>
</html>
