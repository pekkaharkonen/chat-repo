const User = require("../db/schemat/userSchema")

const getUsers = () => {
    //return all registered users
    return User.find()
}

const getActiveUsers = () => {
    //return all users from db where active status = true 
}

const addUser = (user) => {
    //pekka lisää tänne usersRouten logiikan
}

const disconnectUser = (user) => {
    //set user active status to false, return disconnect msg
}

getUsers();
// const deleteUser = (user) => {
//     //logic
// }

module.exports = { getUsers, addUser }