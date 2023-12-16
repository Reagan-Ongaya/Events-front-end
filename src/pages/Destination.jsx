import { useState } from "react";
import { Box, Flex, FormControl, FormLabel, HStack, Heading, Input, Stack } from "@chakra-ui/react";

export const Destination =() => {
    const initialData = {
        destination :'',
        location :'',
        price :'',
        start_date:'',
        end_date:''
    }

    const [formData, setFormData] = useState(initialData);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    console.log(formData);
    
    return <Flex align={'center'} justify={'center'}>
        <Stack>
            <Heading fontSize={'-moz-initial'} fontFamily={'cursive'}>Destination</Heading>

            <Box rounded={'lg'} bg={'blue'} p={8}>
                <Stack>
                    <FormControl isRequired>
                        <FormLabel htmlFor="destination">Name of destination</FormLabel>
                        <Input name='Name' placeholder="Kenya" autoComplete="destination" value={formData['destination']} onChange={handleChange} />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel  htmlFor="location">Location</FormLabel>
                        <Input name='Name' placeholder="Nairobi" autoComplete="location" value={formData['location']} onChange={handleChange}/>
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Price</FormLabel>
                        <Input Amount='' placeholder="Amount ie. Ksh/$" value={formData['price']} onChange={handleChange}/>
                    </FormControl>
                    
                    <HStack>
                      <FormControl isRequired>
                        <FormLabel>Start Date</FormLabel>
                        <Input name='time' type="datetime-local" value={formData['start_date']} onChange={handleChange} />
                      </FormControl>
                    
                      <FormControl isRequired>
                        <FormLabel>End Date</FormLabel>
                        <Input name='time' type="datetime-local" value={formData['end_date']} onChange={handleChange}/>
                      </FormControl>
                    </HStack>

                    <Stack padding={2} bg={"black"}>
                        <button>Book Now</button>
                    </Stack>
                </Stack>
               
            </Box>
        </Stack>

    </Flex>
};