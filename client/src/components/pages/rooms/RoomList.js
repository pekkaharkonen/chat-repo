import React, { Component } from 'react';
import RoomItem from './RoomItem';

class RoomList extends Component {
    render() {
        const allRooms = this.props.rooms
        .map(function (room) {
            return(<RoomItem room={room} />);
        });
        return (
            <ul>
                <li>{allRooms}</li>
            </ul>
        );
    }
}

export default RoomList;