import useAuthFlow from '../../auth/useAuthFlow';

export default function LandingPage() {
  const { login, signup } = useAuthFlow();

  return (
    <div>
      <h1>Landing Page</h1>
      <button onClick={login}>Login</button>
      <button onClick={signup}>Signup</button>
    </div>
  );
}
