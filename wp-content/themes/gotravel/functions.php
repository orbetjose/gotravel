<?php


add_filter('rest_prepare_page', function ($response, $post, $request) {
    $acf_fields = get_fields($post->ID);
    if ($acf_fields) {
        $response->data['acf'] = $acf_fields;
    }
    return $response;
}, 10, 3);


// Return formatted navbar menu
function top_nav_menu() {
    $menu = wp_get_nav_menu_items('navbar');
    $result = [];
    foreach($menu as $item) {
        $my_item = [
            'name' => $item->title,
            'permalink' => $item->url
        ];
        $result[] = $my_item;
    }
    return $result;
}
// add endpoint
add_action( 'rest_api_init', function() {
    // navbar menu
    register_rest_route( 'wp/v2', 'navbar', array(
        'methods' => 'GET',
        'callback' => 'top_nav_menu',
    ) );
});

function disable_wp_frontend() {
    if(is_admin() || strpos($_SERVER['REQUEST_URI'], '/wp-json/') === 0) {
        return;
    }

    wp_redirect('http://localhost:5173/', 301);
    exit;
}

add_action('template_redirect', 'disable_wp_frontend');

function disable_gutenberg_editor() {
    add_filter('use_block_editor_for_post', '__return_false', 10);
    
    add_filter('use_block_editor_for_post_type', '__return_false', 10);
    
    remove_theme_support('core-block-patterns');
    
    add_action('wp_enqueue_scripts', function() {
        wp_dequeue_style('wp-block-library');
        wp_dequeue_style('wp-block-library-theme');
        wp_dequeue_style('wc-block-style');
    }, 100);
}
add_action('init', 'disable_gutenberg_editor');


function my_theme_styles() {
    wp_enqueue_style(
        'my-theme-main-styles', 
        get_stylesheet_directory_uri() . '/src/css/index.css', 
        array(), 
        filemtime(get_stylesheet_directory() . '/src/css/index.css')
    );

}
add_action('wp_enqueue_scripts', 'my_theme_styles');

function my_theme_scripts() {


    wp_enqueue_script(
      'animations-scripts', 
      get_template_directory_uri() . '/src/js/index.js', 
      array('jquery'), // Dependecy
      filemtime(get_template_directory() . '/src/js/index.js'), 
      true
    );
  wp_script_add_data( 'animations-scripts', 'type', 'module' );
  }
  add_action('wp_enqueue_scripts', 'my_theme_scripts');

  add_filter( 'show_admin_bar', '__return_false' );

  add_filter('acf/format_value/type=textarea', 'do_shortcode');
  add_filter('acf/format_value/type=text', 'do_shortcode');
  
  add_filter( 'admin_email_check_interval', '__return_false' );

  function menu_link_classes($atts, $item, $args) {
	if(isset($args->link_class)) {
	  $atts['class'] = $args->link_class;
	}
	return $atts;
  }
  add_filter('nav_menu_link_attributes', 'menu_link_classes', 1, 3);

  function menu_item_classes($classes, $item, $args) {
	if(isset($args->item_class)) {
	  $classes[] = $args->item_class;
	}
	return $classes;
  }
  add_filter('nav_menu_css_class', 'menu_item_classes', 1, 3);

  /**
 * Register menus
 */
function custom_navigation_menus() {
	$locations = array(
	  'main_menu' => __( 'Main Menu', 'Menu personalizado' ),
	  'mobile_menu' => __( 'Mobile Menu', 'Menu personalizado' ),
	);
	register_nav_menus( $locations );
  }
  add_action('init', 'custom_navigation_menus');


  // Agregar soporte para SVG en WordPress
function enable_svg_upload($mimes) {
    $mimes['svg'] = 'image/svg+xml';
    $mimes['svgz'] = 'image/svg+xml';
    return $mimes;
}
add_filter('upload_mimes', 'enable_svg_upload');

// Corregir el tipo MIME para SVG
function fix_svg_mime_type($data, $file, $filename, $mimes) {
    $filetype = wp_check_filetype($filename, $mimes);
    
    return [
        'ext'             => $filetype['ext'],
        'type'           => $filetype['type'],
        'proper_filename' => $filename
    ];
}
add_filter('wp_check_filetype_and_ext', 'fix_svg_mime_type', 10, 4);

// Función para sanitizar SVG
function sanitize_svg($file) {
    // Asegurarse de que es un SVG
    if ($file['type'] === 'image/svg+xml') {
        // Leer el archivo
        $content = file_get_contents($file['tmp_name']);
        
        // Sanitización básica
        $content = preg_replace('#<script(.*?)>(.*?)</script>#is', '', $content);
        $content = preg_replace('#<onclick(.*?)>(.*?)</onclick>#is', '', $content);
        $content = preg_replace('#<onload(.*?)>(.*?)</onload>#is', '', $content);
        $content = preg_replace('/javascript:|onclick=|onload=|onerror=/i', '', $content);
        
        // Reescribir el archivo
        file_put_contents($file['tmp_name'], $content);
    }
    
    return $file;
}
add_filter('wp_handle_upload_prefilter', 'sanitize_svg');

// Mostrar vista previa de SVG en la biblioteca de medios
function show_svg_preview() {
    ?>
    <style type="text/css">
        .attachment-info .svg img {
            width: 100%;
            height: auto;
            max-width: 400px;
        }
        .media-frame .attachment .centered img.svg {
            width: 100%;
            height: auto;
            max-width: 100%;
        }
    </style>
    <script type="text/javascript">
        jQuery(document).ready(function($) {
            if ( typeof wp !== 'undefined' && wp.media && wp.media.view.Attachment.Library ) {
                wp.media.view.Attachment.Library.prototype.updateSvg = function() {
                    if ( this.model.get('sizes') ) {
                        return;
                    }
                    
                    const type = this.model.get('type');
                    if ( type === 'image' && this.model.get('filename').match(/\.svg$/i) ) {
                        this.model.set('sizes', {
                            full: {
                                url: this.model.get('url')
                            }
                        });
                    }
                };
                
                const originalToggle = wp.media.view.Attachment.Library.prototype.toggleSelectionHandler;
                wp.media.view.Attachment.Library.prototype.toggleSelectionHandler = function() {
                    this.updateSvg();
                    originalToggle.apply(this, arguments);
                };
            }
        });
    </script>
    <?php
}
add_action('admin_footer', 'show_svg_preview');

// Permitir vista previa de SVG en el frontend
function fix_svg_size_attributes($image, $attachment_id, $size, $icon) {
    if (is_array($image) && preg_match('/\.svg$/i', $image[0]) && $image[1] <= 1) {
        if (is_array($size)) {
            $image[1] = $size[0];
            $image[2] = $size[1];
        } elseif (($xml = simplexml_load_file($image[0])) !== false) {
            $attr = $xml->attributes();
            $viewbox = explode(' ', $attr->viewBox);
            $image[1] = isset($attr->width) && preg_match('/\d+/', $attr->width, $value) ? (int) $value[0] : (count($viewbox) == 4 ? (int) $viewbox[2] : null);
            $image[2] = isset($attr->height) && preg_match('/\d+/', $attr->height, $value) ? (int) $value[0] : (count($viewbox) == 4 ? (int) $viewbox[3] : null);
        }
    }
    return $image;
}
add_filter('wp_get_attachment_image_src', 'fix_svg_size_attributes', 10, 4);