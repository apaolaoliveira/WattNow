import { useAuth0 } from '@auth0/auth0-react';

export default function LandingPage() {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect({
      appState: {
        returnTo: "/dashboard",
      },
    });
  };

  return (
    <div>
      <h1>Landing Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
