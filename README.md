gulp-watch-daemon
=================

A simple daemon to automatically restart gulp watch tasks when they error.


````javascript
var Daemon = require('gulp-watch-daemon')
;

Daemon([deps], [files], [tasks], name*);

//*defaults to 'watch'
````
