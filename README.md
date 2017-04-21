# html-inject-script

Transform stream for injecting script tags into html.

### example:

```js
var injectScripts = require('html-inject-script')

process.stdin
.pipe( injectScripts(['./app.js', './extra.js']) )
.pipe( process.stdout )
```

input:
```html
<html><head></head><body>hello</body></html>
```
output:
```html
<html><head><script src="./app.js"></script><script src="./extra.js"></script></head><body>hello</body></html>
```

### api

#### `require('html-inject-script')(scripts[, opts])`

Injects an array of scripts. Accepts an object of options:
- `selector` (`string`, default: `'head'`): A [hyperstream](https://github.com/substack/hyperstream) selector into which the tags are injected
- `prepend` (`boolean`, default: `true`): If true, prepends. If false, appends.

### cli

```bash
cat index.html | htmlinjectscript "app.js" > output.html
```

```
usage: cat index.html | htmlinjectscript "app.js" > output.html

Options:

      --body  -b,  inject into the body element (default: head)

   --selector -s,  override head or body with a specific selector

     --append -a,  append to selector instead (default: prepend)

          --help,  -h  display this message
```

### Gotcha:
requires the tag (head, body, or otherwise) to be present in the src.
