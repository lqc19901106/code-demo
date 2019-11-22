var gulp = require("gulp");
var connect = require('gulp-connect');

gulp.task('connect', function(){
    connect.server({});
})

gulp.task("default", function() {
  console.log("test default");
});