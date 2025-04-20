import { useAuth0 } from "@auth0/auth0-react";

export default function useAuthFlow() {
  const { loginWithRedirect, logout } = useAuth0();

  const login = () => {
    loginWithRedirect({
      appState: {
        returnTo: "/dashboard",
      },
    });
  };

  const signup = () => {
    /* This is the default way to signup, 
      but it doesn't work because Auth0 doesn't support it 
      when using Passkeys.
    loginWithRedirect({
      screen_hint: "signup",
      appState: {
        returnTo: "/complete-profile",
      },
    }); */

    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
    const redirectUri = window.location.origin;

    const authUrl = `https://${domain}/authorize?` +
      `response_type=code&` +
      `client_id=${clientId}&` +
      `redirect_uri=${redirectUri}&` +
      `scope=openid%20profile%20email&` +
      `screen_hint=signup&` +
      `state=signup`;

    window.location.href = authUrl;
  };

  const logoutUser = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return { login, signup, logoutUser };
}
