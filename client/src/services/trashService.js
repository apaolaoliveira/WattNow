import api from "./api";

export const submitEWaste = async ({ brand, type, year, number, condition, notes, photo }) => {
  const data = new FormData();

  data.append("brand", brand);
  data.append("type", type);
  data.append("year", year);
  data.append("number", number);
  data.append("condition", condition);
  data.append("notes", notes);
  if (photo) data.append("photo", photo);

  const res = await api.post("/submit-ewaste", data, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
  
  return res.data;
};

export const getEWasteList = async () => {
  const res = await api.get("/ewaste-list");
  return res.data;
};
