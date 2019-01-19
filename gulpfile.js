var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', () => {
  gulp.src('sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
});

gulp.task('watch', () => {
    gulp.watch('sass/*.scss', ['sass']);
});
