import React, { useState, useEffect } from 'react';
// import socket from "../../../../services/clientSockets"
import io from "socket.io-client"



const RoomView = () => {
  const [message, setMessage] = useState('');


  const socket = io.connect("http://localhost:8080")

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
