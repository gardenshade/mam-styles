// YOUR CUSTOM SETTINGS
var YOUR_DIR = '.';
var SCRIPT_GM = YOUR_DIR+'/Custom_Styles_for_MAM';

// REQUIRED
var gulp    = require( 'gulp' );
var gutil   = require( 'gulp-util' );
var coffee  = require( 'gulp-coffee' );
var compass = require( 'gulp-compass' );
var concat  = require( 'gulp-concat' );
var gif     = require( 'gulp-if' );
var uglify  = require( 'gulp-uglify' );

// VARIABLES
var env, name, sassStyle,
    coffeeIn, jsIn, sassIn,
    coffeeOut, outputDir;

// Set environment
env = process.env.NODE_ENV || 'dev';
console.log( 'ENV='+env );

// Define source files
coffeeIn = ['src/*.coffee'];
jsIn     = ['src/scripts/*.js'];
sassSrc  = ['src/*.sass'];

// Define destination files
coffeeOut = 'src/scripts';
if ( env=='dev' ) {
    outputDir = 'build/dev';
    sassStyle = 'expanded';
}else{
    outputDir = 'build/compiled';
    sassStyle = 'compressed';
}

/*=== COFFEE ===*/
gulp.task( 'coffee', function(){
    gulp.src( coffeeIn )
        .pipe( coffee({ bare: true }) )
            .on( 'error', gutil.log )
        .pipe( gulp.dest( coffeeOut ) );
} );

/*=== JAVASCRIPT ===*/
gulp.task('js', function(){
    gulp.src( jsIn )
        .pipe( concat('Custom_Styles_for_MAM.user.js') )
        .pipe( gif(
            env==='build',
            uglify({ preserveComments: 'license' })
        ) )
        .pipe( gulp.dest( outputDir+'/js' ) )
        .pipe( gulp.dest( SCRIPT_GM ) );
});
/*=== SASS / COMPASS ===*/
gulp.task('sass', function(){
    gulp.src( sassSrc )
        .pipe( compass({
            sass: 'src',
            css: outputDir+'/css',
            image: outputDir+'/img',
            style: sassStyle
        }) )
        .on( 'error', gutil.log )
        .pipe( gulp.dest (outputDir+'/css' ) )
        .pipe( gulp.dest( SCRIPT_GM+'/local' ) );
});
/*=== WATCH ===*/
gulp.task('watch', function(){
    gulp.watch( coffeeIn,['coffee'] );
    gulp.watch( jsIn,['js'] );
    gulp.watch( sassIn,['sass'] );
});
/*=== DEFAULT ===*/
gulp.task( 'default', ['coffee','js','sass','watch'] );
