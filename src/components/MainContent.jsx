import React from 'react'
import { Box, Flex } from '@chakra-ui/react' 
import Nav from './Nav'

function MainContent() {
  return (
    <Box flex="1" >
        <Nav/>
        <Flex bg={'orange'} minH={'90%'}>
          This is the main component
        </Flex>
      </Box>
  )
}

export default MainContent
