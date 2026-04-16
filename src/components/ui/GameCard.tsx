import { Card, Image, HStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageURL from "@/services/Image-url";
import type { Game } from "@/hooks/useGames";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root>
      <Image src={getCroppedImageURL(game.background_image)} />
      <Card.Body>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconList platforms={game.parent_platforms} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Card.Title fontSize="2xl">
          {game.name} <Emoji rating={game.rating_top}></Emoji>
        </Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
