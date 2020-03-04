const app = require("../app")
const server = require("http").createServer(app)
const io = require("socket.io").listen(server)
const { getUsers, getAvailableUsers, disconnectUser, addUser, getUserByUsername } = require("./userService") // retrieve users from db

//all registered users
async let users = await getUsers()
//currently active users
async let availableUsers = await getAvailableUsers()
//available rooms
// async let chatrooms = await getChatrooms() //not yet implemented

const handleGetAvailableUsers = () => {
    io.sockets.emit("get users", availableUsers)
    // -> client side socket rerenders users list (socket.on("get users", (data) => ...)
}

io.sockets.on("connection", (client) => {
    async const user = await getUserByUsername(client.username)
    availableUsers.push(user)
    handleGetAvailableUsers()
    console.log("Connected: %s sockets connected", availableUsers.length)
})

const handleRegister = (userName, callback) => {
    const user = getUserByUsername(userName)
     users.push(user)
}

const handleJoin = (chatroomName) => {
    //add user to room members array
}

const handleLeave = (chatroomName) => {
    //remove user from room members array
}

const handleMessage = (chatroomName, msg) => {
    io.sockets.emit("new message", {
        chatRoomName: chatroomName,
        message: msg.message,
        user: socket.username
    })
}

const handleGetChatRooms = () => {
    //return current rooms
}

const handleGetAvailableUsers = () => {
    return availableUsers
}

io.on("connection", (socket => {
    availableUsers.push(socket)
    console.log(`${availableUsers.length} active users connected`)

    socket.on("register", handleRegister)

    socket.on("join", handleJoin)

    socket.on("leave", handleLeave)

    socket.on("message", handleMessage)

    socket.on("chatrooms", handleGetChatRooms)

    socket.on("availableUsers", handleGetAvailableUsers)

    socket.on("disconnect", () => {
        console.log("client disconnect:", socket.id)
        handleDisconnect()
    })

    socket.on("error", (err) => {
        console.log("received error from client:", socket.id)
        console.log(err)
    })
}))