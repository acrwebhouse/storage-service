exports.on = function(app) {
  const express = require('express');
  const config = require('./setting/config').config
  const cors = require('cors')
  const cookieParser = require("cookie-parser");
  const storage = config.storage
  app.use('/storage',express.static(storage));
  app.use(cookieParser());
  app.use(cors())

}
//http://localhost:5001/storage/dev/acr.apk