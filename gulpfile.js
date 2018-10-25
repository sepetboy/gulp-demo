// var gulp = require("gulp");
// gulp.task("hello", function() {
//   console.log("HelloWord");
// })
var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task('sass', function () {
  return gulp.src("app/scss/**/*.scss")
          .pipe(sass()) // Converts Sass to CSS with gulp-sass
          .pipe(gulp.dest("app/css"))
})