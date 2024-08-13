

import { SettingsIcon } from '@chakra-ui/icons'
import {
  Box,
  Flex,
  Icon,
  Text
} from '@chakra-ui/react'
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
} from 'react-icons/fi'


const LinkItems = [
  { name: 'Dashboard', icon: FiHome },
  { name: 'Transaction', icon: FiTrendingUp },
  { name: 'Accounts', icon: FiCompass },
  { name: 'Investments', icon: FiStar },
  { name: 'Credit cards', icon: FiSettings },
  { name: 'Loans', icon: FiSettings },
  { name: 'Services', icon: FiSettings },
  { name: 'My Privileges', icon: FiSettings },
  { name: 'Settings', icon: FiSettings },
]



const NavItem = ({ icon, children }) => {
  return (
    <Box
      as="a"
      width="100%"
      href="#"
     
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        my='50px'
         pl='30px'
        cursor="pointer"
        _hover={{
          bg: 'blue',
          color: 'white',
        }}
      >
        {icon && (
          <Icon
            mr="25"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  )
}

const linkItemsContents = LinkItems.map((link) => (
  <NavItem key={link.name} icon={link.icon}>
    {link.name}
  </NavItem>
))


const Sidebar = () => {
  return (
    <Flex flexDir='column' alignItems='center' width='10%' h="100%" borderRight='1px solid gray'>
      <Box
      width="100%">
      <Flex
        align="center"
        mt='20px'
        mb = '10px'
        ml='30px'
      >
          <Icon
            mr="25"
            fontSize="16"
            as={SettingsIcon}
          />
        
        <Text fontWeight="bold" fontFamily='sans-serif' fontSize='xx-large' color="#343C6A">
              BankDash
        </Text>
      </Flex>
    </Box>












      <Box
      width="100%"
      >
        {
          linkItemsContents
        }
      </Box>
    </Flex>
  )
}

export default Sidebar





