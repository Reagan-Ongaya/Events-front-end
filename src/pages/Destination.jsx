import { useState } from "react";
import { Box, Flex, FormControl, FormLabel, HStack, Heading, Input, Stack } from "@chakra-ui/react";

export const Destination =() => {
    //initializing our data
    const initialData = {
        name :'',
        location :'',
        price :'',
        start_date:'',
        end_date:''
    }

    const [formData, setFormData] = useState(initialData);
    const [isLoading, setIsLoading] = useState(false);
    
    //handling changes on the form
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    };

    const handleFormBook = (e) => {
        e.preventDefaul()

        setIsLoading(true);

        fetch(`${BASE_URL}/events`,{
            method :'POST',
            hearder: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => {
             //assume operation was a success

             //resetting form
             setFormData(initialData);

             //stoppimg the loading
             setIsLoading(false);
            })
            //catching error
            .catch((err) => {
                setIsLoading(false);
                console.log(err)  ;            
            });

    };

    //creating the form
    return ( 
    <Flex align={'center'} justify={'center'}>
        <Stack>
            <Heading fontSize={'50'} fontFamily={'fantasy'}>Destination</Heading>

            <Box as="form" rounded={'lg'} bg={'purple'} p={5} onSubmit={handleFormBook}>
                <Stack>
                    <HStack>
                    <FormControl isRequired>
                        <FormLabel htmlFor="destination">Name</FormLabel>
                    </FormControl>
                    <FormControl>
                        <Input
                            name='name' 
                            placeholder="Kenya" 
                            autoComplete="name" 
                            value={formData['destination']} 
                            onChange={handleChange} 
                        />
                    </FormControl>
                    </HStack>
                    
                    <HStack>
                    <FormControl isRequired>
                        <FormLabel  htmlFor="location">Location</FormLabel>
                    </FormControl> 
                    <FormControl>  
                        <Input 
                            name='location' 
                            placeholder="Nairobi" 
                            autoComplete="location" 
                            value={formData['location']} 
                            onChange={handleChange}
                        />
                    </FormControl>
                    </HStack>
                    
                    <HStack>
                    <FormControl isRequired>
                        <FormLabel>Price</FormLabel>
                    </FormControl>
                    <FormControl>
                        <Input
                            name='price'
                            placeholder="Ksh/$" 
                            value={formData['price']} 
                            onChange={handleChange}
                        />
                    </FormControl>
                    </HStack>
                    
                    <HStack>
                     <FormControl isRequired>
                        <FormLabel>Start Date</FormLabel>
                        <Input 
                            name='start_date' 
                            type="datetime-local" 
                            value={formData['start_date']} 
                            onChange={handleChange} 
                        />
                      </FormControl>
                    
                    
                      <FormControl isRequired>
                        <FormLabel>End Date</FormLabel>
                        <Input 
                            name='end_date' 
                            type="datetime-local" 
                            value={formData['end_date']} 
                            onChange={handleChange}
                        />

                      </FormControl>
                    </HStack>
 
                    <Stack p={8}>
                        <button
                           isLoading={isLoading}
                           loadingText='Booking, just a sec...'
                           colorScheme='teal'
                           variant='outline'
                        > 
                        Book now </button>
                    </Stack>
                </Stack>
               
            </Box>
        </Stack>

    </Flex>
    )
};