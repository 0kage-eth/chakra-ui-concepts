import { Heading, Text, TextProps } from "@chakra-ui/react"

export const SimpleItalicText = (props: TextProps) => {
  return <Text as="i" {...props}></Text>
}

export const SimpleWhiteColoredText = (props: TextProps) => {
  return <Text color="white" {...props}></Text>
}

export const SimpleOneLinedText = (props: TextProps) => {
  return <Text noOfLines={1} {...props}></Text>
}

export const SimpleHeadingText = (props: TextProps) => {
  return <Heading as="h3" fontSize="1xl" {...props}></Heading>
}
