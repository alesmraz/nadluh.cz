import React, { FC } from "react"
import { Title, Item, ItemTop, Year, Value } from "./Elements"
import debtNumbers from "../../data/debt.json"
import { interpolateColors } from "../../utils"
import { ColorNumber } from "../../types"

const Debt: FC = () => {
  const debtData = Object.entries(debtNumbers)
  const sorted = Object.values(debtNumbers).sort(
    (a: string, b: string) => Number(a) - Number(b)
  )

  const coloredValues = interpolateColors(
    "rgb(76, 175, 80)",
    "rgb(233, 31, 30)",
    sorted.length
  )

  const colorNumber: ColorNumber = {}

  sorted.forEach((element: string, i: number) => {
    colorNumber[element] = coloredValues[i]
  })

  return (
    <>
      <Title>Státní dluh (v mld. Kč)</Title>
      <ItemTop>
        <Year>Rok</Year>
        <span>Dluh</span>
      </ItemTop>

      {debtData.map((item, i) => {
        const colors = colorNumber[item[1]]
        const color = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`

        return (
          <Item key={i}>
            <Year>{item[0]}</Year>
            <Value color={color}>{item[1]}</Value>
          </Item>
        )
      })}
    </>
  )
}

export default Debt
