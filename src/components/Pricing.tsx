import {
  Box,
  VStack,
  HStack,
  Flex,
  Text,
  Heading,
  Button,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react"
import { MdCheckCircle } from "react-icons/md"

const Price = () => {
  return (
    <Box bg="purple.100" p="60px" h="320px">
      <VStack spacing="4">
        <Text fontWeight="800" fontSize="24">
          Premium PRO
        </Text>
        <Heading as="h3" fontSize="60px">
          $329
        </Heading>
        <Text color="#171923" fontSize="18" fontWeight="500">
          priced just once
        </Text>
        <Button colorScheme="purple" size="lg" variant="solid">
          Get Started
        </Button>
      </VStack>
    </Box>
  )
}

const Features = () => {
  return (
    <Box bg="white" textAlign="left" p="60px" h="320px">
      <Text>Access following features under this plan:</Text>
      <List spacing={3} pt="20px">
        <ListItem>
          <ListIcon as={MdCheckCircle} color="#6b46c1" />
          International calling and messaging API
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="#6b46c1" />
          Additional phone numbers
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="#6b46c1" />
          Automated messages via Zapier
        </ListItem>
        {/* You can also use custom icons from react-icons */}
        <ListItem>
          <ListIcon as={MdCheckCircle} color="#6b46c1" />
          24/7 support and consulting
        </ListItem>
      </List>
    </Box>
  )
}

export const Pricing = () => {
  return (
    <Flex alignItems={"center"} justifyContent="center" mt="-156px">
      <Box borderRadius="12px" overflow="hidden">
        <Flex>
          <Price />
          <Features />
        </Flex>
      </Box>
    </Flex>
  )
}
