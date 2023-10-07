// Init
const fs = require('fs')
const pug = require('pug')
const stylus = require('stylus')
var conf = JSON.parse(fs.readFileSync('./config.json', 'utf-8'))

// Render pages
for (var i = 0; i < Math.min(conf.index_file.length, conf.result_file.length); i++) {
    var res = pug.renderFile(conf.index_file[i])
    fs.writeFileSync(conf.result_file[i], res)
}

// Render styles
for (var i = 0; i < Math.min(conf.index_style.length, conf.result_style.length); i++) {
    var input = fs.readFileSync(conf.index_style[i], 'utf-8')
    var res = stylus.render(input, { filename: conf.result_style[i] })
    fs.writeFileSync(conf.result_style[i], res)
}
