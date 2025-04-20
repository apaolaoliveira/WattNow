import styled from 'styled-components';
import PatternBg from '../../assets/pattern.svg';

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid #e0e0e0;
`;

export const Logo = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-weight: 500;

  &:hover {
    color: ${({ theme }) => theme.COLORS.BLUE};
  }
`;

export const GradientSection = styled.section`
  background: ${({ theme }) => theme.COLORS.GRADIENT_HORIZONTAL};
  padding: 100px 20px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.BLACK};
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  max-width: 600px;
  margin: 25px 0;
`;

export const SectionParent = styled.div`
  background: ${({ theme }) => theme.COLORS.GRADIENT_HORIZONTAL};
  background-image: 
    linear-gradient(90deg, ${({ theme }) => theme.COLORS.BLUE}, ${({ theme }) => theme.COLORS.CYAN}, ${({ theme }) => theme.COLORS.GREEN}),
    url(${PatternBg});
  background-repeat: repeat;
  background-size: cover;
  background-blend-mode: overlay;
`;


export const Section = styled.section`
  padding: 80px 20px;
  text-align: center;

  &#about {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
  }

`;

export const Card = styled.div`
  background: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  margin: 15px;
  width: 300px;
  display: inline-block;

  &.impact {
    width: 40%;
  }

  &.testimonial {
    height: 250px;
    align-items: center;
  }

  &.teammate {    
    img {
      border-radius: 50%;
      width: 100px;
      height: 100px;
    }

    a {
      color: ${({ theme }) => theme.COLORS.BLACK};

      svg {
        width: 25px;
        height: 25px;
      }
    }
  }
`;

export const Footer = styled.footer`
  background: ${({ theme }) => theme.COLORS.CYAN};
  padding: 30px 10px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.BLACK};
`;