<?php
/**
 * Displays the site header.
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

$wrapper_classes  = 'site-header';
$wrapper_classes .= has_custom_logo() ? ' has-logo' : '';
$wrapper_classes .= ( true === get_theme_mod( 'display_title_and_tagline', true ) ) ? ' has-title-and-tagline' : '';
$wrapper_classes .= has_nav_menu( 'primary' ) ? ' has-menu' : '';
$home_url = esc_url( pll_home_url() );
?>


<div class="header-topbar"></div>
<header id="masthead" class="header <?php echo esc_attr( $wrapper_classes ); ?>">
        <div class="header__desktop">
			<div class="header__desktop-container">
                
				<div class="header__desktop-container-fixed">
					<div class="header__desktop-container-fixed-left">
						<span class="logo"><a href="<?php echo $home_url; ?>"></a></span>
						<span class="close js-close-menu">
							<img src="https://www.portfoliodaniel.es/wp-content/uploads/2024/08/icon-close.svg" alt="">
						</span>
					</div>
					<div class="header__desktop-container-fixed-right">
						<?php get_template_part( 'template-parts/header/site-nav' ); ?>
					</div>
				</div>
			</div>
        </div>

        <div class="header__mobile">
            <div class="header__mobile-container">
                <div class="header__mobile-container-left">
                    <span class="icon-menu js-open-menu">
                        <!-- icon menu -->
                    </span>
                </div>
                <div class="header__mobile-container-center">
                    <span class="mobile-logo">
                        <a href="<?php echo $home_url; ?>"></a>
                    </span>
                </div>
                <div class="header__mobile-container-right">
					
                </div>
            </div>
        </div>
        <div class="backdrop"></div>
        
</header>