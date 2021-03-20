import styled from "@emotion/styled"
import { colors } from "../../styles/theme"
import MoneyImage from "../../assets/images/5000kc.jpg"
import { FC, useCallback, useEffect, useState } from "react"
import { spacer } from "../../styles/constants"
import debtNumbers from "../../data/debt.json"

interface Props {
  range: number
  setRange: (set: number) => void
}

const gradientBg = `linear-gradient(90deg, ${colors.success} 20%, ${colors.error} 100%)`
const thumbImage = `url(${MoneyImage}) center center no-repeat`
const sliderHeight = 12
const thumbWidth = 80
const thumbHeight = 35

const StyledInput = styled.input`
  -webkit-appearance: none;
  margin: 10px 0;
  margin-top: ${spacer};
  width: 100%;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: ${sliderHeight}px;
    cursor: pointer;
    background: ${gradientBg};
    border-radius: 10px;
    border: 0px solid #000101;
  }

  &::-webkit-slider-thumb {
    border: 0px solid #000000;
    height: ${thumbHeight}px;
    width: ${thumbWidth}px;
    background: ${thumbImage};
    background-size: contain;
    cursor: pointer;
    -webkit-appearance: none;
    position: relative;
    top: -${thumbHeight / 3}px;
  }

  &:focus::-webkit-slider-runnable-track {
    background: ${gradientBg};
  }

  &::-moz-range-track {
    width: 100%;
    height: ${sliderHeight}px;
    cursor: pointer;
    animate: 0.2s;
    background: ${gradientBg};
    background-size: contain;
    border-radius: 10px;
    border: 0px solid #000101;
  }

  &::-moz-range-thumb {
    border: 0px solid #000000;
    height: ${thumbHeight}px;
    width: ${thumbWidth}px;
    background: ${thumbImage};
    background-size: contain;
    cursor: pointer;
  }

  &::-ms-track {
    width: 100%;
    height: ${sliderHeight}px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    border-width: ${thumbWidth}px 0;
    color: transparent;
  }

  &::-ms-fill-lower {
    background: ${gradientBg};
    border: 0px solid #000101;
    border-radius: 50%;
  }

  &::-ms-fill-upper {
    background: ${gradientBg};
    border: 0px solid #000101;
    border-radius: 50%;
  }

  &::-ms-thumb {
    border: 0px solid #000000;
    height: ${thumbHeight}px;
    width: ${thumbWidth}px;
    background: ${thumbImage};
    background-size: contain;
    cursor: pointer;
  }

  &:focus::-ms-fill-lower {
    background: ${gradientBg};
  }

  &:focus::-ms-fill-upper {
    background: ${gradientBg};
  }
`

const Text = styled.h2`
  text-align: center;
  font-weight: bold;
`

const SubText = styled.p<{ marginBottom?: number }>`
  text-align: center;
  margin-bottom: ${(props) =>
    props.marginBottom !== undefined ? props.marginBottom + "" : "16px"};
`

const SmallText = styled.p`
  margin: 0;
  font-size: 0.7em;
  text-align: center;
`

const peopleInCountry = 10512323

export const Slider: FC<Props> = ({ range, setRange }) => {
  const debtRecords = Object.values(debtNumbers)
  const lastRecord = Number(debtRecords[debtRecords.length - 1])
  const [debt, setDebt] = useState<number>(lastRecord)
  const [perPerson, setPerPerson] = useState<number>(
    (lastRecord * 1000000000) / peopleInCountry
  )

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()

      setRange(Number(e.target.value))
    },
    [setRange]
  )

  useEffect(() => {
    const interval = setInterval(
      () => setDebt(debt + 0.01),
      (1 / (range * 10)) * 20000
    )
    return () => clearInterval(interval)
  }, [debt, range])

  useEffect(() => {
    setPerPerson((debt * 1000000000) / peopleInCountry)
  }, [debt])

  return (
    <div>
      <StyledInput min="1" type="range" value={range} onChange={onChange} />
      <Text>👆 Intenzita tisku nových peněz na dluh</Text>
      <SubText>
        Vytočeno korun (v mld. Kč) k dluhu: {debt.toLocaleString()}
      </SubText>
      <SubText marginBottom={0}>
        Dluh na osobu: {perPerson.toLocaleString()} Kč
      </SubText>
      <SmallText>(počet ob. {peopleInCountry.toLocaleString()})</SmallText>
    </div>
  )
}
