var hyperstream = require('hyperstream')

// this is to avoid the pitfalls of having
// a script closetag in js inlined in html
var SCRIPT = 'script'
var SCRIPT_START = '<'+SCRIPT
var SCRIPT_END = '</'+SCRIPT+'>'

module.exports = transformHtml


function transformHtml(externalTags, selector){
  var args = {};
  args[selector || 'head'] = {
    _appendHtml: externalTags.map(function(tag){
      return SCRIPT_START+' src="'+tag+'">'+SCRIPT_END;
    }).join('')
  }
  return hyperstream(args);

}

