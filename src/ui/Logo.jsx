import styled from "styled-components";
import { UseDarkMode } from "../context/DarkModeContext";
import light from "../data/img/logo-light.png";
import dark from "../data/img/logo-dark.png";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const { isDarkMode } = UseDarkMode();
  const src = isDarkMode ? dark : light;
  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
