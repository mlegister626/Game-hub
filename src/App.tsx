import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "@/components/ui/NavBar";
import GameGrid from "./components/ui/GameGrid";
import GenreList from "./components/ui/GenreList";

const App = () => {
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
        <GenreList />
      </GridItem>
      <GridItem area={"main"} bg="">
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
