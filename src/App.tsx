import { Grid, GridItem, Stack, HStack, Box } from "@chakra-ui/react";
import NavBar from "@/components/ui/NavBar";
import GameGrid from "./components/ui/GameGrid";
import GenreList from "./components/ui/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/ui/PlatformSelector";
import usePlatforms from "./hooks/usePlatforms";
import type { Platform } from "@/hooks/usePlatforms";
import { type Genre } from "@/hooks/useGenres";
import SortSelector from "./components/ui/SortSelector";
import GameHeading from "./components/ui/GameHeading";
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
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
        lg: "240px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <GridItem
        area={"aside"}
        bg=""
        display={{ base: "none", lg: "block" }}
        paddingX="5px"
      >
        <GenreList
          selectedGenre={gameQuery.genre}
          onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
        />
      </GridItem>
      <GridItem area={"main"} bg="">
        <GameHeading gameQuery={gameQuery} />
        <HStack marginBottom={5}>
          <PlatformSelector
            onSelectPlatform={(selectedPlatform) =>
              setGameQuery({ ...gameQuery, platform: selectedPlatform })
            }
            selectedPlatform={gameQuery.platform}
          />
          <SortSelector
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
            currentSortOrder={gameQuery.sortOrder}
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
