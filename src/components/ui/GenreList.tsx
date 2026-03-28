import useGenres from "@/hooks/useGenres";
import getCroppedImageURL from "@/services/Image-url";
import { List, HStack, Text, Image } from "@chakra-ui/react";
import { PiAddressBook } from "react-icons/pi";

const GenreList = () => {
  const { data } = useGenres();
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
