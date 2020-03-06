<<<<<<< HEAD
import io from "socket.io-client"

let socket

export const socketConnection = () => {
    socket = io(process.env.SOCKET_IO_SERVER)
        .on("greeting", (msg) => {
            console.log(msg)
            socket.emit("echo", "well hello")
        })
        .on("availableUsers", msg => {
            console.log(msg)
        })
        .on("new message", (msg) => {
            console.log(msg)
        })
}

//socket functions
export const login = (username) => {
    socket.emit("login", username)
}
export const getAvailableUsers = () => {
    socket.emit('getAvailableUsers')
}
export const disconnect = () => {
    socket.off("disconnect")
}
export const sendMessage = (msg) => {
    console.log(msg + " from client")
    console.log(socket)
    socket.emit("message", "msg")
}


//     function join(chatroomName, cb) {
//         socket.emit('join', chatroomName, cb)
//     }

//     function leave(chatroomName, cb) {
//         socket.emit('leave', chatroomName, cb)
//     }

//     function message(chatroomName, msg, cb) {
//         socket.emit('message', { chatroomName, message: msg }, cb)
//     }

//     function getChatrooms(cb) {
//         socket.emit('chatrooms', null, cb)
//     }


//     socket.on('error', function (err) {
//         console.log('received socket error:')
//         console.log(err)
//     })
=======
// import io from "socket.io-client"

// let socket

// export const socketConnection = () => {
//     socket = io("http://localhost:8000")
//         .on("greeting", (msg) => {
//             console.log(msg)
//             socket.emit("echo", "well hello")
//         })
//         .on("availableUsers", msg => {
//             console.log(msg)
//         })
//         .on("new message", (msg) => {
//             console.log(msg)
//         })
>>>>>>> 79d7b6295ceac0b519f5cd015242f8c5947480cd
// }

// //socket functions
// export const login = (username) => {
//     socket.emit("login", username)
// }
// export const getAvailableUsers = () => {
//     socket.emit('getAvailableUsers')
// }
// export const disconnect = () => {
//     socket.off("disconnect")
// }
// export const sendMessage = (msg) => {
//     console.log(msg + " from client")
//     console.log(socket)
//     socket.emit("message", "msg")
// }


// //     function join(chatroomName, cb) {
// //         socket.emit('join', chatroomName, cb)
// //     }

// //     function leave(chatroomName, cb) {
// //         socket.emit('leave', chatroomName, cb)
// //     }

// //     function message(chatroomName, msg, cb) {
// //         socket.emit('message', { chatroomName, message: msg }, cb)
// //     }

// //     function getChatrooms(cb) {
// //         socket.emit('chatrooms', null, cb)
// //     }


// //     socket.on('error', function (err) {
// //         console.log('received socket error:')
// //         console.log(err)
// //     })
// // }
