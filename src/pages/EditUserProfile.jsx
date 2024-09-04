import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';

function EditUserProfile() {

  const navigate = useNavigate();
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

    dispatch(update(userDetails));
    navigate('/dash')
  };


  return (
    <form>

      <input type="text"
        placeholder='edit username'
        ref={usernameRef}
        defaultValue={user?.name}
        autoFocus
      />

      <button
        type='submit'
        onClick={handleUpdateUser}
        className='change-btn'
      >change </button>

      <button
        onClick={() => navigate('/dash')}
        className='cancel-btn'
      >❌</button>

    </form>
  )
}

export default EditUserProfile