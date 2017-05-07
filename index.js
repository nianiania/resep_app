//=========configuration====


var express = require('express')
var app = express()
var path = require('path')
var bodyParser = require('body-parser')
var exphbs = require("express-handlebars")

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs')


//=============routing===========

app.route('/')
    .get(function(req, res) {
        res.render('resep');

    })

.post(function(req, res) {
  var nama_resep = req.body.nama_resep
  var Deskripsi = req.body.deskripsi
  var Penulis = req.body.penulis
  var cara_pembuatan = req.body.cara_pembuatan

  console.log(nama_resep)
  console.log(Deskripsi)
  console.log(Penulis)
  console.log(cara_pembuatan)

})

//===============webserver======//

app.listen(4000, function() {
    console.log('ini contoh web server sederhana dengan node js')
})
