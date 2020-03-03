const app = require("../app")
const server = require("http").createServer(app)
const io = require("socket.io").listen(server)
const { getUsers, getActiveUsers, disconnectUser, addUser } = require("./userService") // retrieve users from db

//all registered users
async let users = await getUsers()
//currently active users
async let activeUsers = await getActiveUsers()

const updateUsers = async () => {
    users = await getUsers()
    io.sockets.emit("get users", users)
    // -> client side socket rerenders users list (socket.on("get users", (data) => ...)
}

const updateActiveUsers = async () => {
    activeUsers = await getActiveUsers()
    io.sockets.emit("get active users", activeUsers)
    //->  client side socket rerenders users list (socket.on("get active users", (data) => ...)
}

io.sockets.on("connection", () => {
    updateActiveUsers()
    console.log("Connected: %s sockets connected", activeUsers.length)
})
socket.on("disconnect", () => {
    disconnectUser(socket)
    updateActiveUsers()
    console.log(`Disconnected: ${activeUsers.length} sockets connected`)
})
socket.on("send message", (data) => {
    io.sockets.emit("new message", { msg: data, user: socket.username })
    //client side: socket.on("new message", (data) => ...
})
socket.on("new user", (data) => {
    addUser(data)
    updateUsers()
    updateActiveUsers()
})