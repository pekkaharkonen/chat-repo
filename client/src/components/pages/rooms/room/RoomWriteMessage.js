import React from 'react'

const RoomWriteMessage = () => {
    return (
        <form>
            <input type="text" id="messageInput" autoComplete="off"/>
            <button type="button">send</button>
        </form>
    )
}

export default RoomWriteMessage
