#!/bin/bash

osacompile -l JavaScript -o dist/EditorConfig.scptd index.js
mkdir -p dist/EditorConfig.scptd/Contents/Resources/Script\ Libraries
curl -fsSL https://github.com/umireon/editorconfig-jxa/releases/download/v0.7.0/editorconfig-jxa.scpt -o dist/EditorConfig.scptd/Contents/Resources/Script\ Libraries/editorconfig-jxa.scpt
