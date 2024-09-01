import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../actions/action';

const Auth = () => {
  const usernameRef = useRef();
  const dispatch = useDispatch();

  const handleUpdateUser = () => {
    const username = usernameRef.current.value;
    if (username === '') return alert('username can\'t be empty');
    const userDetails = {
      id: username,
      name: username,
      email: `${username}@example.com`
    };

    dispatch(login(userDetails));
  };

  return (
    <form>

      <h1>Auth Page</h1>
      <input
        type="text"
        placeholder='Username'
        ref={usernameRef}
      />
      <button
        type='submit'
        onClick={handleUpdateUser}
        className='login-btn'
      >login</button>

    </form>
  );
}

export default Auth;
