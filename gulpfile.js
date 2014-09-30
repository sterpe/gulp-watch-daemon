var gulp = require('gulp')
, Daemon = require('./index')
;

Daemon([],'index.js', ['copy']);

gulp.task('copy', function () {
	var rand = Math.random() * 2;
	rand = Math.floor(rand);
	if (rand < 1) {
		throw new Error();
	}
	return gulp.src('./index.js')
	.pipe(gulp.dest('./dist'));
});
gulp.task('default', ['watch']);
