#!/usr/bin/env node

var htmlInject = require('./')
var fs = require('fs')

// omit the first 2 arguments ('node', 'path')
argv = require('minimist')(process.argv.slice(2), {
  alias: {
    body: 'b',
    append: 'a',
    selector: 's',
    help: 'h'
  },
  default: {
    body: false,
    append: false,
    help: false
  },
  boolean: ['h', 'a', 'b']
})

// no args - fail
if (!argv._.length) {
	console.log('No input arguments specified...')
  printUsage()
	process.exit(1)
// help
} else if (argv.help) {
	printUsage()
// stdin -> transform -> stdout
} else {
  process.stdin
  .pipe(htmlInject(argv._, {
    selector: argv.selector || (argv.body ? 'body' : 'head'),
    append: argv.append
  }))
  .pipe(process.stdout)
}

function printUsage() {
  console.log(fs.readFileSync(__dirname + '/usage.txt', 'utf8'));
}
