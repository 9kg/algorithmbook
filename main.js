var lib = require("./lib")
var promise = require("./promise")
var history = require("./history")
var router = require("./router")

lib.Promise = promise
lib.Router = router
lib.History = history

window.QAPP  = lib
