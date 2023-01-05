<?php
//Begin Really Simple SSL session cookie settings
@ini_set('session.cookie_httponly', true);
@ini_set('session.cookie_secure', true);
@ini_set('session.use_only_cookies', true);
//END Really Simple SSL

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
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'festiv22_v4ld3lk350z0zz' );

/** Database username */
define( 'DB_USER', 'festiv22_4dm1nke503xp0' );

/** Database password */
define( 'DB_PASSWORD', '^I%U7MsTQfPUg.qsCu' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );
define('ALLOW_UNFILTERED_UPLOADS', true);
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
define( 'AUTH_KEY',         'I)=FsJ:`7)Nw{2D1%86K/*lw]6[X+L`5=Sur]u7HuMywC>S)[ngJ0^,5baK]EiIW' );
define( 'SECURE_AUTH_KEY',  '$e-I!1UUV;h`lrbe.LW$KzKok}On7!5*x>SY#T%LtlyY;kw?Qmc?gD,M1>n.P[pC' );
define( 'LOGGED_IN_KEY',    '^_VV>Gm/&6KBf9WHI|{To+XCY!UglY=&C8gF)tb~|T2sZ`M^(PH5RK:+k`7s`Zm%' );
define( 'NONCE_KEY',        'e#5R$I2>m,mvq=A@C0!>c}JROk1Hy&Mez:yA,*hpJz2V_><Ida5ANlQ)[C,vd%[$' );
define( 'AUTH_SALT',        'RlVaOQ*;jfa7cEQkWb[H)Dd+V|mbFZg3|_QPt|nZ^cC %@Iw,S=XGa:ox-6S&>*{' );
define( 'SECURE_AUTH_SALT', ']JJ:a+I-nRg>bp[5Klb!7(qh1/Q=D}*ejfbt6_i^-?q)D,`VVPT]Zuo>ghv;;~<&' );
define( 'LOGGED_IN_SALT',   'bV(yl*j~Y6N9bgW^q{a5P6{8PG5=xA(G2>p%N&]kc&Uos]lIUv@G;1uv%#%kD7i1' );
define( 'NONCE_SALT',       'GaY_OO-m^(|D4sTIz%gS_P,35?_>j9f2IkT]Z4W%y4?tF>n qz9waV0hdLr yrmz' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'fdq2_';

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
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
