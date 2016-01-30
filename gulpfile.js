
var gp = require('gulp-load-plugins')(),
	gulp = require('gulp')

gulp.task('sass', function() {
	return gulp.src('./scss/styles.scss')
	.pipe(gp.plumber({errorHandler: gp.notify.onError('Error: <%= error.message %>')}))
	.pipe(gp.sass({
		errLogToConsole: true
	}))
	.pipe(gp.autoprefixer())
	.pipe(gulp.dest('./public/css'))
})

gulp.task('default', function(callback) {

	watching = true
	gulp.watch("./scss/**/*.scss", ['sass'])
	gulp.watch('./fonts/**/*', ['fonts'])
	gulp.watch('./img/**/*', ['images'])
})
