
const express = require("express")
const router = express.Router()
router.post("/register",require("./controllers/userController").insertUser)
router.post("/checkLogin",require("./controllers/userController").checkUser)
module.exports = {router}
