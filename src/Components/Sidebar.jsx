import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
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
import { NavItem } from "../Components/NavItem";

export const Sidebar = () => {
    const [navSize, changeNavSize] = useState("large")
    const navigate = useNavigate()
    return (
        <Flex
            pos={navSize==="small"? "sticky": "absolute"}
            // left="5"
            h="89.5vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderBottomRightRadius={navSize === "small" ? "15px" : "30px"}
            w={navSize == "small" ? "75px" : "250px"}
            flexDir="column"
            backgroundColor="sidebar"
            color="white"
            justifyContent="space-between"
        >
            <Flex
                p="5%"
                flexDir="column"
                alignItems={navSize === "small" ? "center" : "flex-start"}
                as="nav"
            >
                <IconButton
                    background="none"
                    mt={5}
                    _hover={{ background: 'none' }}
                    icon={<FiMenu />}
                    onClick={() => {
                        if (navSize === "small")
                            changeNavSize("large")
                        else
                            changeNavSize("small")
                    }}
                />
                <NavItem onClick={()=>navigate('/')} navSize={navSize} icon={FiHome} title="Home" /> 
                {/* <NavItem navSize={navSize} icon={FiLabel} title="Home" description="This is the description for the dashboard." />  */}
            </Flex>

            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize === "small" ? "center" : "flex-start"}
                mb={4}
            >
                <Divider display={navSize == "small" ? "none" : "flex"} />
                <Flex mt={4} align="center">
                    <Avatar size="sm" />
                    <Flex flexDir="column" ml={4} display={navSize === "small" ? "none" : "flex"}>
                        <Heading as="h3" size="sm">Adarsh Balika</Heading>
                        <Text color="gray">Admin</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}
