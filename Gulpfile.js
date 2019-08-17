const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

gulp.task('default', () => {
  return gulp.src('src/index.js')
    .pipe(babel({presets: ['@babel/preset-env']}))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
});
