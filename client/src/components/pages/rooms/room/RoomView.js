import React, { useState, useEffect } from 'react';
import RoomHeader from './RoomHeader';
import RoomMessageArea from './RoomMessageArea';
import RoomWriteMessage from './RoomWriteMessage';

const RoomView = () => {
  const [message, setMessage] = useState('');
  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      console.log('Enter painettu');
    }
  };

  useEffect(() => {}, []);

  return (
    <div>
      <input
        type='text'
        placeholder='Enter your message here...'
        value={message}
        onChange={e => setMessage(e.target.value)}
        onKeyPress={e => handleKeyPress(e)}
      />
      {/* <RoomHeader />
            <RoomMessageArea />
            <RoomWriteMessage /> */}
    </div>
  );
};

export default RoomView;
