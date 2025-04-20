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
    loginWithRedirect({
      authorizationParams: {
        screen_hint: "signup",
      },
      appState: {
        returnTo: "/complete-profile",
      },
    });
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
