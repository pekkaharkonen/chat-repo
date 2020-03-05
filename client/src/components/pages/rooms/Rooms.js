import React, { Component } from 'react';
import Roomlist from './RoomList';
import { getAllRooms } from '../../../services/roomService';

class Rooms extends Component {
  state = { rooms: [] };
  componentDidMount = async () => {
    let rooms = await getAllRooms(); // Kesken, vaatii toteutusta
    this.setState({ rooms });
  };
  render() {
    return (
      <div>
        <Roomlist rooms={this.state.rooms} />
      </div>
    );
  }
}

export default Rooms;
