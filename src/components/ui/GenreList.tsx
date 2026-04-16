import useGenres, { type Genre } from "@/hooks/useGenres";
import getCroppedImageURL from "@/services/Image-url";
import {
  List,
  HStack,
  Image,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";

interface Props {
  onSelectGenre?: (genre: Genre) => void;
  selectedGenre?: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner size={"xl"} />;

  return (
    <>
      <Heading fontSize="2xl" paddingBottom={4}>
        Genres
      </Heading>
      <List.Root>
        {data.map((genre) => (
          <List.Item key={genre.id}>
            <HStack align="start">
              <Image
                boxSize={"32px"}
                borderRadius={8}
                src={getCroppedImageURL(genre.image_background)}
                objectFit="cover"
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
    </>
  );
};

export default GenreList;
