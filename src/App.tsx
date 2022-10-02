import "./App.css"
import { SimpleBox, SimpleBoxAsSection } from "./components/SimpleBox"
import { Simple4BoxFlex } from "./components/SimpleFlex"
import { Text } from "@chakra-ui/react"
import { SimpleStack } from "./components/SimpelStack"
import { SimpleStyling } from "./components/SimpleStyling"
import { Header, HeaderProps } from "./components/Header"
import { Box } from "@chakra-ui/react"
import { Pricing } from "./components/Pricing"
import { Features } from "./components/Feature"
import { SampleForm } from "./components/FormExample"

function App() {
  return (
    <Box width="full" textAlign="center">
      {/* <SimpleBox>
        <Text>Simple Box as Div</Text>
      </SimpleBox>
      <SimpleBoxAsSection>
        <Text>Simple Box as Section</Text>
      </SimpleBoxAsSection> */}
      {/* <Simple4BoxFlex /> */}
      {/* <SimpleStack /> */}
      {/* <SimpleStyling /> */}
      <Header
        title="Simple pricing for your business"
        subTitle="Plans that are carefully crafted to suit your business"
      />
      <Pricing />
      <Features />
      <SampleForm />
    </Box>
  )
}

export default App
