import React from 'react'
import {Flex, Heading, Box, Container, Stack, Button} from '@chakra-ui/react'

export const Home = () => {
  return (
    <Flex flexDir="column" flexGrow="1" w="100%" h="100%" padding="2rem" gap="0.5rem">
      <Flex justifyContent="space-between">
        <Heading as="h2" size="xl">Welcome, AdarshBalika</Heading>
        <Button>Add Habit</Button>
      </Flex>
      <Stack direction="row" wrap="wrap" gap="1rem" justifyContent="center">
      <Flex flexDir="column" gap="0.5rem" border="1px" minHeight="100px" width="250px" p="1">
        <Heading as="h4" size="md">Completed</Heading>
        <Heading  as="h4" size="md">4</Heading>
        <p>total hours</p>
      </Flex>
      <Flex flexDir="column" gap="0.5rem" border="1px" minHeight="100px" width="250px" p="1">
        <Heading as="h4" size="md">In Progress</Heading>
        <Heading  as="h4" size="md">4</Heading>
        <p>total hours</p> 
      </Flex>
      <Flex flexDir="column" gap="0.5rem" border="1px" minHeight="100px" width="250px" p="1">
        <Heading as="h4" size="md">Overdue</Heading>
        <Heading  as="h4" size="md">4</Heading>
        <p>total hours</p>
      </Flex>
      <Flex flexDir="column" gap="0.5rem" border="1px" minHeight="100px" width="250px" p="1">
        <Heading as="h4" size="md">Total</Heading>
        <Heading  as="h4" size="md">12</Heading>
        <p>total hours</p>
      </Flex>
      </Stack>
      
    </Flex>
  )
}
