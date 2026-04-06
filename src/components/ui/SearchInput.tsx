import React from "react";
import { Flex, HStack, Input, InputGroup } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup startAddon=<BsSearch />>
      <Input
        borderRadius={20}
        placeholder="Search Games..."
        variant="filled"
        _hover={{ bg: "white" }}
      />
    </InputGroup>
  );
};

export default SearchInput;
