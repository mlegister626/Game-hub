import useGenres, { type Genre } from "@/hooks/useGenres";
import getCroppedImageURL from "@/services/Image-url";
import { List, HStack, Text, Image, Spinner, Button } from "@chakra-ui/react";

interface Props {
  onSelectGenre?: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner size="xl" />;

  return (
    <List.Root>
      {data.map((genre) => (
        <List.Item key={genre.id} PaddingY="5px">
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedImageURL(genre.image_background)}
            />
            <Button
              onClick={() => onSelectGenre?.(genre)}
              fontSize="lg"
              variant="link"
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
