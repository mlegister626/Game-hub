import useGenres, { type Genre } from "@/hooks/useGenres";
import getCroppedImageURL from "@/services/Image-url";
import {
  List,
  HStack,
  Text,
  Image,
  Spinner,
  Button,
  Group,
} from "@chakra-ui/react";

interface Props {
  onSelectGenre?: (genre: Genre) => void;
  selectedGenre?: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner size="xl" />;

  return (
    <List.Root>
      {data.map((genre) => (
        <List.Item key={genre.id}>
          <HStack align="start" spacing={3}>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedImageURL(genre.image_background)}
            />
            <Button
              flex="1"
              width="100%"
              whiteSpace="normal"
              overflowWrap="break-word"
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => onSelectGenre?.(genre)}
              fontSize="lg"
              variant="ghost"
            >
              {genre.name}
            </Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
