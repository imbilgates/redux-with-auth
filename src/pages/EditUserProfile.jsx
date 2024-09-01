import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../actions/action';

function EditUserProfile() {

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
    dispatch({ type: 'EDIT', payload: false })
  };


  return (
    <form>

      <input type="text"
        placeholder='edit username'
        ref={usernameRef}
      />

      <button
        type='submit'
        onClick={handleUpdateUser}
        className='change-btn'
      >change </button>

      <button
        onClick={() => dispatch({ type: 'EDIT', payload: false })}
        className='cancel-btn'
      >❌</button>

    </form>
  )
}

export default EditUserProfile