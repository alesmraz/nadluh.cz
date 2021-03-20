import debtNumbers from "../../data/debt.json"
import { Bar } from "react-chartjs-2"
import { useMemo } from "react"
import styled from "@emotion/styled"
import { spacer } from "../../styles/constants"

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}

type Item = [string, string]

const Container = styled.div`
  margin-bottom: ${spacer};
`

export const Charts = () => {
  const data: Item[] = useMemo(() => Object.entries(debtNumbers), [])

  const backgroundColor = useMemo(
    () => new Array(data.length).fill("#7700ff"),
    [data]
  )

  const borderColor = useMemo(
    () => new Array(data.length).fill("rgba(119, 0, 255, 0.63)"),
    [data]
  )

  const chartData = useMemo(
    () => ({
      labels: data.map((itm) => itm[0]),
      datasets: [
        {
          label: "Státní dluh (v mld. Kč)",
          data: data.map((itm) => itm[1]),
          backgroundColor,
          borderColor,
          borderWidth: 1,
        },
      ],
    }),
    [data, backgroundColor, borderColor]
  )

  return (
    <Container>
      {!!data.length && <Bar data={chartData} options={options} />}
    </Container>
  )
}
