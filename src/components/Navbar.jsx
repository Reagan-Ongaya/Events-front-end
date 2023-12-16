import { Link } from "react-router-dom"

import { Box, Flex, HStack } from "@chakra-ui/react"
import {PhoneIcon, SpinnerIcon} from '@chakra-ui/icons'

export const Navbar = () => {
    return (
        <Box px = {4} >
            <Flex justifyContent={'space-between'}>
                <HStack spacing={8} h={20}>
                 <SpinnerIcon w={10} h={10} color='blue'/>
                    <HStack spacing={5}>
                        <Link to={"/"} > Home</Link>
                        <Link to={"/add-event"}>Add-event</Link>
                    </HStack>
                </HStack>
                <HStack h={20}>
                   <PhoneIcon w={5} h={5} color="blue" /> 
                </HStack>

            </Flex>
        </Box>
    )
}
