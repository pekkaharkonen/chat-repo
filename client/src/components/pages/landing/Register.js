import React, { useState } from 'react';
import { registerUser } from '../../../services/userClient';

const Register = ({ history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [password2, setPassword2] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    if (password !== password2) {
      alert('Password inputs do not match!');
      return;
    } else {
      //Do something here
      let response = await registerUser({ username, password, email });
      console.log(response);
      if (response) {
        alert('User created, you can log in now!');
        setUsername('');
        setPassword('');
        setPassword2('');
        setEmail('');
        history.push('/login');
      } else {
        alert('Please try to register with different email and/or username');
      }
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
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
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
        <div className='input-group'>
          <label htmlFor='password2'>Confirm password</label>
          <input
            type='password'
            name='password2'
            id='password2'
            value={password2}
            onChange={e => setPassword2(e.target.value)}
          />
        </div>
        <button type='submit'>Register</button>
        <button type='button' onClick={() => history.push('/')}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Register;
