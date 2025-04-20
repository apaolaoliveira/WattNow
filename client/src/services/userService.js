import api from "./api";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

export const saveUserProfile = async ({ name, location, userId }) => {
  const res = await api.post("/save-profile", {
    name,
    location,
    userId
  });

  return res.data;
};

export const getUserProfile = async (userId) => {
  const res = await api.get("/get-profile/", {
    params: { userId }
  });

  console.log("User profile data:", res.data);
  return res.data;
};

export function useHasCompletedProfile(userId) {
  const [hasCompleted, setHasCompleted] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;

    const fetchStatus = async () => {
      try {
        const res = await api.get("/get-profile", {
          params: { userId }
        });
        setHasCompleted(res.data?.profileCompleted === true);
      } catch (err) {
        console.error("Error checking profile status:", err);
        setHasCompleted(false);
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
  }, [userId]);

  return { hasCompleted, loading };
}