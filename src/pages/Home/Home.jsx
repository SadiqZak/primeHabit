import React from "react";
import { Flex, Heading, Box, Container, Stack, Button } from "@chakra-ui/react";
import { Sidebar } from "../../Components/Sidebar";

export const Home = () => {
  return (
    <Flex h="90vh" w="100%">
      <Sidebar />
      <Flex
        flexDir="column"
        textAlign="center"
        flexGrow="1"
        w="100%"
        h="100%"
        padding="2rem"
        gap="0.5rem"
      >
        <Flex justifyContent="center">
          <Heading as="h2" size="xl">
            Welcome, AdarshBalika
          </Heading>
        </Flex>
        <Flex w="100%" flexDirection="row" justifyContent="center" wrap="wrap" gap="1rem">
          <Flex
            flexDir="column"
            gap="0.5rem"
            border="1px"
            minHeight="100px"
            width="250px"
            p="1"
            cursor="pointer"
          >
            <Heading as="h4" size="md">
              Completed
            </Heading>
            <Heading as="h4" size="md">
              4
            </Heading>
            <p>total hours</p>
          </Flex>
          <Flex
            flexDir="column"
            gap="0.5rem"
            border="1px"
            minHeight="100px"
            width="250px"
            p="1"
            cursor="pointer"
          >
            <Heading as="h4" size="md">
              In Progress
            </Heading>
            <Heading as="h4" size="md">
              4
            </Heading>
            <p>total hours</p>
          </Flex>
          <Flex
            flexDir="column"
            gap="0.5rem"
            border="1px"
            minHeight="100px"
            width="250px"
            p="1"
            cursor="pointer"
          >
            <Heading as="h4" size="md">
              Overdue
            </Heading>
            <Heading as="h4" size="md">
              4
            </Heading>
            <p>total hours</p>
          </Flex>
          <Flex
            flexDir="column"
            gap="0.5rem"
            border="1px"
            minHeight="100px"
            width="250px"
            p="1"
            cursor="pointer"
          >
            <Heading as="h4" size="md">
              Total
            </Heading>
            <Heading as="h4" size="md">
              12
            </Heading>
            <p>total hours</p>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
