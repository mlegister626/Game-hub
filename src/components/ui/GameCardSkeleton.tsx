import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root width="300px" borderRadius="10px" overflow="hidden">
      <Skeleton width="100%" height="200px" />
      <Card.Body>
        <SkeletonText mt="4" noOfLines={2} spacing="4" />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
