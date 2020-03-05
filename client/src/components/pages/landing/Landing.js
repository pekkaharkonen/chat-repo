import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import './Landing.css';

const buttonStyle = {
  margin: '1rem 0.3rem'
};

const Landing = props => {
  return (
    <div className='landing'>
      <div className='landing-box'>
        {/* <h1>Roomis</h1> */}
        <Typography variant='h3'>Roomis</Typography>
        <Typography variant='caption' style={{ color: '#fff' }}>
          Chatting made easy
        </Typography>
        <span className='buttons'>
          <Link to='/register' style={{ textDecoration: 'none' }}>
            <Button
              className='landing-button'
              variant='contained'
              color='primary'
              style={buttonStyle}
            >
              Register
            </Button>
          </Link>
          <Link to='/login' style={{ textDecoration: 'none' }}>
            <Button
              className='landing-button'
              variant='contained'
              color='primary'
              style={buttonStyle}
            >
              Login
            </Button>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Landing;
