import React, { useState } from 'react';
import { loginUser } from '../../../services/authClient';

const Login = ({ history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    //Do something here
    console.log(`Logging in user ${username} with password ${password}...`);
    let token = await loginUser({ username, password });
    if (token) {
      console.log(`Token: ${token}`);
      console.log('Saving the token to local storage...');
      localStorage.setItem('token', token);
      console.log('Set to local storage successful');
      history.push('/rooms');
    } else {
      alert('Invalid credentials!');
      setUsername('');
      setPassword('');
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            name='username'
            id='username'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className='input-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button type='submit'>Login</button>
        <button type='button' onClick={() => history.push('/')}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Login;
