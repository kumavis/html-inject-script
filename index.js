var hyperstream = require('hyperstream')

// this is to avoid the pitfalls of having
// a script closetag in js inlined in html
var SCRIPT = 'script'
var SCRIPT_START = '<'+SCRIPT
var SCRIPT_END = '</'+SCRIPT+'>'

module.exports = transformHtml

function transformHtml(externalTags, opts){
  opts = opts || {}
  opts.selector = typeof opts.selector === 'undefined' ? 'head' : opts.selector
  var args = {}
  var op = {}

  op[opts.append ? '_appendHtml' : '_prependHtml'] = externalTags.map(function(tag){
    return SCRIPT_START+' src="'+tag+'">'+SCRIPT_END;
  }).join('')

  args[opts.selector] = op

  return hyperstream(args);
}

