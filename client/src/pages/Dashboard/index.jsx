import { useAuth0 } from '@auth0/auth0-react';
import { useUserProfile } from '../../auth/useUserProfile';

export default function Dashboard() {
  const { isAuthenticated, isLoading, logout } = useAuth0();
  const userProfile = useUserProfile();

  if (isLoading || !userProfile) {
    return <div>Loading...</div>;
  }

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {isAuthenticated && (
        <div>
          <h1>Welcome {userProfile.name}</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}
