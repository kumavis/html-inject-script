#!/usr/bin/env node

var htmlInject = require('./');

// omit the first 2 arguments ('node', 'path')
argv = process.argv.slice(2);

if (!argv) {
	console.log("No input arguments specified");
	process.exit(1);

} else if (argv.length == 1 && argv[0] == "-h") {
	console.log("usage: cat index.html | htmlinjectscript 'app.js' > output.html");
	process.exit(0);
}

process.stdin
.pipe(htmlInject(argv))
.pipe(process.stdout);
