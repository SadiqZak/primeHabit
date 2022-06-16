import React, { useState } from 'react'
import {
    Flex,
    Text,
    IconButton,
    Divider,
    Avatar,
    Heading, VStack
} from '@chakra-ui/react'
import {
    FiMenu,
    FiHome,
    
} from 'react-icons/fi'
import { IoPawOutline } from 'react-icons/io5'
import { NavItem } from "../Components/NavItem";

export const Sidebar = () => {
    const [navSize, changeNavSize] = useState("large")
    return (
        <Flex
            pos="sticky"
            // left="5"
            h="90vh"
            // marginTop="2.5vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderBottomRightRadius={navSize == "small" ? "15px" : "30px"}
            w={navSize == "small" ? "75px" : "250px"}
            flexDir="column"
            backgroundColor="sidebar"
            color="white"
            justifyContent="space-between"
        >
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                as="nav"
            >
                <IconButton
                    background="none"
                    mt={5}
                    _hover={{ background: 'none' }}
                    icon={<FiMenu />}
                    onClick={() => {
                        if (navSize == "small")
                            changeNavSize("large")
                        else
                            changeNavSize("small")
                    }}
                />
                <NavItem navSize={navSize} icon={FiHome} title="Home" description="This is the description for the dashboard." /> 
                {/* <NavItem navSize={navSize} icon={FiLabel} title="Home" description="This is the description for the dashboard." />  */}
            </Flex>

            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                mb={4}
            >
                <Divider display={navSize == "small" ? "none" : "flex"} />
                <Flex mt={4} align="center">
                    <Avatar size="sm" />
                    <Flex flexDir="column" ml={4} display={navSize == "small" ? "none" : "flex"}>
                        <Heading as="h3" size="sm">Sylwia Weller</Heading>
                        <Text color="gray">Admin</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}
