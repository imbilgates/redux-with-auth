import './App.css';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import EditUserProfile from './pages/EditUserProfile';
import { useSelector } from 'react-redux';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.user);

  return (
    <div className="App">
      <Routes>
        {/* Redirect to Dashboard if already authenticated */}
        <Route path="auth" element={isAuthenticated ? <Navigate to="dash" /> : <Auth />} />

        {/* Protected Routes */}
        <Route path="/" element={isAuthenticated ? <Outlet /> : <Navigate to="auth" />}>
          <Route path="dash" element={<Dashboard />} />
          <Route path="edit" element={<EditUserProfile />} />
        </Route>

        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<Navigate to={isAuthenticated ? "dash" : "auth"} />} />
      </Routes>
    </div>
  );
}

export default App;
