import { Heading, Box } from "@chakra-ui/react";
import type { GameQuery } from "@/App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`;
  return (
    <Box marginBottom={5}>
      <Heading as="h1" size="2xl">
        {heading}
      </Heading>
    </Box>
  );
};

export default GameHeading;
