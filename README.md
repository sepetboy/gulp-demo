# gulp-demo，记录学习gulp过程遇到的问题
## 参考文章
``` bash
https://w3ctrain.com/2015/12/22/gulp-for-beginners/?utm_source=tuicool&utm_medium=referral
``` 
``` bash
安装4.0.0版本
# npm install --save-dev gulp@4.0.0
```
## 用到的依赖包
``` bash
gulp
gulp-sass：将sass文件编译为css文件
browser-sync：在服务器上进行实时样式注入
gulp-concat：拼接js、css文件
gulp-uglify：压缩js文件
gulp-clean-css：压缩css文件
gulp-imagemin：压缩图片
gulp-cache：压缩图片可能会占用较长时间，使用 gulp-cache 插件可以减少重复压缩
del：清理生成文件
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
Gulp3，如果有一个任务A，B和C的列表，你想在一个序列中运行（确保A在B开始之前完成，而B在C开始之前完成），代码如下：
gulp.task('a', function () {
  // Do something.
});
gulp.task('b', ['a'], function () {
  // Do some stuff.
});
gulp.task('c', ['b'], function () {
    // Do some more stuff.
});
在Gulp4中会报错：AssertionError: Task function must be specified
使用gulp.series和gulp.parallel，因为gulp任务现在只有两个参数。
  //gulp.series：按照顺序执行
  //gulp.paralle：可以并行计算
  gulp.task('my-tasks', gulp.series('a', 'b', 'c', function() {
  // Do something after a, b, and c are finished.
  }));
  gulp.task('build', gulp.parallel('styles', 'scripts', 'images', function () {
  // Build the website.
  }));
  或者
  gulp.task('my-tasks', gulp.series('a', gulp.parallel('styles','scripts', 'images'), 'b', 'c', function() {
  // Do something after a, b, and c are finished.
  }));
  相关任务必须在被调用之前发生。
```
## browser-sync
``` bash
  ##当你想在你的开发服务器上进行实时风格注入时
  在gulp3中，可以顺序运行
  gulp.task('watch', ['browserSync', 'sass'], function (){
    gulp.watch('app/scss/**/*.scss', ['sass']);
    // Other watchers
  })
  在gulp4中，你的watch和browserSync任务需要并行运行，而不是顺序，就像这样
  gulp.task('serve', gulp.series('sass', gulp.parallel('browserSync', 'watch')));
``` 
## 优化CSS、JS、图片文件
``` bash
 说到优化的时候，我们需要想到：压缩，拼接。也就是减少体积和HTTP次数。
 使用gulp-concat拼接js、css文件（需要指定文件名），gulp-uglify压缩js文件，gulp-clean-css压缩css文件
``` 
