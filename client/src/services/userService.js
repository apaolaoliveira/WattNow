import api from "./api";

export const saveUserProfile = async ({ name, location, userId }) => {
  const res = await api.post("/save-profile", {
    name,
    location,
    userId
  });

  return res.data;
};


