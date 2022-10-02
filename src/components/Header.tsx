import { Box, BoxProps, Text, Heading, Stack } from "@chakra-ui/react"

export interface HeaderProps {
  title: string
  subTitle?: string
}
export const Header = (headerProps: HeaderProps) => {
  const { title, subTitle } = headerProps
  return (
    <Box as="section" bg="#6b46c1" color="#F7FAFC" pt="90" pb="200">
      <Heading as="h2" fontWeight="800" fontSize="48">
        {title}
      </Heading>
      {subTitle && (
        <Text fontWeight="500" fontSize="24" pt="16px">
          {subTitle}
        </Text>
      )}
    </Box>
  )
}
