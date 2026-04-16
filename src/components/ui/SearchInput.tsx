import { useRef } from "react";
import { Input, InputGroup } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import "@/index.css";

interface Props {
  onSearch: (query: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (inputRef.current) onSearch(inputRef.current.value);
      }}
    >
      <InputGroup startAddon={<BsSearch />}>
        <Input
          ref={inputRef}
          borderRadius={20}
          placeholder="Search Games..."
          variant="flushed"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
