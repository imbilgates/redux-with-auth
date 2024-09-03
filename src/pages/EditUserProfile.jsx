import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/authSlice';
import { toggleEdit } from '../store/commonSlice';

function EditUserProfile() {

  const usernameRef = useRef();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);


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
    dispatch(toggleEdit());
  };


  return (
    <form>

      <input type="text"
        placeholder='edit username'
        ref={usernameRef}
        defaultValue={user.name}
        autoFocus
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

    </form>
  )
}

export default EditUserProfile