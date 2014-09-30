var Daemon
, gulp = require('gulp')
, child_process = require('child_process')
, _ = require('lodash')
;

Daemon = function (deps, files, tasks, name) {
	var daemon
	;
	name = name || 'watch';
	daemon = name + '-daemon';
	deps = _.isArray(deps) ? deps : [deps];
	files = _.isArray(files) ? files: [files];

	gulp.task(name, deps, function Watch() {
		var spawn = child_process.spawn
		, child
		;
		
		child = spawn('gulp', [daemon], {
			stdio: "inherit"
		});

		child.on('close', function (err) {
			console.log('gulp ' + name + ' exited with code `' +
				err + '`\n');
			console.log('daemon will restart "' + name + '" in ' +
				'(1) second.');
			setTimeout(function () {
				console.log('\n\n');
				Watch();
			}, 1000);
		});
	});

	gulp.task(daemon, function () {
		gulp.watch(files, { debounceDelay: 2000}, tasks)
			.on('change', function (e) {
				console.log('\n"' + e.path + '" was ' +
					e.type + ', running tasks...\n');
			});
	});
};
module.exports = Daemon;
