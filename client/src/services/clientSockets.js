import io from "socket.io-client"

export const socket = io.connect("http://localhost:6000")

socket.on('news', function (data) {
    console.log(data)
    socket.emit('my other event', { my: 'data' })
  })