import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const usernameRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUpdateUser = (e) => {
    e.preventDefault()
    const username = usernameRef.current.value;
    if (username === '') return alert('username can\'t be empty');
    const userDetails = {
      id: username,
      name: username,
      email: `${username}@example.com`
    };

    dispatch(login(userDetails));
    navigate('dash')
  };

  return (
    <form onSubmit={handleUpdateUser}>

      <h1>Auth Page</h1>
      <input
        type="text"
        placeholder='Username'
        ref={usernameRef}
        autoFocus
      />
      <button
        type='submit'
        className='login-btn'
      >login</button>

    </form>
  );
}

export default Auth;
