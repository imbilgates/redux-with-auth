import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/authSlice';
import EditUserProfile from './EditUserProfile';
import { toggleEdit } from '../store/commonSlice';

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const showInput = useSelector((state) => state.common.showInput);

  return (
    <>
      {!showInput ? (
        <div>
          {user && (
            <>
              <h4>{"Welcome, " + user.name}</h4>
              <p>{"your created mail id is: " + user.email}</p>
            </>
          )}
          <button
            onClick={() => dispatch(logout())}
            className='logout-btn'
          >Logout</button>
          <button
            onClick={() => dispatch(toggleEdit())}
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