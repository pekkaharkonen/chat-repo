import axios from 'axios';
const apiUrl = '/api/rooms/';

async function getAllRooms() {
  let res = await axios.get(apiUrl);
  return res.data;
}
async function postRooms(newroom){
    let response = await axios.post(apiUrl, newroom)
    .then (res => {
        return res.data;
    })
}
export { getAllRooms, postRooms };
