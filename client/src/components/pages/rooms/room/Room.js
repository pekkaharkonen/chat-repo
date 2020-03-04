import React from 'react';

const Room = ({ match }) => {
  return (
    <div>
      <h1>{`Welcome to ${match.params.name} room!`}</h1>
    </div>
  );
};

export default Room;
