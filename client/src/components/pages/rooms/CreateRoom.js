import React, { Component } from 'react';

class CreateRoom extends Component {
    state= {name: '', description: ''}
    nameAdded = (event) => {
        this.setState({name: event.target.value});
    }
    descriptionAdded = (event) => {
        this.setState({description: event.target.value});
    }
    ready = (event) => {
        event.preventDefault();
        this.props.isReady(this.state);
        this.setState({name:'', description:''});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.ready}>
                    Create a new room: <input type="text" value={this.state.name} onChange={this.nameAdded} /><br />
                    Write description for this room: <input type="textarea" value={this.state.description} onChange={this.descriptionAdded} /> <br />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default CreateRoom;