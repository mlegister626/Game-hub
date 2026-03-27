import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe, BsNintendoSwitch } from "react-icons/bs";
import Platform from "@/hooks/useGames";
import { Icon, HStack } from "@chakra-ui/react";
import type { IconType } from "react-icons";
interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    nintendo: BsNintendoSwitch,
    web: BsGlobe,
  };
  return (
    <HStack marginY={"10px"}>
      {platforms.map((p) => (
        <Icon
          as={iconMap[p.platform.slug]}
          key={p.platform.id}
          color="gray.500"
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
