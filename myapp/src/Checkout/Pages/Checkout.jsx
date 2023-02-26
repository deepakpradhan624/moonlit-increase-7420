import { Stack } from "@chakra-ui/react";
import React from "react";
import CheckoutSummary from "../Components/CheckoutSummary";
import CheckoutYourDetails from "../Components/CheckoutYourDetails";

const Checkout = () => {
  return (
    <>
      <Stack direction={["column", "column", "row"]} w={"100%"}>
        {/* <CheckoutSummary /> */}
        <CheckoutYourDetails />
      </Stack>
    </>
  );
};

export default Checkout;
