import { useAuth0 } from '@auth0/auth0-react';
import useAuthFlow from '../../auth/useAuthFlow';
import { getUserProfile } from '../../services/userService';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { logoutUser } = useAuthFlow();
  const [profile, setProfile] = useState(null);
  const [loadingProfile, setLoadingProfile] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getUserProfile(user.sub);
        setProfile(data);
      } catch (err) {
        console.error("Failed to fetch user profile:", err);
      } finally {
        setLoadingProfile(false);
      }
    };

    if (user?.sub) {
      fetchProfile();
    }
  }, [user]);

  if (isLoading || loadingProfile || !profile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      {isAuthenticated && (
        <div>
          <h1>Welcome {profile.name}</h1>
          <button onClick={logoutUser}>Logout</button>
        </div>
      )}
    </div>
  );
}
