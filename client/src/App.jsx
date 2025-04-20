import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './auth/protectedRoute';
import CompleteProfile from './pages/CompleteProfile';
import AuthRedirect from './auth/useRedirectAfterAuth';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <p>Loading...</p>;

  return (
    <Router>
      <AuthRedirect />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/complete-profile" element={<CompleteProfile />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
