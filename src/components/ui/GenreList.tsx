import useGenres from "@/hooks/useGenres";
import getCroppedImageURL from "@/services/Image-url";
import { List, HStack, Text, Image, Spinner } from "@chakra-ui/react";
import { PiAddressBook } from "react-icons/pi";

const GenreList = () => {
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
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
