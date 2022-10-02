import { Box, Text, Stack, Heading, Button } from "@chakra-ui/react"

// simple styling includes margin, padding, background color
// for buttons, you can provide color scheme
// psuedo styles begin with _
// psuedo styles include hover, focus, disabled, active, before, after etc
// check https://chakra-ui.com/docs/styled-system/style-props for all style prop descriptions

export const SimpleStyling = () => {
  return (
    <Box m="40px" py="30" px="50" bg="yellow">
      <Heading as="h2"> My box</Heading>
      <Text color="blue.300" py="10" fontFamily="arial" fontSize="2xl">
        Hey you!
      </Text>
      <Button
        colorScheme="red"
        _hover={{ background: "blue" }}
        _focus={{ background: "green", color: "black" }}>
        Click me
      </Button>
    </Box>
  )
}
