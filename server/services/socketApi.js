const io = require("socket.io")()
let socketApi = {}

io.on("connection", socket => {
    console.log("a user connected")
    socket.emit("greeting", "hello")

    socket.on("echo", msg => {
        console.log("echo ", msg)
        socket.emit("echo", `${msg}`)
    })

    // socket.on("broadcast")

})

socketApi.io = io

module.exports = socketApi