const mongoose = require("mongoose")

const BD_NAME = "tareas"
const BD_USER = "jorgegago"
const BD_PASSWORD = "1596320a"
const uri = `mongodb+srv://${BD_USER}:${BD_PASSWORD}@cluster0.h7qef.mongodb.net/${BD_NAME}?retryWrites=true&w=majority`

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})

var db = mongoose.connection

module.exports = db