import styled from "@emotion/styled"
import Github from "./Github"

const Name = styled.div`
  text-align: center;
`

const SmallText = styled.p`
  font-size: 0.35em;
  margin-top: 0.25rem;
  text-align: center;
`

export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div>
      <Github />
      <Name>Nadluh.cz | {year}</Name>
      <SmallText>#moneyPrinterGoBrrr</SmallText>
    </div>
  )
}
