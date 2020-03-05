import React, { Component } from 'react';
import RoomItem from './RoomItem';

class RoomList extends Component {
  render() {
    const allRooms = this.props.rooms.map(function(room, index) {
      return <RoomItem key={index} room={room} />;
    });
    return <div className='roomListClass'>{allRooms}</div>;
  }
}

export default RoomList;
