import io from "socket.io-client"

const socket = io.connect(process.env.SERVER || "http://localhost:4000/api")

const registerHandler = (onMessageReceived) => {
    socket.on("message", onMessageReceived)
}

const unregisterHandler = () => {
    socket.off("message")
}

socket.on("error", (err) => {
    console.log("received socket error:")
    console.log(err)
})

const register = (name, cb) => {
    socket.emit("register", name, cb)
}

const join = (chatroomName, cb) => {
    socket.emit("join", chatroomName, cb)
}

const leave = (chatroomName, cb) => {
    socket.emit("leave", chatroomName, cb)
}

const sendMessage = (chatroomName, msg, cb) => {
    socket.emit("message", { chatroomName, message: msg }, cb)
}

const receiveMessage = (message) => {
    console.log(message)
}

const getChatrooms = (cb) => {
    socket.emit("chatrooms", null, cb)
}

const getAvailable = (cb) => {
    socket.emit("availableUsers", null, cb)
}

socket.on("new message", (data => {
    console.log(data)
}))

socket.on("get users", (users) => {
    //refresh dom with new users
})
