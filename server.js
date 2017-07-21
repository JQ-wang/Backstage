var express = require('express')

var app = express()

app.use(express.static('./dist'))

/**
 * 起服务
 * */
//端口
// var port = process.env.PORT || config.build.port
var port = 9000
module.exports = app.listen(port,function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})


