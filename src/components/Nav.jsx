import React from 'react'
import { Box, Flex, Text, Image, IconButton } from '@chakra-ui/react'
import SearchBar from './SearchBar'
import SettingsIcon from '../icons/SettingsIcon'
import AlertsIcon from '../icons/AlertsIcon'



function Nav() {
  return (
    <Flex width={'100%'} height={'10%'} justifyContent="space-between" alignItems="center">

      <Box mx="50px">
        <Text fontWeight="bold" fontFamily='sans-serif' fontSize='xx-large' color="#343C6A">
          Overview
        </Text>
      </Box>
      <Flex mx="20px" alignItems="center" justifyContent="space-evenly" width="40%" >
        <SearchBar />
        <IconButton
          icon={<SettingsIcon />}
          border='none'
          height="50px"
          width="50px"
          borderRadius="50%"
        />
        <IconButton
          icon={<AlertsIcon />}
          border='none'
          height="50px"
          width="50px"
          borderRadius="50%"
        />
        <Image
          borderRadius='50%'
          src='https://bit.ly/dan-abramov'
          alt="customers profile"
          boxSize="90px"
          objectFit='cover'
        />
      </Flex>
    </Flex>
  )
}

export default Nav
