import { useAuth0 } from '@auth0/auth0-react';

export default function Dashboard() {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  if (isLoading) {
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
          <h1>Welcome {user.name}</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}
