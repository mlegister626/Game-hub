import Game from "@/hooks/useGames";
import { Badge } from "@chakra-ui/react/Badge";
import { BiBorderRadius } from "react-icons/bi";
interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  return (
    <Badge
      fontSize="14px"
      paddingX="8px"
      borderRadius="4px"
      colorScheme={score > 75 ? "green" : score > 60 ? "yellow" : "red"}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
