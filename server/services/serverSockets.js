const app = require("../app")
const server = require("http").Server(app)
const io = require("socket.io")(server)

server.listen(`http://localhost:${process.env.PORT}`)

io.on("connect", (socket) => {
    socket.emit("news", { hello : "world"})
    socket.on("my other event" ((data) => {
        console.log(data)
    }))
})