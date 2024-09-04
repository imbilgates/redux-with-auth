import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/authSlice';

import SimpleBackDrop from '../MUI/SimpleBackDrop';

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = () => {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(logout());
      setIsLoading(false);
    }, 2000);
  }

  if (isLoading) return <SimpleBackDrop />;

  return (
    <div>
      {user && (
        <>
          <h4>{"Welcome, " + user.name}</h4>
          <p>{"Your created mail id is: " + user.email}</p>
        </>
      )}
      <button
        onClick={handleLogout}
        className='logout-btn'
      >Logout</button>
      <button
        onClick={() => navigate('/edit')}
        className='edit-btn'
      >Edit</button>
    </div>
  );
}

export default Dashboard;
