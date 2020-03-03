const app = require("../app")
const server = require("http").createServer(app)
const io = require("socket.io").listen(server)
const { getUsers } = require("../services/peopleService")

let users = async () => await getUsers()