import { Box, Flex } from "@chakra-ui/react"

// Flex is Box with display: flex or a flex box in CSS
// Allows to align and distribute space around a box
// Flex container comes with a direction that decides whether items are
// aligned horizontally or vertically
// Can provide justify & align to adjust space between flex items and also to align items within the box
//
export const Simple4BoxFlex = () => {
  return (
    <Flex justify="flex-end" align="center" h="400px" w="1000px">
      <Box h="200px" w="100px" bg="red">
        Item 1
      </Box>
      <Box h="150px" w="150px" bg="green">
        Item 2
      </Box>
      <Box h="100px" w="200px" bg="yellow">
        Item 3
      </Box>
      <Box h="50px" w="300px" bg="blue">
        Item 4
      </Box>
    </Flex>
  )
}
