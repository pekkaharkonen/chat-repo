import React, { Component } from 'react';

class RoomItem extends Component {
    render() {
        return (
            <div className="card">
                <img src=""></img>
                <h3>{this.props.room.name}</h3>
                <button type="button">Join</button> 
            </div>
        );
    }
}

export default RoomItem;