import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import RoomHeader from './RoomHeader';
import {socketConnection, getAvailableUsers, disconnect, sendMessage} from "../../../../services/clientSocketService"
=======
import io from "socket.io-client";
import RoomHeader from './RoomHeader';
import RoomMessageArea from './RoomMessageArea';
>>>>>>> 155d646af86c9c74c56c73c0defb15ddc2cd58b4


const RoomView = (props) => {

<<<<<<< HEAD
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');
  const [textField, setTextField] = useState("")

  const send = () => {
    sendMessage(textField)
}
=======
>>>>>>> 155d646af86c9c74c56c73c0defb15ddc2cd58b4

  return (
    <div>
      <RoomHeader match={props.match} history={props.history}/>
<<<<<<< HEAD
      <footer>
      <Avatar alt="Remy Sharp" className={classes.large} src="/static/images/avatar/1.jpg" />
          <TextField
          className="message"
          id="outlined-textarea"
          label="Your message"
          placeholder="Say Hey!"
          multiline
          rows="5"
          variant="outlined"
          value={textField}
          onChange={e => setTextField(e.target.value)}
        />            
        <Button className='SendMessageButton' variant="contained" type="submit" color="primary" onClick={send}>Send</Button>
      </footer>
=======
      <RoomMessageArea />
>>>>>>> 155d646af86c9c74c56c73c0defb15ddc2cd58b4
    </div>
  );
};

export default RoomView;
