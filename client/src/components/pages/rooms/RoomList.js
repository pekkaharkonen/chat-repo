import React, { Component } from 'react';
import RoomItem from './RoomItem';

class RoomList extends Component {
    render() {
        const allRooms = this.props.rooms
        .map(function (room) {
            return(<RoomItem room={room} />);
        });
        return (
            <div className="roomListClass">
                {allRooms}
            </div>
        );
    }
}

export default RoomList;