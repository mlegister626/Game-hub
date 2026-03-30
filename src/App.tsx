import { Grid, GridItem, Stack, Box } from "@chakra-ui/react";
import NavBar from "@/components/ui/NavBar";
import GameGrid from "./components/ui/GameGrid";
import GenreList from "./components/ui/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/ui/PlatformSelector";
import usePlatforms from "./hooks/usePlatforms";
import Platform from "@/hooks/usePlatforms";
import { type Genre } from "@/hooks/useGenres";
const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null,
  );
  return (
    <Grid
      templateAreas={{
        base: `"nav"
    "main"`,
        lg: `"nav nav"
    "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <GridItem
        area={"aside"}
        bg=""
        display={{ base: "none", lg: "block" }}
        paddingX="5px"
      >
        <GenreList
          selectedGenre={selectedGenre}
          onSelectGenre={(genre) => setSelectedGenre(genre)}
        />
      </GridItem>
      <GridItem area={"main"} bg="">
        <Box marginBottom="4">
          <PlatformSelector
            onSelectPlatform={(selectedPlatform) =>
              setSelectedPlatform(selectedPlatform)
            }
            selectedPlatform={selectedPlatform}
          />
        </Box>
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
        />
      </GridItem>
    </Grid>
  );
};

export default App;
