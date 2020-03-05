import React, { useState, useEffect } from 'react';
// import socket from "../../../../services/clientSockets"
import io from "socket.io-client";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import RoomHeader from './RoomHeader';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200   
    },
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
  }, 
    large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
},
}));

const RoomView = (props) => {

  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');


  return (
    <div>
      <RoomHeader match={props.match} history={props.history}/>
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
        />            
        <Button className='SendMessageButton' variant="contained" type="submit" color="primary">Send</Button>
      </footer>
    </div>
  );
};

export default RoomView;
