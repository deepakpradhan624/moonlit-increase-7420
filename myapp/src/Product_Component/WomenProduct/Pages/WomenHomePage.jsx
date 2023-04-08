import React from "react";
import WomenProductList from "../Component/WomenProductList"
import WomenSidebar from "../Component/WomenSidebar";
import { Stack } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <>
      <Stack direction={["column", "column", "row"]} margin="3" padding="3">
        <WomenSidebar  />

        <WomenProductList  />
      </Stack>
    </>
  );
};

export default HomePage;
