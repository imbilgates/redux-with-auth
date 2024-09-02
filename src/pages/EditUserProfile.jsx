import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { editPage, login } from '../store/authSlice';

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
    toggleEditPage();
  };

  const toggleEditPage = () => {
    dispatch(editPage());
  };


  return (
    <>

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
        onClick={toggleEditPage}
        className='cancel-btn'
      >❌</button>

    </>
  )
}

export default EditUserProfile