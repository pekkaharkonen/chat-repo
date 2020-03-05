import React, { useState, useEffect } from 'react';
// import socket from "../../../../services/clientSockets"
import io  from "socket.io-client"
// import socketIOClient  from "socket.io-client"
import openSocket from 'socket.io-client'
// const socket = openSocket("http://localhost:8080")



const RoomView = () => {
  const [message, setMessage] = useState('');


  const socket = io.connect()


  socket.on('news', function (data) {
    console.log(data)
    socket.emit('my other event', { my: 'data' })
  })

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
    }

  };

  useEffect(() => { }, []);

  return (
    <div>
      <input
        type='text'
        placeholder='Enter your message here...'
        value={message}
        onChange={e => setMessage(e.target.value)}
        onKeyPress={(e) => handleKeyPress(e)}
      />
    </div>
  );
};

export default RoomView;
