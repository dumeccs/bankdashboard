import {
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const SearchBar = () => {
  return (
    <Flex justifyContent="center" mt={4}>
      <InputGroup size="md" width="300px">
        <Input
          placeholder="Search this item"
          borderRadius="full"
          variant="outline"
        />
        <InputRightElement>
          <IconButton
            aria-label="Search"
            icon={<SearchIcon />}
            borderRadius="full"
            size="sm"
          />
        </InputRightElement>
      </InputGroup>
    </Flex>
  )
}

export default SearchBar
