import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

const ProductCard = ({ card }) => {
card.quantity=1;
  const [added,setadd]=useState(false)
  function addtocart(){

    let cart=JSON.parse(localStorage.getItem("cart"))||[]
    cart.push(card)
    localStorage.setItem("cart",JSON.stringify(cart))
    setadd(true)
    alert("Item add to the cart")
  }
  return (
    <Card>
      <CardBody>
        <Image src={card.img} alt={card.name} />
      </CardBody>
      <Stack>
        <Heading size="md">{card.name}</Heading>
        <Text color={"blue.900"}>₹{card.price}</Text>
        <Text>Rating: {card.ratingImage}</Text>
        <Button onClick={addtocart} colorScheme={added ? "teal" : "red"}>{added?"Added In Cart":"Add to Cart"}</Button>
      </Stack>
    </Card>
  );
};

export default ProductCard;
