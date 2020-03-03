const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema = new Schema( {
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    NumOfMessages: {
        type: Number
    }
});


const Room = mongoose.model("Room", roomSchema);
module.exports = Room;