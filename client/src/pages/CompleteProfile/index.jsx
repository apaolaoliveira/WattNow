import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { saveUserProfile } from "../../services/userService";

export default function CompleteProfile() {
  const { user, isLoading } = useAuth0();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [autoLocation, setAutoLocation] = useState("");
  const navigate = useNavigate();

  if(isLoading || !user ) return <div>Loading...</div>;

  const handleGetLocation = () => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
      );
      const data = await res.json();
      const city = data.address.city || data.address.town || data.address.village;
      setAutoLocation(city);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalLocation = location || autoLocation;

    try {
      await saveUserProfile({
        name,
        location: finalLocation,
        userId: user.sub,
      });

      toast.success("Profile saved successfully!");
      navigate("/dashboard");
    } catch (err) {
      console.error("Error saving:", err);
      toast.error("Error saving profile");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Location</label>
        <input
          placeholder="Enter your city"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <button type="button" onClick={handleGetLocation}>
          Use current location
        </button>

        {autoLocation && <p>Detected location: {autoLocation}</p>}

        <button type="submit">Save and continue</button>
      </form>
    </div>
  );
}
