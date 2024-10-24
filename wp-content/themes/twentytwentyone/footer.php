<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

?>
			</main><!-- #main -->
		</div><!-- #primary -->
	</div><!-- #content -->

	<?php //get_template_part( 'template-parts/footer/footer-widgets' ); ?>

	<footer id="colophon" class="site-footer u-p-0">

		

		<div class="container">
			<div class="row u-px-contain">
				<div class="col">
					<div class="footer">
						<div class="footer__left">
							<img src="https://www.codigobeta.es/wp-content/uploads/2024/09/logo-codigobeta-black.png" alt="" width="248">
						</div>
						<div class="footer__right">
							<!-- footer secundario -->
							<?php if ( has_nav_menu( 'footer' ) ) : ?>
								<nav aria-label="<?php esc_attr_e( 'Secondary menu', 'twentytwentyone' ); ?>" class="footer-secondary footer-navigation">
									<ul class="footer-navigation-wrapper">
										<?php
										wp_nav_menu(
											array(
												'theme_location' => 'footer',
												'items_wrap'     => '%3$s',
												'container'      => false,
												'depth'          => 1,
												'link_before'    => '<span>',
												'link_after'     => '</span>',
												'fallback_cb'    => false,
											)
										);
										?>
									</ul><!-- .footer-navigation-wrapper -->
								</nav><!-- .footer-navigation -->
							<?php endif; ?>
							<!-- /footer secundario -->
						</div>
					</div>
				</div>
			</div>
		</div> 
		
	</footer><!-- #colophon -->
	
	<!-- contact test -->
	<a id="whatsappLink" target="_blank" class="whatsapp">
		<img src="https://www.codigobeta.es/wp-content/uploads/2024/09/whatsapp-svgrepo-com.svg" alt="Conatcto por Whatsapp">
	</a>

	<a href="/contacto" class="icn-contact client">
		<img src="https://www.codigobeta.es/wp-content/uploads/2024/09/icon-email-fill-white.svg" alt="Conatcto por Whatsapp">
	</a>
	<a href="/agencias/contacto/" class="icn-contact agency">
		<img src="https://www.codigobeta.es/wp-content/uploads/2024/09/icon-email-fill-white.svg" alt="Conatcto por Whatsapp">
	</a>

	<!----- JQUERY LIBS ----->
	<!-- jquery 3.6.0 -->
	<!-- Scripts -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js" ></script>
<script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js" defer></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.lazyload/1.9.1/jquery.lazyload.js" defer></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js" defer></script>
<script src="https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.js" defer></script>
<script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.js" defer></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js" defer></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js" defer></script>

	
</div><!-- #page -->



<?php wp_footer(); ?>

</body>
</html>
