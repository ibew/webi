var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

gulp.task('sass', function () {
    return gulp.src('../src/styles/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(rename('webi.css'))
        .pipe(gulp.dest('../dist/styles'));
});

gulp.task('default', ['sass']);