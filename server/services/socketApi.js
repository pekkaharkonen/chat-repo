const io = require("socket.io")()
let connections = []
let availableUsers = []
let socketApi = {}

io.on("connection", socket => {
    console.log("a user connected")
    connections.push(socket.id)

    socket.on("login", (username) => {
        availableUsers.push(username)
    })
    socket.on("getAvailableUsers", () => {
        socket.emit("availableUsers", connections)
    })
    socket.on("join", handleJoin => {

    })
    socket.on("disconnect", () => {
        console.log("user disconnected:", socket.id)
        const index = connections.findIndex(i => i === socket.id)
        connections.splice(index, 1)
    })
    socket.on("message", (msg) => {
        console.log(msg)
        io.sockets.emit("new message", msg)
    })

})

socketApi.io = io

module.exports = socketApi