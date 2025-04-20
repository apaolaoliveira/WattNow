import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading, user } = useAuth0();

  if (isLoading) return <p>Loading...</p>;
  if (!isAuthenticated) return <Navigate to="/" />;

  const profileCompleted = user?.user_metadata?.profileCompleted;

  if (!profileCompleted) {
    return <Navigate to="/complete-profile" />;
  }

  return children;
}
