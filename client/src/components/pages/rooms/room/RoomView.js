import React from 'react'
import * as scs from "../../../../services/socketClientService"
import RoomHeader from './RoomHeader'
import RoomMessageArea from './RoomMessageArea'
import RoomWriteMessage from './RoomWriteMessage'



const RoomView = () => {
    return (
        <div>
            <RoomHeader />
            <RoomMessageArea />
            <RoomWriteMessage />
        </div>
    )
}

export default RoomView
