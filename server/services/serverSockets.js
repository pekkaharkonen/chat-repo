const app = require("../app")
const server = require("http").Server(app)
const io = require("socket.io")(server)

server.listen(8080)

// server.listen(`http://localhost:${process.env.PORT}`)

io.on("connection", (socket) => {
    console.log("user connected")
    socket.emit("news", { hello : "world"})
    socket.on("my other event" ((data) => {
        console.log(data)
    }))
})