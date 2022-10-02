import { HStack, StackProps, Icon, Text, Flex } from "@chakra-ui/react"
import { AiFillApple, AiFillAlert, AiFillBank } from "react-icons/ai"

export interface FeatureProps extends StackProps {
  icon: ElementType
}

export const Feature = (props: FeatureProps) => {
  const { icon, children, ...rest } = props
  return (
    <HStack spacing="24px" {...rest}>
      <Icon as={icon} boxSize="48px"></Icon>
      <Text fontSize="18px" fontWeight="700px">
        {children}
      </Text>
    </HStack>
  )
}

export const Features = () => {
  return (
    <Flex alignItems="center" justifyContent="center" mt="40px">
      <HStack spacing="40px">
        <Feature icon={AiFillApple}>Feature 1</Feature>
        <Feature icon={AiFillAlert}>Feature 2</Feature>
        <Feature icon={AiFillBank}>Feature 3</Feature>
      </HStack>
    </Flex>
  )
}
