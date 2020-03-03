const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

app.use(express.json())
app.use(morgan("tiny"))

const usersRoute = require("./routes/usersRoute")
const authRoute = require("./routes/authRoute")
const roomsRoute = require("./routes/roomsRoute")
app.use("/api/users", usersRoute)
app.use("/api/auth", authRoute)
app.use("/api/rooms", roomsRoute)

app.listen(process.env.PORT || 4000, () => { console.log("server up and running")})