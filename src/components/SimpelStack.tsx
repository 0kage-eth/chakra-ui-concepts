import { Stack, Box, Flex, Text, HStack, VStack } from "@chakra-ui/react"
import {
  SimpleItalicText,
  SimpleWhiteColoredText,
  SimpleHeadingText,
  SimpleOneLinedText,
} from "./SimpleText"
// Stack as name suggests is used to stack elements together
// and apply space between them

export const SimpleStack = () => {
  return (
    <HStack align="center" spacing="50px">
      <Box h="100px" w="100px" bg="blue">
        <SimpleWhiteColoredText>Box 1</SimpleWhiteColoredText>
      </Box>
      <Box h="60px" w="60px" bg="red">
        <SimpleHeadingText>Box 2</SimpleHeadingText>
      </Box>
      <Box h="200px" w="200px" bg="green">
        <SimpleItalicText>Box 3</SimpleItalicText>
      </Box>
      <Box h="150px" w="150px" bg="aquamarine">
        <SimpleOneLinedText>
          {/* <Text> */}
          This is a one line box text Box 4 but I am making it into 3 lines.
          Lets see what happens
          {/* </Text> */}
        </SimpleOneLinedText>
      </Box>
    </HStack>
  )
}
