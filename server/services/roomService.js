require('dotenv').config();
const mongoose = require("mongoose");
const Room = require('../db/schemat/roomSchema');


// const USER = process.env.PGUSER;
// const PASSWORD = process.env.PGPASSWORD;
const getAllRooms=()=> {
    // const rooms = await Room.find()  
    return Room.find();
}
async function addRoom() {

}


module.exports = {getAllRooms} 