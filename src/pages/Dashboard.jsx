import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editPage, logout } from '../store/authSlice';
import EditUserProfile from './EditUserProfile';

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const showInput = useSelector((state) => state.showInput);

  return (
    <>
      {!showInput ? (
        <div>
          <h1>Dashboard</h1>
          <h4>{"Welcome, " + user.name}</h4>
          <p>{"your created mail id is: " + user.email}</p>
          <button
            onClick={() => dispatch(logout())}
            className='logout-btn'
          >Logout</button>
          <button
            onClick={() => dispatch(editPage())}
            className='edit-btn'
          >Edit</button>
        </div>
      ) : (
        <EditUserProfile />
      )}

    </>
  )
}

export default Dashboard