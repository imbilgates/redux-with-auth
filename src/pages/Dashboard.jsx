import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import EditUserProfile from './EditUserProfile';

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user)
  const showInput = useSelector((state) => state.showInput);

  return (
    <>
      {!showInput ? (
        <div>
          <h1>Dashboard</h1>
          <h4>{"Welcome, " + user.name}</h4>
          <p>{"your created mail id is: " + user.email}</p>
          <button
            onClick={() => dispatch({ type: 'LOGOUT' })}
            className='logout-btn'
          >Logout</button>
          <button
            onClick={() => dispatch({ type: 'EDIT', payload: true })}
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