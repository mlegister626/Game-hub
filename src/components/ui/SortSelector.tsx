import React from "react";
import { Menu, Portal, Button } from "@chakra-ui/react";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  currentSortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, currentSortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];
  const currentSortLabel =
    sortOrders.find((order) => order.value === currentSortOrder)?.label ||
    "Relevance";

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          {currentSortLabel}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOrders.map((order) => (
              <Menu.Item
                key={order.value}
                value={order.value}
                onClick={() => onSelectSortOrder(order.value)}
              >
                {order.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
