import { Badge } from "@chakra-ui/react/badge";
interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  let colorConfiguration = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Badge
      fontSize="12px"
      paddingX="8px"
      borderRadius="4px"
      colorPalette={colorConfiguration}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
