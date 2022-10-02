import { Box, BoxProps } from "@chakra-ui/react"

// creates a simple box with div
// Box is just a div
// We can style a box anyway we style a normal div
// All chakra components are derived from Box

export const SimpleBox = (props: BoxProps) => {
  return <Box h="100px" w="100px" bg="blue" {...props}></Box>
}

// Creates a box as a section
export const SimpleBoxAsSection = (props: BoxProps) => {
  return <Box h="100px" w="100px" bg="green" as="section" {...props}></Box>
}
