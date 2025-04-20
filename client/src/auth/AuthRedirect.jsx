import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function AuthRedirect() {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    const appState = window.history.state?.usr?.returnTo;
    if (isAuthenticated && appState) {
      navigate(appState);
    }
  }, [isAuthenticated]);

  return null;
}
