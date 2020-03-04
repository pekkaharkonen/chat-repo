import React, { Component } from 'react';
import axios from 'axios';
const apiUrl="/api/rooms";

async function getAllRooms(){
    let res = await axios.get(apiUrl)
    return res.data;
}

export {getAllRooms};