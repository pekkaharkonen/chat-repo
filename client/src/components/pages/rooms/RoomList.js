import React, { Component } from 'react';
import Room from './room/Room';

class RoomList extends Component {
    render() {
        const allRooms = this.props.Rooms
        .map(function (room) {
            return(<Room room={room} />);
        });
        return (
            <ul>
                <li>{allRooms}</li>
            </ul>
        );
    }
}

export default RoomList;