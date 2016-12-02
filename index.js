var editorconfig
try {
    editorconfig = require('editorconfig-jxa')
} catch (e) {
    editorconfig = Library('editorconfig-jxa')
}

var app = new Application('CotEditor')
var doc = app.documents[0]
var file = doc.file()
if (file) {
  var config = editorconfig.parseSync(file.toString())

  if ('indent_style' in config) {
    if (config.indent_style === 'tab') {
      doc.expandsTab = false
    } else if (config.indent_style === 'space') {
      doc.expandsTab = true
    }
  }

  if ('indent_size' in config) {
    // TODO: No way to implement
  }

  if ('tab_width' in config) {
    doc.tabWidth = config.indent_size
  }

  if ('end_of_line' in config) {
    doc.lineEnding = config.end_of_line.toUpperCase()
  }

  if ('charset' in config) {
    // TODO: No way to implement
  }

  if ('trim_trailing_whitespace' in config) {
    // TODO: No way to implement
  }

  if ('insert_final_newline' in config) {
    // TODO: No way to implement
  }
}
