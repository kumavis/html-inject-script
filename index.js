var Trumpet = require('trumpet')

var SCRIPT = 'script'
var SCRIPT_START = '<'+SCRIPT
var SCRIPT_END = '</'+SCRIPT+'>'

module.exports = function(externalTags){

  var trumpet = Trumpet()

  trumpet.selectAll('head', function (node) {
    var readStream = node.createReadStream()
    var writeStream = node.createWriteStream()
    // insert external tags
    externalTags.forEach(function(tag){
      writeStream.write(SCRIPT_START+' href="'+tag+'">'+SCRIPT_END)
    })
    // append original content of head
    readStream.pipe(writeStream)
  })

  return trumpet

}

