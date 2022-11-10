import Container from "./styles/Container.styled";
import Button from "./styles/Button.styled";
import Flex from "./styles/Flex.styled";
import StyledHeader, { Image, Logo, Nav } from "./styles/Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="/images/logo.png" />
          <div>
            <Button color="#a62440">Apply Courses</Button>
            <Button bg="#a62440">Talk to Adviser</Button>
          </div>
        </Nav>

        <Flex>
          <div>
            <h1>The IT Career of Your Dreams Starts Here!</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
              repellat officiis eius voluptatum magni aspernatur!
            </p>
            <Button bg="#a62440">Start Your New Carier</Button>
          </div>
          <Image src="./images/hero.jpg" />
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
