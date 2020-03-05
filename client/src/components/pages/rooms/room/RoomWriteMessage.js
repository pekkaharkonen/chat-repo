import React from 'react'

const RoomWriteMessage = () => {
    return (
        <footer>
            <form>
                <input type="text" id="messageInput" autoComplete="off"/>
                <button type="button">send</button>
            </form>
        </footer>
    )
}

export default RoomWriteMessage
