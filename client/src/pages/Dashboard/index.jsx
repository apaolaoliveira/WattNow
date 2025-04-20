import { useAuth0 } from '@auth0/auth0-react';
import { useUserProfile } from '../../auth/useUserProfile';
import useAuthFlow from '../../auth/useAuthFlow';

export default function Dashboard() {
  const { isAuthenticated, isLoading, logout } = useAuth0();
  const { logoutUser } = useAuthFlow();
  const userProfile = useUserProfile();

  if (isLoading || !userProfile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      {isAuthenticated && (
        <div>
          <h1>Welcome {userProfile.name}</h1>
          <button onClick={logoutUser}>Logout</button>
        </div>
      )}
    </div>
  );
}
