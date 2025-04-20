import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import axios from "axios";

export const useUserProfile = () => {
  const { getAccessTokenSilently, user } = useAuth0();
  const [metadata, setMetadata] = useState(null);

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const token = await getAccessTokenSilently({
          audience: `https://${import.meta.env.VITE_AUTH0_DOMAIN}/api/v2/`,
        });

        const res = await axios.get(
          `https://${import.meta.env.VITE_AUTH0_DOMAIN}/api/v2/users/${user.sub}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setMetadata(res.data.user_metadata);
      } catch (err) {
        console.error("Error fetching user metadata:", err);
      }
    };

    fetchMetadata();
  }, [getAccessTokenSilently, user]);

  return metadata;
};
