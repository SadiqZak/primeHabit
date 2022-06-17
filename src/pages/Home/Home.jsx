import React from 'react'
import {Flex, Heading, Box, Container, Stack} from '@chakra-ui/react'

export const Home = () => {
  return (
    <Flex flexDir="column" flexGrow="1" w="100%" h="100%" padding="2rem" gap="0.5rem">
      <Box>
        <Heading as="h2" size="xl">Welcome, AdarshBalika</Heading>
      </Box>
      <Stack direction="row">
      <Container flexDir="column" gap="0.5rem" border="1px" minHeight="100px" width="250px">
        <Heading as="h4" size="md">Completed</Heading>
        <Heading  as="h4" size="md">4</Heading>
        <p>total hours</p>
      </Container>
      <Container flexDir="column" gap="0.5rem" border="1px" minHeight="100px" width="250px">
        <Heading as="h4" size="md">Completed</Heading>
        <Heading  as="h4" size="md">4</Heading>
        <p>total hours</p>
      </Container>
      <Container flexDir="column" gap="0.5rem" border="1px" minHeight="100px" width="250px">
        <Heading as="h4" size="md">Completed</Heading>
        <Heading  as="h4" size="md">4</Heading>
        <p>total hours</p>
      </Container>
      <Container flexDir="column" gap="0.5rem" border="1px" minHeight="100px" width="250px">
        <Heading as="h4" size="md">Completed</Heading>
        <Heading  as="h4" size="md">4</Heading>
        <p>total hours</p>
      </Container>

      </Stack>
      
    </Flex>
  )
}
