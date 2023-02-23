/* eslint-disable react/jsx-pascal-case */
import {
    Container,
    Card,
    CardBody,
    Text,
    Avatar,
    CardHeader,
    Box,
    HStack,
    Heading,
    Stack,
  } from "@chakra-ui/react";
  import Floating_input from "./Floating_Input_Lebel";
  import React, { useEffect } from "react";
  import { useSelector } from "react-redux";
  import { useLocation, useNavigate } from "react-router-dom";
  
  const Login = () => {
    const { data } = useSelector((store) => store.auth);

  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (data.isAuth) {
      //  console.log("login page" ,state )
      if (state.from) {
        //  console.log("if inside state.from ",state.from )
        navigate(state.from, { replace: true });
      } else {
        navigate("/");
      }
    }
  }, [data.isAuth, navigate, state.from]);
    return (
      // maxW='full' centerContent
      <Container maxW="md" mt={6}>
        <Stack maxW={"full"} gap={20} align="stretch">
          <Card
            direction={"row"}
            alignItems={"center"}
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
            borderRadius={"0px"}
          >
            <CardHeader>
              <Avatar
                size="xl"
                name="Seg Ade"
                src="https://bit.ly/sage-adebayo"
              />
            </CardHeader>
            <CardBody direction="column">
              <HStack w={"200px"} p={2} borderBottom={"1px solid black"}>
                <Avatar
                  size="sm"
                  name="Seg Ade"
                  src="https://bit.ly/sage-adebayo"
                />
                <Heading fontWeight={"semibold"}>SIGN IN</Heading>
              </HStack>
              <Text fontSize="xl">sign in to proceed further</Text>
            </CardBody>
          </Card>
          <Box>
            <Floating_input/>
          </Box>
        </Stack>
      </Container>
    );
  };
  
  export default Login;
  