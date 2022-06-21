import React, { useState } from 'react'
import {useNavigate, Link} from 'react-router-dom'
import {
    Flex,
    Text,
    IconButton,
    Divider,
    Avatar,
    Heading, useMediaQuery
} from '@chakra-ui/react'
import {
    FiMenu,
    FiHome,  
} from 'react-icons/fi'
import { IoIosCreate } from "react-icons/io";
import { NavItem } from "../Components/NavItem";

export const Sidebar = () => {
    const [navSize, changeNavSize] = useState("small")
    const navigate = useNavigate()
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)")
    return (
            <Flex
            top="10vh"
            height="90vh"
            pos={navSize==="small"? "sticky":"absolute"}
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderBottomRightRadius={navSize === "small" ? "15px" : "30px"}
            w={navSize == "small" ? "75px" : "250px"}
            flexDir="column"
            backgroundColor="sidebar"
            color="white"
            justifyContent="space-between"
            zIndex="99"

        >
            <Flex
                p="5%"
                flexDir="column"
                alignItems={navSize === "small" ? "center" : "flex-start"}
                as="nav"
                w="100%"
            >
                <IconButton
                    background="none"
                    mt={5}
                    _hover={{ background: 'none' }}
                    icon={<FiMenu />}
                    onClick={() => {
                        if(isNotSmallerScreen){
                            if (navSize === "small")
                                changeNavSize("large")
                            else
                                changeNavSize("small")
                        }else{
                            changeNavSize("small")
                        }
                
                }
                        }
                      
                />
                <Link className='link-tag' to="/"><NavItem navSize={navSize} icon={FiHome} title="Home" /></Link>
                <Link className='link-tag' to="/addahabit"><NavItem navSize={navSize} icon={IoIosCreate} title="Habit" /></Link>
                 
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
