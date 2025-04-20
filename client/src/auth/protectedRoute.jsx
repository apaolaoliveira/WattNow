import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';
import { useHasCompletedProfile } from '../services/userService';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading, user } = useAuth0();
  const { hasCompleted, loading } = useHasCompletedProfile(user?.sub);

  if (isLoading || loading) return <p>Loading...</p>;
  if (!isAuthenticated) return <Navigate to="/" />;

  if (!hasCompleted) return <Navigate to="/complete-profile" />;

  return children;
}
