import React from "react";
import { Menu, Portal, Button } from "@chakra-ui/react";
const SortSelector = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Sort By
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="Relevance">Relevance</Menu.Item>
            <Menu.Item value="date">Date added</Menu.Item>
            <Menu.Item value="name">Name</Menu.Item>
            <Menu.Item value="Release Date">Release Date</Menu.Item>
            <Menu.Item value="Popularity">Popularity</Menu.Item>
            <Menu.Item value="Average Rating">Average Rating</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
