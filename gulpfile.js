var gulp = require("gulp");
var util = require("gulp-util");
var log = util.log;
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var minifycss = require("gulp-minify-css");
var rename = require("gulp-rename");

gulp.task('styling', function() {
        log("Generate CSS files " + (new Date()).toString());
    return gulp.src('./sass/takeoff.scss')
        .pipe(sass({style: 'expanded'}))
            .pipe(autoprefixer())
            .pipe(gulp.dest('./css'))
        .pipe(sass({style: 'compressed'}))
            .pipe(rename({suffix: '.min'}))
            .pipe(minifycss())
            .pipe(gulp.dest('./css'));
});

gulp.task('watch', [ 'styling' ], function() {
        log("Watching SCSS files for modifications");
    return gulp.watch('sass/*.scss', [ 'styling' ]);
});

gulp.task('default', [ 'styling', 'watch' ]);