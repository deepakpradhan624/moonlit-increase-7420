import React from "react";
import ProductList from "../Component/ProductList";
import Sidebar from "../Component/Sidebar";
import { Stack } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <>
      <Stack direction={["column", "column", "row"]} margin="3" padding="3">
        <Sidebar  />

        <ProductList  />
      </Stack>
    </>
  );
};

export default HomePage;
