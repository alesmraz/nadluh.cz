import Debt from "./Debt"
import Inflation from "./Inflation"
import { Container, Col } from "./Elements"

export const Numbers = () => {
  return (
    <Container>
      <Col>
        <Debt />
      </Col>
      <Col>
        <Inflation />
      </Col>
    </Container>
  )
}
