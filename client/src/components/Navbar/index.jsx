import { Container, Logo, NavLinks, NavItem, RightSide, Avatar } from './style';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import LogoImg from '../../assets/logo.svg';
import useAuthFlow from '../../auth/useAuthFlow';
import  ButtonGradient from '../Button';

export default function Navbar() {
  const { logoutUser } = useAuthFlow();
  const navigate = useNavigate();

  return (
    <Container>
      <Logo>
        <img src={LogoImg} alt="WattNow Logo" />
      </Logo>
      <NavLinks>
        <NavItem onClick={() => navigate('/dashboard')}>Dashboard</NavItem>
        <NavItem onClick={() => navigate('/community')}>Community</NavItem>
        <NavItem onClick={() => navigate('/locations')}>Important Locations</NavItem>
      </NavLinks>
      <RightSide>
        <ButtonGradient onClick={logoutUser}>Sign Out</ButtonGradient>
        <Avatar><FaUserCircle size={22} /></Avatar>
      </RightSide>
    </Container>
  );
}