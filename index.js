var editorconfig = require('editorconfig-jxa')
var app = new Application('CotEditor')
var doc = app.documents[0]
var file = doc.file()
if (file) {
  var config = editorconfig.parseSync(file.toString())
  // config.indent_style
  // config.indent_size
  if (config.tab_width) doc.tabWidth = config.indent_size
  if (config.end_of_line) doc.lineEnding = config.end_of_line.toUpperCase()
  // config.charset
  // config.trim_trailing_whitespace
  // config.insert_final_newline
}
