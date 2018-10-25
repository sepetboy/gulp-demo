# gulp-demo，记录学习过程遇到的问题
## 参考文章
``` bash
https://w3ctrain.com/2015/12/22/gulp-for-beginners/?utm_source=tuicool&utm_medium=referral
``` 
## 遇到问题
``` bash
#npm install gulp --save-dev出现版本升级问题
```
<img src="https://github.com/sepetboy/gulp-demo/blob/master/images/update.png"/>

``` bash
安装4.0.0版本
# npm install --save-dev gulp@4.0.0
```
## scss 文件编译成css文件
``` bash
//开启一个任务
gulp.task('sass', function(){
  return gulp.src('app/scss/styles.scss')  //输入
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/css'))  //输出
});
#使用通配符，匹配当前目录及其子目录下的所有scss文件。
gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
})
```
## git add .出现警告
``` bash
 #解决方法：git config --global core.autocrlf  false
``` 
