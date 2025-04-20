import { useAuth0 } from '@auth0/auth0-react';
import { getUserProfile } from '../../services/userService';
import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import {
  Container,
  Header,
  SubHeader,
  SectionTitle,
  ImpactGrid,
  ImpactCard,
  ScoreBox
} from "./style";
import { FaLeaf, FaHandsHelping, FaDollarSign } from 'react-icons/fa';

import ButtonGradient from '../../components/Button';

export default function Dashboard() {
  const { user, isLoading } = useAuth0();
  const [profile, setProfile] = useState(null);
  const [loadingProfile, setLoadingProfile] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getUserProfile(user.sub);
        setProfile(data);
      } catch (err) {
        console.error("Failed to fetch user profile:", err);
      } finally {
        setLoadingProfile(false);
      }
    };

    if (user?.sub) {
      fetchProfile();
    }
  }, [user]);

  if (isLoading || loadingProfile || !profile) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <Container>
        <Header>Welcome, {profile.name}!</Header>
        <SubHeader>This is your dashboard</SubHeader>

        <ButtonGradient className="full">+ Add new e-waste</ButtonGradient>

        <SectionTitle>Your Impact</SectionTitle>

        <ImpactGrid>
          <ImpactCard>
            <h3><FaLeaf /> Enviromental Impact</h3>
            <p>You prevented 12 kg of CO₂ emissions by discarding electronics properly!</p>
          </ImpactCard>

          <ImpactCard>
            <h3><FaHandsHelping /> Social Impact</h3>
            <p>You've helped 3 community members get access to devices they needed!</p>
          </ImpactCard>

          <ImpactCard>
            <h3><FaDollarSign /> Economic Impact</h3>
            <p>You saved $230 by trading e-waste in your community!</p>
          </ImpactCard>
        </ImpactGrid>

        <ScoreBox>Impact Score = 100</ScoreBox>
      </Container>
    </>
  );
}
