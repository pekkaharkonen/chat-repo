const express = require("express")
const app = express()
const mongoose = require('mongoose');

app.listen(process.env.PORT || 4000, () => { console.log("server up and running")})