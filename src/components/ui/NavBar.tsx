import { HStack, Image } from "@chakra-ui/react";
import logo from "@/assets/logo.webp";
import { ColorModeButton } from "./color-mode";
const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
