import useAuthFlow from '../../auth/useAuthFlow';
import { GradientSection, HeroTitle, Section, SectionParent,
  Card, Footer, Navbar, Logo, NavLinks, NavLink } from './style';
import LogoImg from '../../assets/logo.svg';
import ButtonGradient from '../../components/Button';
import CommunityTreeImg from '../../assets/community-tree.svg';
import { FaGithub } from "react-icons/fa";
import { FaShoppingBag, FaUsers, FaUserCircle } from "react-icons/fa";

export default function LandingPage() {
  const { login, signup } = useAuthFlow();

  return (
    <>
      <Navbar>
        <Logo>
          <img src={LogoImg} alt="WattNow logo" />
        </Logo>
        <NavLinks>
          <NavLink href="#about">About WattNow</NavLink>
          <NavLink href="#impacts">Impacts</NavLink>
          <NavLink href="#testimonials">Testimonials</NavLink>
          <NavLink href="#team">Meet the Team</NavLink>
          <ButtonGradient onClick={login}>Login</ButtonGradient>
        </NavLinks>
      </Navbar>

      <GradientSection>
        <HeroTitle>
          Get rid of old tech and help your local community
        </HeroTitle>
        <ButtonGradient onClick={signup}>Join your neighbors in closing the loop</ButtonGradient>
      </GradientSection>

      <Section id='about'>
        <img src={CommunityTreeImg} alt="People around a tree ilustration" />
        <h2>We’re WattNow, and we’re here to lower e-waste and support local communities.</h2>
        <ButtonGradient>Find out how we work</ButtonGradient>
      </Section>

      <SectionParent>
        <Section id='impacts'>
          <h2>Impact</h2>

          <Card className='impact'>
            <FaShoppingBag size={40} color="#80BFFF" />
            <h3>5,000 tons of e-waste saved</h3>
            <ButtonGradient>See the stats</ButtonGradient>
          </Card>

          <Card className='impact'>
            <FaUsers size={40} color="#80BFFF" />
            <h3>1000 local communities supported</h3>
            <ButtonGradient>See the stats</ButtonGradient>
          </Card>
        </Section>

        <Section id='testimonials'>
          <h2>Testimonials</h2>

          <Card className='testimonial'>
            <FaUserCircle size={24} color="#80BFFF" />
            <h3>Brandon W</h3>
            <p> “WattNow helped me get monitors for my school’s computer lab, something we couldn’t afford before. 
                With their support...”</p>
            <ButtonGradient>Read full testimonial</ButtonGradient>
          </Card>

          <Card className='testimonial'>
            <FaUserCircle size={24} color="#80BFFF" />
            <h3>Pam K</h3>
            <p>
              “...I can’t afford to buy new technology, so there would have been no
              other way for me to get a new graphics card other than WattNow...”
            </p>
            <ButtonGradient>Read full testimonial</ButtonGradient>
          </Card>

          <Card className='testimonial'>
            <FaUserCircle size={24} color="#80BFFF" />
            <h3>Kai M</h3>
            <p>
              “...I didn’t know what to do with my broken old lightsaber toy from when I was a kid.
              WattNow helped me figure out how to properly dispose of it...” 
            </p>
            <ButtonGradient>Read full testimonial</ButtonGradient>
          </Card>
        </Section>
      </SectionParent>

      <Section id='team'>
        <h2>Meet the Team</h2>
        <Card className='teammate'>
          <img src="https://www.github.com/apaolaoliveira.png" alt="" />
          <h3>Paola Oliveira</h3>
          <p>FullStack Developer</p>
          <a href="https://www.github.com/apaolaoliveira">
            <FaGithub />
          </a>
        </Card>
        <Card className='teammate'>
          <img src="https://www.github.com/jessmcpeak.png" alt="" />
          <h3>Jess McPeak</h3>
          <p>Design Major @ UC Davis</p>
          <a href="https://www.gihub.com/jessmcpeak">
            <FaGithub />
          </a>
        </Card>
      </Section>

      <Footer>
        Made with ♥ at HackDavis 2025
      </Footer>
    </>
  );
}
