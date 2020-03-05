import io from "socket.io-client"

export const socketConnection = () => {
    let socket = io("http://localhost:8000")
    socket.on("greeting", (msg) => {
        console.log(msg)
        socket.emit("echo", "well hello")
    })
}
