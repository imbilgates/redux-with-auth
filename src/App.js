import { useSelector } from 'react-redux';
import './App.css';

import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'

function App() {

  const user = useSelector((state) => state.auth.user);

  return (
    <div className='App'>
      {user ? (
        <Dashboard />
      ) : (
        <Auth />
      )}
    </div>
  );
}

export default App;
