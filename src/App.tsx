import styled from "@emotion/styled"
import { Alenka } from "./components/alenka"
import { Charts } from "./components/charts"
import { Footer } from "./components/Footer"
import { Numbers } from "./components/numbers"
import { mainContainerWidth, spacer } from "./styles/constants"

const Container = styled.div`
  max-width: ${mainContainerWidth}px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: ${spacer};
  margin-top: ${spacer};
  margin-bottom: ${spacer};
  background-color: #fff;
  padding-top: 0;
  border-radius: 15px;

  @media (max-width: 745px) {
    padding: 0.5rem;
  }
`

const App = () => {
  return (
    <Container>
      <Alenka />
      <Numbers />
      <Charts />
      <Footer />
    </Container>
  )
}

export default App
