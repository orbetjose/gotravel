<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'myIvU:yedy@@H:nU-GDzv}T^DPL[s# H64vBf1_&)u1hucl@E66cWJQWMO{zs#?3' );
define( 'SECURE_AUTH_KEY',   'Gs8br*{H@qM}n|0$sz1Lyj0Vx*iec<YG7_sxkxnS`COfjl;3SiXPGGap>e}aRw60' );
define( 'LOGGED_IN_KEY',     'C}`*KA9$2+a1Himy}<gfv;/3P|<{lg1Tk+@Aa3Pb,GRrresGPs@?6;aqt{>`w$x~' );
define( 'NONCE_KEY',         '[Tg0IX(ZtGphj@JD^7<Jl(G5|jK[D)YKZ8hdCOOe66o=#Z?TX4IxtgBOEp i)em_' );
define( 'AUTH_SALT',         '}8X,aTg0_Ak`qhq$3`xnKvQ-s?<8<<&2m#X7!C4AnK1hk:]R)HBH)hUQ3Ti3p}gi' );
define( 'SECURE_AUTH_SALT',  '?G*OgZ0d_#yS(*Jj)fF::cjetsZ<LYh3)]IUf_Dvrudb[Ou,JlJVp0tHJ1zBv+=<' );
define( 'LOGGED_IN_SALT',    'hRE9>kJG[vIfn1Y$OH^iTQo+N7dNMLR9fDhxn7N/py1*]~r35/V`K81f{f=vHK<*' );
define( 'NONCE_SALT',        '>`Ni[s70I?Mvry+<3WRm^0YERrjrm7fc~sLUsgzezI`#1eNgbR!+RiiF!x2V=gLK' );
define( 'WP_CACHE_KEY_SALT', 'A5/<f&n)GN1e$@yRe-BwGT]!0pUX&8fq:kbDz=o@f?#[a,nB=G,!I/R~-:b^~^Fr' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define('WP_DEBUG', false); 
define('WP_DEBUG_LOG', false); 
define('WP_DEBUG_DISPLAY', false); 





define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
