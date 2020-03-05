import React, { useState, useEffect } from 'react';
import io from "socket.io-client";
import RoomHeader from './RoomHeader';
import RoomMessageArea from './RoomMessageArea';


const RoomView = (props) => {


  return (
    <div>
      <RoomHeader match={props.match} history={props.history}/>
      <RoomMessageArea />
    </div>
  );
};

export default RoomView;
