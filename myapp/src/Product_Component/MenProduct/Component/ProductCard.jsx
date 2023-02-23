import React from "react";
import {
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

const ProductCard = ({ card }) => {
  return (
    <Card>
      <CardBody>
        <Image src={card.img} alt={card.name} />
      </CardBody>
      <Stack>
        <Heading size="md">{card.name}</Heading>
        <Text color={"blue.900"}>₹{card.price}</Text>
        <Text>Rating: {card.ratingImage}</Text>
        <Button colorScheme="orange">Add to Cart</Button>
      </Stack>
    </Card>
  );
};

export default ProductCard;
