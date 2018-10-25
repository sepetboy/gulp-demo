# gulp-demo，记录学习过程遇到的问题
## 参考文章
``` bash
https://w3ctrain.com/2015/12/22/gulp-for-beginners/?utm_source=tuicool&utm_medium=referral
``` 
``` bash
安装4.0.0版本
# npm install --save-dev gulp@4.0.0
```
## scss文件编译成css文件
``` bash
//开启一个任务
gulp.task('sass', function(){
  return gulp.src('app/scss/styles.scss')  //输入
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/css'))  //输出
});
//使用通配符，匹配当前目录及其子目录下的所有scss文件。
gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
})
```
## gulp.watch
``` bash
gulp.task("watch", function () {
  //gulp.watch("app/scss/**/*.scss", ['sass']) , gulp4.0.0版本watch task必须传入一个方法,因此报错，使用下面的方式
  gulp.watch("app/scss/**/*.scss", gulp.series('sass'))
})
```
## git add .出现警告
``` bash
 #解决方法：git config --global core.autocrlf  false
``` 
