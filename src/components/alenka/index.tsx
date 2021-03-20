import styled from "@emotion/styled"
import { useState } from "react"
import { spacer } from "../../styles/constants"
import { Slider } from "./Slider"
import { Video } from "./Video"

const Container = styled.div`
  margin-bottom: ${spacer};
`

export const Alenka = () => {
  const [range, setRange] = useState<number>(20)

  return (
    <Container>
      <Video speed={range} />
      <Slider range={range} setRange={setRange} />
    </Container>
  )
}
