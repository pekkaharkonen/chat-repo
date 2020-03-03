const { Router } = require("express")
const router = Router()
const { getAllRooms, createRoom} = require('../services/roomService'); // Tarkista oikeat nimet roomServicestä

// Get All Rooms
router.get("/", async (req, res) => {
    try {
        const roomData = await getAllRooms(); // Tarkasta roomServicestä
        if (!roomData) {
            res.status(404);
        }
        res.status(200).json(roomData);
    } catch (err) {
        console.error(err.message);
        res.status(400);
    }
}); 

// Create One Rooms
router.post("/:room", async (req, res) => {
    try {
        const newRoom = await createRoom(req.params.room); // Tarkasta roomServicestä
        if (!newRoom) {
            res.status(404);
        }
        res.status(200).json(newRoom);
    } catch (err) {
        console.error(err.message);
        res.status(400);
    }
});

module.exports = router