var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync");
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cleanCss = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');

gulp.task("hello", function() {
  console.log("HelloWord");
})

gulp.task('browserSync', function () {
  browserSync({
    server: {
      baseDir: "app"
    }
  })
})

gulp.task('sass', function () {
  return gulp.src("app/scss/**/*.scss")
          .pipe(sass()) // Converts Sass to CSS with gulp-sass
          .pipe(gulp.dest("app/css"))
          .pipe(browserSync.reload({
            stream: true
          }))
})

gulp.task("concatJs", function () {
  return gulp.src("app/js/**/*.js")
          .pipe(uglify())
          .pipe(concat("main.js"))
          .pipe(gulp.dest("dist/js"))
})

gulp.task("concatCss", function () {
  return gulp.src("app/scss/**/*.scss")
          .pipe(sass())
          .pipe(cleanCss())
          .pipe(concat("sytle.css"))
          .pipe(gulp.dest("dist/css"))
})

gulp.task('imagemin', function () {
  return gulp.src("app/images/**/*.+(png|jpg|gif|svg)")
          .pipe(cache(imagemin({
            interlaced: true
          })))
          .pipe(gulp.dest("dist/images"))
})

gulp.task("watch", function () {
  gulp.watch("app/scss/**/*.scss", gulp.series('sass'))
  gulp.watch("app/*.html", browserSync.reload)
  gulp.watch("app/js/**/*.js", browserSync.reload)
})

gulp.task('serve', gulp.series('sass', gulp.parallel('browserSync', 'watch')))

gulp.task('clean', function (callback) {
  del(['dist/**/*', '!dist/images', '!dist/images/**/*']);
  return cache.clearAll(callback);
})

gulp.task('build', gulp.series('clean', gulp.parallel('concatCss', 'concatJs', 'imagemin'), function() {
  console.log('Buliding Files')
}))

gulp.task('default', gulp.parallel('build', 'serve'))

