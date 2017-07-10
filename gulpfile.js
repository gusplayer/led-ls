const gulp = require('gulp'),
	  sass = require('gulp-sass'),
	  autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', () => {
	gulp.src('./assets/css/main.sass')
		.pipe(sass())
		.pipe(gulp.dest('./assets/css'))
});