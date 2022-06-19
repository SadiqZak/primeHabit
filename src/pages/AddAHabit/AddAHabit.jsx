import { Flex, VStack, Heading, Input, Button, HStack, Box } from '@chakra-ui/react'
import React from 'react'
import { Sidebar } from '../../Components/Sidebar'

export const AddAHabit = () => {
  return (
    <Flex pos="relative" h="100%" w="100%" >
      <Sidebar/>
    <VStack margin="0 auto">
      <Heading>My Habit</Heading>
      <VStack> {/* Submitting habit */}
        <Flex>
        <Input/>
        <Button>Add</Button>
        </Flex>
      </VStack>
      <VStack> {/* Displaying habit */}
          <Box>Check1</Box>
          <Box>Check2</Box>
        </VStack>
    </VStack>
    </Flex>
  )
}
