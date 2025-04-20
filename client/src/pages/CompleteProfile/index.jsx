import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { saveUserProfile } from "../../services/userService";
import {
  FormContainer,
  StyledForm,
  Label,
  Input,
  LocationButton,
  Title,
  Description,
  PageContainer
} from "./style";
import ButtonGradient from "../../components/Button";

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

      const city =
      data.address.city ||
      data.address.town ||
      data.address.village ||
      data.address.hamlet ||
      data.address.county ||
      data.address.state;

      if (!city) {
        toast.error("Could not determine your location");
        return;
      }
      
      setAutoLocation(data.display_name.split(",")[0]);
      setLocation(data.display_name.split(",")[0]);
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
    <PageContainer>
      <FormContainer>
        <StyledForm onSubmit={handleSubmit}>
          <Title>Almost done!</Title>
          <Description>
            We’d like to know more about you so we can personalise your experience.
          </Description>

          <Label>Your Name</Label>
          <Input
            placeholder="Ex: Jane Doe"
            value={name || ""}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <Label>Your Location</Label>
          <Input
            placeholder="Ex: New York"
            value={location || ""}
            onChange={(e) => setLocation(e.target.value)}
            required
          />

          <LocationButton type="button" onClick={() => handleGetLocation(setLocation)}>
            Use Current Location
          </LocationButton>

          <ButtonGradient type="submit">Continue to Dashboard</ButtonGradient>
        </StyledForm>
      </FormContainer>
    </PageContainer>
  );
}
