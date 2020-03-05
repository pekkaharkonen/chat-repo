import React from 'react'
import {socketConnection} from "../services/clientSockets"

const SocketTest = () => {
    return (
        <div>
            <button type="button" onClick={socketConnection}>Connect</button>
        </div>
    )
}

export default SocketTest
