import React, { Component } from 'react';
import Roomlist from './RoomList';
import { getAllRooms, postRooms } from '../../../services/roomService';
import CreateRoom from './CreateRoom';

class Rooms extends Component {
  state = { rooms: [] };
  componentDidMount = async () => {
    let rooms = await getAllRooms(); // Kesken, vaatii toteutusta
    this.setState({ rooms });
  };
  createRoom = async(newroom) => {
      let response = await postRooms(newroom);
      this.setState(this.state);
      this.componentDidMount();
  }
  render() {
    return (
      <div>
        <CreateRoom isReady={this.createRoom} />
        <Roomlist rooms={this.state.rooms} />
      </div>
    );
  }
}

export default Rooms;
