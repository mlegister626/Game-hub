import { HStack, Image } from "@chakra-ui/react";
import logo from "@/assets/logo.webp";
import { ColorModeButton } from "./color-mode";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (query: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="15px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
